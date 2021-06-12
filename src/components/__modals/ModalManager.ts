import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getCurrentModal} from 'src/store/ui/actions';
import {RootState} from "src/store";


const ModalManager = () => {
  const dispatch = useDispatch();
  const {modals, currentModal} = useSelector((state: RootState) => state.ui);
  
  useEffect(() => {
    if(modals.length && !currentModal){
      dispatch(getCurrentModal());
    }
  }, [modals, currentModal]);
  
  return null;
};

export default ModalManager;