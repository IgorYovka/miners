import {IEntity} from "../interfaces/innerInterfaces";

let entityCounter = 0;

class Entity implements IEntity{
  id: string;
  type: string;
  
  constructor(){
    this.id = `${entityCounter++}`;
    this.type = 'Entity';
  }
}

export default Entity;