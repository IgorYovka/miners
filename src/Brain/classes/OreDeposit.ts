import {IOreDeposit, IPropsOreDepositCreate} from "../interfaces/innerInterfaces";
import Entity from './Entity';

class OreDeposit extends Entity implements IOreDeposit{
  material: string;
  amount: number;
  quality: number;
  
  constructor(props: IPropsOreDepositCreate){
    super();
    
    this.material = props?.material || 'gold';
    this.amount = props?.amount || 0;
    this.quality = props?.quality || 1;
  }
}

export default OreDeposit;