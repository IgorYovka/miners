import Mine from './classes/Mine';
import Base from './classes/Base';
import Store from './classes/Store';

import {
  IEntity,
  IManager,
} from "./interfaces/innerInterfaces";

import {
  IPropsMineCreate as OUTERIPropsMineCreate,
  IPropsBaseCreate as OUTERIPropsBaseCreate,
  IPropsStoreCreate as OUTERIPropsStoreCreate
} from './interfaces/outerInterfaces';
import WorkerManager from "./classes/WorkerManager";


export class Manager implements IManager{
  entities: {[key: string]: IEntity};
  observers: any;
  
  private static _instance: Manager;
  
  constructor(){
    if (!Manager._instance) {
      Manager._instance = this;
  
      this.entities = {};
      this.observers = [];
    } else {
      this.entities = Manager._instance.entities;
      this.observers = Manager._instance.observers;
    }
    return Manager._instance;
  }
  
  createEntity(props: OUTERIPropsMineCreate | OUTERIPropsBaseCreate | OUTERIPropsStoreCreate){
    if(props?.type === 'mine'){
      const mine = new Mine(props);
      
      this.observers.forEach((o: any) => o({
        action: "createEntity",
        props,
        result: mine
      }));
    } else if(props?.type === 'base'){
      const base = new Base(props);
  
      this.observers.forEach((o: any) => o({
        action: "createEntity",
        props,
        result: base
      }));
    } else if(props?.type === 'store'){
      const store = new Store(props);
  
      this.observers.forEach((o: any) => o({
        action: "createEntity",
        props,
        result: store
      }));
    }
  }
  
  setEntity(entity: IEntity){
    this.entities[entity.id] = entity;
  }
  
  subscribe(foo: any){
    this.observers.push(foo);
  }
}

export default () => {
  return {
    manager: new Manager(),
    workerManager: new WorkerManager(),
    //transportManager: new TransportManager()
  }
}