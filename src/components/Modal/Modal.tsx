import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {queueModal, dequeueModal} from 'src/store/ui/actions';

import Portal from '../Portal';

import {Component, Content} from './styles';
import {RootState} from "src/store";

const Modal = (props: any) => {
  const {
    children,
    onClose,
    onContentClick,
    onWrapperClick
  } = props;
  const dispatch = useDispatch();
  const currentModal = useSelector((state: RootState) => state.ui.currentModal);
  const [id, setId] = useState<number>(0);
  const idRef = useRef<number>(0);
  
  const onWrapperClickHandler = async (e: any) => {
    if (onWrapperClick) {
      onWrapperClick(e)
    } else {
      await onCloseClick(e);
    }
  };
  
  const onContentClickHandler = (e: any) => {
    e.stopPropagation();
    if (onContentClick) {
      onContentClick(e);
    }
  };
  
  const onCloseClick = async (e: any) => {
    e.stopPropagation();
    
    if (onClose) {
      await onClose();
    }
    await dispatch(dequeueModal(id));
  };
  
  const onUnmount = async () => {
    const body = document.getElementsByTagName('body')[0];
    body.style.overflow = 'auto';
    await dispatch(dequeueModal(idRef.current));
  };
  
  const didMount = async () => {
    //@ts-ignore
    idRef.current = await dispatch(queueModal());
    setId(idRef.current);
  
    const body = document.getElementsByTagName('body')[0];
    body.style.overflow = 'hidden';
  };
  
  // componentDidMount
  useEffect( () => {
    didMount();
  }, []);
  
  // componentWillUnmount
  //@ts-ignore
  useEffect(() => {
    return onUnmount
  }, []);
  
  return id === currentModal ?
    <Portal id='modal'>
      <Component onClick={onWrapperClickHandler}>
        <Content onClick={onContentClickHandler}>
          {children}
        </Content>
      </Component>
    </Portal>
    : null;
};

export default Modal;