import {IEntity} from "../interfaces/innerInterfaces";

let entityCounter = 0;

class Entity implements IEntity{
  id: string;
  
  constructor(){
    this.id = `${entityCounter++}`;
  }
}

export default Entity;