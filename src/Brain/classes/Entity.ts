import {Manager} from '../';
import {IEntity} from "../interfaces/innerInterfaces";

let entityCounter = 0;

class Entity implements IEntity{
  id: string;
  
  constructor(){
    this.id = `${entityCounter++}`;
    
    const manager = new Manager();
  
    manager.setEntity(this);
  }
}

export default Entity;