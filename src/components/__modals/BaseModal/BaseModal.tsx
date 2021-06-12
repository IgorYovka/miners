import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Component, Transports, Divider} from "./styles";
import Modal from "../../Modal/Modal";
import Workers from 'src/components/Workers/Workers';
import {RootState} from "src/store";
import {setData} from "src/store/ui/actions";

const BaseModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((s: RootState) => s.ui.baseModal);
  
  const onClickHandler = () => {
    dispatch(setData({baseModal: false}));
  };
  
  return isOpen ? <Modal onWrapperClick={onClickHandler} set={'other'}>
    <Component>
      <Workers className={'modalWorkers'}/>
      <Divider/>
      <Transports/>
    </Component>
  </Modal> : null
};

export default BaseModal;