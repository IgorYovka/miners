import Mine from './classes/Mine';
import Base from './classes/Base';
import Store from './classes/Store';

import {
  IEntity, IEntityFactory,
  IManager,
} from "./interfaces/innerInterfaces";

import {
  IPropsMineCreate as OUTERIPropsMineCreate,
  IPropsBaseCreate as OUTERIPropsBaseCreate,
  IPropsStoreCreate as OUTERIPropsStoreCreate
} from './interfaces/outerInterfaces';
import WorkerManager from "./classes/WorkerManager";
import Entity from "./classes/Entity";
import EntityFactory from "./classes/EntityFactory";


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
    let entity: IEntityFactory<IEntity>;
    
    if(props?.type === 'mine'){
      entity = new EntityFactory({type: 'Mine', props});
      
      this.observers.forEach((o: any) => o({
        action: "createEntity",
        props,
        result: entity.$
      }));
    } else if(props?.type === 'base'){
      entity = new EntityFactory({type: 'Base', props});
  
      this.observers.forEach((o: any) => o({
        action: "createEntity",
        props,
        result: entity.$
      }));
    } else if(props?.type === 'store'){
      entity = new EntityFactory({type: 'Store', props});
  
      this.observers.forEach((o: any) => o({
        action: "createEntity",
        props,
        result: entity.$
      }));
    } else {
      entity = new EntityFactory({props});
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