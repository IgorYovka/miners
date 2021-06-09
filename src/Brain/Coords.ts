import {ICoords, IPropsCoordsCreate} from "./innerInterfaces";
import Entity from './Entity';

class Coords extends Entity implements ICoords{
  x: number;
  y: number;
  
  constructor(props: IPropsCoordsCreate){
    super();
    
    const {x = 0, y = 0} = props.coords;
    
    this.x = x;
    this.y = y;
  }
  
  get(){
    return {x: this.x, y: this.y}
  }
}

export default Coords;