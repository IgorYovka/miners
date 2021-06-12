import React, { createContext, useEffect, useState, useCallback } from 'react';
import * as _ from 'lodash';
import {IBrain, IBrainManagerSubscriber, IDescribeEntity, IEntity, IMine} from "./interfaces/outerInterfaces";
import {useDispatch} from "react-redux";
import {logicEntitySet, logicSetData} from "src/store/logic/actions";
import {IEntityWithField, IWorker, IWorkersField} from "./interfaces/innerInterfaces";

interface IContext {
  createMine(props: Omit<IMine, 'id' | 'reception'>): void;
  createBase(props: Omit<IMine, 'id' | 'reception'>): void;
  createStore(props: Omit<IMine, 'id' | 'reception'>): void;
  createWorker(): void;
  assignWorker(wId: string, eId: string): void;
  removeWorker(id: string): void;
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
  
  const createWorker = () => {
    brain.workerManager.createWorker();
  };
  
  const assignWorker = (wId: string, fId: string) => {
    const worker = brain.manager.entities[wId] as IWorker;
    const field = brain.manager.entities[fId] as IWorkersField;
    
    if(worker && field){
      brain.workerManager.assignWorker(worker, field);
    }
  };
  
  const removeWorker = (wId: string) => {
    const worker = brain.manager.entities[wId] as IWorker;
  
    if(worker){
      brain.workerManager.removeWorker(worker);
    }
  };
  
  const brainManagerSubscriber = (data: IBrainManagerSubscriber) => {
    const {action, props, result} = data;
    
    if(action === 'createEntity'){
      dispatch(logicEntitySet({key: result.id, value: result, type: props.type}));
    }
  };
  
  const updateCycle = () => {
    setTimeout(()=>{
      const res = {
        workersIds: [] as string[],
        baseIds: [] as string[],
        storeIds: [] as string[],
        mineIds: [] as string[],
        entities: _.cloneDeep(brain.manager.entities)
      };
      
      for(let [key, entity] of Object.entries(res.entities)){
        const {type} = entity as IEntity;
        
        if(type === 'Worker'){
         res.workersIds.push(key)
        } else if (type === 'Base'){
          res.baseIds.push(key)
        } else if (type === 'Store'){
          res.storeIds.push(key)
        } else if (type === 'Mine'){
          res.mineIds.push(key)
        }
      }
      
      dispatch(logicSetData({...res}));
      updateCycle();
    }, 3000);
  };
  
  useEffect(() => {
    brain.manager.subscribe(brainManagerSubscriber);
    updateCycle();
  }, []);
  
  const contextValue = {
    createMine,
    createBase,
    createStore,
    createWorker,
    assignWorker,
    removeWorker
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export { Context, Provider };
