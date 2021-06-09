import React, { createContext, useEffect, useState } from 'react';
import {IBrain, IBrainManagerSubscriber, IMine} from "./outerInterfaces";
import {useDispatch} from "react-redux";
import {logicEntitySet} from "../store/logic/actions";

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
  
  useEffect(() => {
    brain.manager.subscribe(brainManagerSubscriber);
  }, []);
  
  const contextValue = {
    createMine,
    createBase,
    createStore
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export { Context, Provider };
