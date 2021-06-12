import Entity from './Entity';

import Worker from './Worker';
import Coords from './Coords';
import Mine from './Mine';
import Base from './Mine';
import Store from './Store';
import ReceptionPoint from './ReceptionPoint';
import WorkersField from './WorkersField';
import OreDeposit from './OreDeposit';

import {Manager} from '../';

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
  EntityStringType,
  EntityFactoryPropsType
} from "../interfaces/innerInterfaces";


interface IEntityFactoryProps<T> {
  type: EntityStringType;
  props: T;
}

class EntityFactory<T> implements IEntityFactory<T>{
  manager: IManager;
  type: EntityStringType;
  id: string;
  
  constructor({type, props}: IEntityFactoryProps<EntityFactoryPropsType>){
    this.type = type;
    this.id = '-1';
    
    let entity = new Entity();
    
    this.manager = new Manager();
    
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
        throw new Error(`Wrong props on type ${type}`);
      }
      
      this.id = entity.id;
      this.manager.setEntity(entity);
      
    } catch (e) {
      console.error(e);
    }
  }
  
  get $():T | undefined{
    //@ts-ignore
    return this.manager.entities[this.id]
  }
}

export default EntityFactory;