import Entity from './Entity';
import Mine from './Mine';
import Base from './Base';
import Store from './Store';

import {
  IEntity,
  IManager,
} from "./innerInterfaces";

import {
  IPropsMineCreate as OUTERIPropsMineCreate,
  IPropsBaseCreate as OUTERIPropsBaseCreate,
  IPropsStoreCreate as OUTERIPropsStoreCreate
} from './outerInterfaces';


class Manager implements IManager{
  entities: {[key: string]: IEntity};
  observers: any;
  
  constructor(){
    this.entities = {};
    this.observers = [];
  }
  
  createEntity(props: OUTERIPropsMineCreate | OUTERIPropsBaseCreate | OUTERIPropsStoreCreate){
    if(props?.type === 'mine'){
      const mine = new Mine(props);
      this.entities[mine.id] = mine;
      
      this.observers.forEach((o: any) => o({
        action: "createEntity",
        props,
        result: mine
      }));
    } else if(props?.type === 'base'){
      const base = new Base(props);
      this.entities[base.id] = base;
  
      this.observers.forEach((o: any) => o({
        action: "createEntity",
        props,
        result: base
      }));
    } else if(props?.type === 'store'){
      const store = new Store(props);
      this.entities[store.id] = store;
  
      this.observers.forEach((o: any) => o({
        action: "createEntity",
        props,
        result: store
      }));
    }
  }
  
  subscribe(foo: any){
    this.observers.push(foo);
  }
}

export default () => {
  return {
    manager: new Manager()
  }
}