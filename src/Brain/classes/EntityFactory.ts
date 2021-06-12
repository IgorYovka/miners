import {Manager} from '../';

import Entity from './Entity';

import Worker from './Worker';
import Coords from './Coords';
import Mine from './Mine';
import Base from './Base';
import Store from './Store';
import ReceptionPoint from './ReceptionPoint';
import WorkersField from './WorkersField';
import OreDeposit from './OreDeposit';

import {
  IManager,
  IPropsBaseCreate,
  IPropsCoordsCreate,
  IPropsMineCreate,
  IPropsOreDepositCreate,
  IPropsOrePieceCreate,
  IPropsPayloadCreate,
  IPropsReceptionCreate,
  IPropsStoreCreate,
  IPropsWorkerCreate,
  IPropsWorkersFieldCreate,
  IEntityFactory,
  EntityType,
  IEntity,
  EntityStringType,
  EntityFactoryPropsType
} from "../interfaces/innerInterfaces";


let manager: IManager;

interface IEntityFactoryProps<T> {
  type?: EntityStringType;
  props: T;
}

class EntityFactory<T> implements IEntityFactory<T>{
  type: EntityStringType;
  id: string;
  
  constructor({type = 'Entity', props}: IEntityFactoryProps<EntityFactoryPropsType>){
    this.type = type;
    this.id = '-1';
    
    if(!manager){
      manager = new Manager();
    }
    
    let entity: IEntity;
    
    try{
      if(type === 'Worker'){
        entity = new Worker(props as IPropsWorkerCreate);
      } else if (type === 'Coords'){
        entity = new Coords(props as IPropsCoordsCreate);
      } else if (type === 'Mine'){
        entity = new Mine(props as IPropsMineCreate);
      } else if (type === 'Base'){
        entity = new Base(props as IPropsBaseCreate);
      } else if (type === 'Store'){
        entity = new Store(props as IPropsStoreCreate);
      } else if (type === 'ReceptionPoint'){
        entity = new ReceptionPoint(props as IPropsReceptionCreate);
      } else if (type === 'WorkersField'){
        entity = new WorkersField(props as IPropsWorkersFieldCreate);
      } else if (type === 'OreDeposit') {
        entity = new OreDeposit(props as IPropsOreDepositCreate);
      } else {
        entity = new Entity();
      }
      
      this.id = entity.id;
      
    } catch (e) {
      console.error(e);
    }
  }
  
  get $():T | undefined{
    //@ts-ignore
    return manager.entities[this.id]
  }
}

export default EntityFactory;