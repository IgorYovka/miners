import {IBase, ICoords, IEntityFactory, IPropsBaseCreate, IReceptionPoint} from "../interfaces/innerInterfaces";
import Entity from './Entity';
import EntityFactory from './EntityFactory';

class Base extends Entity implements IBase{
  name: string;
  coords: IEntityFactory<ICoords>;
  reception: IEntityFactory<IReceptionPoint> | undefined;
  
  constructor(props: IPropsBaseCreate){
    super();
    this.type = 'Base';
    
    this.name = props?.name || 'defaultBase';
    this.coords = new EntityFactory({type: 'Coords', props});
    
    if(this.coords.$){
      this.reception = new EntityFactory({
        type: 'ReceptionPoint',
        props: {coords: {x: this.coords.$.y + 10, y: this.coords.$.y + 10}}
      });
    } else {
      this.reception = undefined;
    }
  }
}

export default Base;