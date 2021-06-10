import React, { createContext, useEffect, useState } from 'react';
import * as _ from 'lodash';
import {IBrain, IBrainManagerSubscriber, IMine} from "./interfaces/outerInterfaces";
import {useDispatch} from "react-redux";
import {logicEntitySet, logicUpdate} from "../store/logic/actions";

interface IContext {
  createMine(props: Omit<IMine, 'id' | 'reception'>): any;
  createBase(props: Omit<IMine, 'id' | 'reception'>): any;
  createStore(props: Omit<IMine, 'id' | 'reception'>): any;
}

const Context = createContext<IContext>({} as IContext);
Context.displayName = '__Brains__';

const Provider = ({ children, brain }: {brain: IBrain, children: any}) => {
  const dispatch = useDispatch();
  
  const createMine = (props: Omit<IMine, 'id' | 'reception'>) => {
    brain.manager.createEntity({...props, type: 'mine'});
  };
  
  const createBase = (props: Omit<IMine, 'id' | 'reception'>) => {
    brain.manager.createEntity({...props, type: 'base'});
  };
  
  const createStore = (props: Omit<IMine, 'id' | 'reception'>) => {
    brain.manager.createEntity({...props, type: 'store'});
  };
  
  const brainManagerSubscriber = (data: IBrainManagerSubscriber) => {
    const {action, props, result} = data;
    
    if(action === 'createEntity'){
      dispatch(logicEntitySet({key: result.id, value: result, type: props.type}));
    }
  };
  
  const updateCycle = () => {
    setTimeout(()=>{
      dispatch(logicUpdate({entities: _.cloneDeep(brain.manager.entities)}));
      updateCycle();
    }, 1000);
  };
  
  useEffect(() => {
    brain.manager.subscribe(brainManagerSubscriber);
    updateCycle();
  }, []);
  
  const contextValue = {
    createMine,
    createBase,
    createStore
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export { Context, Provider };
