import {IBase, ICoords, IPropsBaseCreate, IReceptionPoint} from "./innerInterfaces";
import Entity from './Entity';
import Coords from './Coords';
import ReceptionPoint from './ReceptionPoint';

class Store extends Entity implements IBase{
  name: string;
  coords: ICoords;
  reception: IReceptionPoint;
  
  constructor(props: IPropsBaseCreate){
    super();
    
    this.name = props?.name || 'defaultBase';
    this.coords = new Coords(props);
    this.reception = new ReceptionPoint({coords: {x: this.coords.x + 10, y: this.coords.y + 10}})
  }
}

export default Store;