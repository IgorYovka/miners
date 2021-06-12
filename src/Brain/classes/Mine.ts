import Entity from './Entity';
import Coords from './Coords';
import ReceptionPoint from './ReceptionPoint';
import WorkersField from "./WorkersField";
import OreDeposit from "./OreDeposit";

import {
  ICoords,
  IMine,
  IPropsMineCreate,
  IReceptionPoint,
  IWorker,
  IWorkersField,
  IOreDeposit, IMishok, IPayload
} from "../interfaces/innerInterfaces";
import OrePiece from "./OrePiece";

class Mine extends Entity implements IMine{
  name: string;
  coords: ICoords;
  reception: IReceptionPoint;
  field: IWorkersField;
  deposit: IOreDeposit;
  
  constructor(props: IPropsMineCreate){
    super();
    this.type = 'Mine';
    
    this.name = props?.name || 'defaultMine';
    this.coords = new Coords(props);
    this.reception = new ReceptionPoint({coords: {x: this.coords.x + 10, y: this.coords.y + 10}});
    this.deposit = new OreDeposit({material: 'gold', quality: 1, amount: 100000});
    
    this.field = new WorkersField({job: this.minerJob});
    
    this.minerJob = this.minerJob.bind(this);
  }
  
  private async minerJob(w: IWorker) {
    const mishok = await this.mining(w);
    await this.transport(mishok);
  }
  
  private async mining(w: IWorker): Promise<IMishok>{
    await new Promise(r => setTimeout(r, 1000));
    this.deposit.amount--;
    return {
      amount: w.speed,
      entity: new OrePiece({material: this.deposit.material, quality: this.deposit.quality})
    } as IMishok
  }
  
  private async transport(m: IMishok){
    this.reception.loadPayload(m);
  }
  
  start(){
    this.field.start();
  }
  
  stop(){
    this.field.stop();
  }
}

export default Mine;
