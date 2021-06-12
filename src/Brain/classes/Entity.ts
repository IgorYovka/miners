import {Manager} from '../';
import {IEntity} from "../interfaces/innerInterfaces";

let entityCounter = 0;

class Entity implements IEntity{
  id: string;
  type: string;
  
  constructor(){
    this.id = `${entityCounter++}`;
    this.type = 'Entity';
    
    const manager = new Manager();
  
    manager.setEntity(this);
  }
  
  remove(){
    const manager = new Manager();
    manager.remove
  }
}

export default Entity;