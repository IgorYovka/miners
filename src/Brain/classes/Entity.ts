import {IEntity, IManager} from "../interfaces/innerInterfaces";
import {Manager} from "../index";

let entityCounter = 0;

let manager: IManager;

class Entity implements IEntity{
  id: string;
  type: string;
  
  constructor(){
    this.id = `${entityCounter++}`;
    this.type = 'Entity';
  
    if(!manager){
      manager = new Manager();
    }
  
    manager.setEntity(this);
  }
}

export default Entity;