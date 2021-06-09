import {ICoords, IPropsReceptionCreate, IReceptionPoint} from "./innerInterfaces";
import Entity from './Entity';
import Coords from './Coords';

class ReceptionPoint extends Entity implements IReceptionPoint{
  coords: ICoords;
  
  constructor(props: IPropsReceptionCreate){
    super();
    
    this.coords = new Coords(props);
  }
}

export default ReceptionPoint;