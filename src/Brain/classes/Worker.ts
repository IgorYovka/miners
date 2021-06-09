import {ICoords, IMine, IPropsMineCreate, IReceptionPoint, IWorker, IPropsWorkerCreate} from "../interfaces/innerInterfaces";
import Entity from './Entity';

class Worker extends Entity implements IWorker{
  speed: number;
  isWorking: boolean;
  
  constructor(props: IPropsWorkerCreate){
    super();
    
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
}

export default Worker;