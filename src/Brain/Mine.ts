import {ICoords, IMine, IPropsMineCreate, IReceptionPoint} from "./innerInterfaces";
import Entity from './Entity';
import Coords from './Coords';
import ReceptionPoint from './ReceptionPoint';

class Mine extends Entity implements IMine{
  name: string;
  coords: ICoords;
  reception: IReceptionPoint;
  
  constructor(props: IPropsMineCreate){
    super();
    
    this.name = props?.name || 'defaultMine';
    this.coords = new Coords(props);
    this.reception = new ReceptionPoint({coords: {x: this.coords.x + 10, y: this.coords.y + 10}})
  }
}

export default Mine;
