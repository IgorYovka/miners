import Entity from './Entity';

import {
  ICoords,
  IMine,
  IPropsMineCreate,
  IReceptionPoint,
  IWorker,
  IWorkersField,
  IOreDeposit, IMishok, IPayload, IEntityFactory
} from "../interfaces/innerInterfaces";
import OrePiece from "./OrePiece";
import EntityFactory from "./EntityFactory";

class Mine extends Entity implements IMine {
  name: string;
  coords: IEntityFactory<ICoords>;
  reception: IEntityFactory<IReceptionPoint> | undefined;
  field: IEntityFactory<IWorkersField>;
  deposit: IEntityFactory<IOreDeposit>;
  
  constructor(props: IPropsMineCreate) {
    super();
    this.type = 'Mine';
    
    this.name = props?.name || 'defaultMine';
    this.coords = new EntityFactory({type: 'Coords', props});
    
    if (this.coords.$) {
      this.reception = new EntityFactory({
        type: 'ReceptionPoint',
        props: {
          coords: {
            x: this.coords.$.y + 10,
            y: this.coords.$.y + 10
          }
        }
      });
    } else {
      this.reception = undefined;
    }
    
    this.deposit = new EntityFactory({
      type: 'OreDeposit',
      props: {material: 'gold', quality: 1, amount: 100000}
    });
    
    this.field = new EntityFactory({
      type: 'WorkersField',
      props: {job: this.minerJob}
    });
    
    this.minerJob = this.minerJob.bind(this);
  }
  
  private async minerJob(w: IWorker) {
    const mishok = await this.mining(w);
    
    if (mishok) {
      await this.transport(mishok);
    }
  }
  
  private async mining(w: IWorker): Promise<IMishok | void> {
    await new Promise(r => setTimeout(r, 1000));
    const deposit = this.deposit.$;
    
    if (deposit) {
      deposit.amount--;
      
      return {
        amount: w.speed,
        entity: new OrePiece({material: deposit.material, quality: deposit.quality})
      } as IMishok
    }
  }
  
  private async transport(m: IMishok) {
    const r = this.reception?.$;
    
    if (r)
      r.loadPayload(m);
  }
  
  start() {
    const f = this.field.$;
    
    if (f)
      f.start();
  }
  
  stop() {
    const f = this.field.$;
  
    if (f)
      f.stop();
  }
}

export default Mine;
