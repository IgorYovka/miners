import {IOrePiece, IPropsOrePieceCreate} from "../interfaces/innerInterfaces";
import Entity from './Entity';

class OrePiece extends Entity implements IOrePiece{
  material: string;
  quality: number;
  
  constructor(props: IPropsOrePieceCreate){
    super();
    this.type = 'OrePiece';
    
    this.material = props?.material || 'gold';
    this.quality = props?.quality || 1;
  }
}

export default OrePiece;