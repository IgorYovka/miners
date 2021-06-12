import Entity from './Entity';
import {IPropsPayloadCreate, IPayload} from "../interfaces/innerInterfaces";

class Payload extends Entity implements IPayload{
  entity: Entity;
  amount: number;
  
  constructor(props: IPropsPayloadCreate){
    super();
    this.type = 'Payload';
    
    this.entity = props?.entity || new Entity();
    this.amount = props?.amount || 0;
  }
}

export default Payload;