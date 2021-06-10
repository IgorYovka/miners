import {
  ICoords,
  IMine,
  IPropsMineCreate,
  IReceptionPoint,
  IWorker,
  IPropsWorkerCreate,
  IWorkersField
} from "../interfaces/innerInterfaces";
import Entity from './Entity';

class Worker extends Entity implements IWorker{
  field: IWorkersField | undefined;
  speed: number;
  isWorking: boolean;
  
  constructor(props: IPropsWorkerCreate){
    super();
    
    this.field = undefined;
    this.speed = props?.speed || 0;
    this.isWorking = false;
  }
  
  async startJob(job: (w: IWorker) => Promise<void>){
    this.isWorking = true;
    
    return this.doingJob(job);
  }
  
  async doingJob(job: (w: IWorker) => Promise<void>){
    if(this.isWorking){
       await job(this);
       await new Promise(r => setTimeout(r, 1000));
       this.doingJob(job);
    }
  }
  
  async stopJob(){
    this.isWorking = false;
  }
  
  async assign(field: IWorkersField){
    await this.stopJob();
    this.field = field;
  }
}

export default Worker;