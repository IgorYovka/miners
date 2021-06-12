import {
  ICoords,
  IPropsReceptionCreate,
  IReceptionPoint,
  IPayload,
  IMishok,
  IEntityFactory
} from "../interfaces/innerInterfaces";
import Entity from './Entity';
import Coords from './Coords';
import Payload from './Payload';
import EntityFactory from "./EntityFactory";

class ReceptionPoint extends Entity implements IReceptionPoint{
  coords: IEntityFactory<ICoords>;
  payload: Payload[];
  
  constructor(props: IPropsReceptionCreate){
    super();
    this.type = 'ReceptionPoint';
  
    this.coords = new EntityFactory({type: 'Coords', props});
    this.payload = [];
  }
  
  public loadPayload(mishok: IMishok){
    const {entity, amount} = mishok;
    
    const target = this.payload.find((p: Payload) =>
      Object.getPrototypeOf(p.entity).constructor.name === Object.getPrototypeOf(entity).constructor.name
    );
  
    if(target){
      target.amount += amount;
    }
  }
}

export default ReceptionPoint;