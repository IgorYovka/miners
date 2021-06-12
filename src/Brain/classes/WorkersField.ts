import {IWorker, IWorkersField, IPropsWorkersFieldCreate} from "../interfaces/innerInterfaces";
import Entity from './Entity';

class WorkersField extends Entity implements IWorkersField{
  workers: IWorker[];
  //job(worker: IWorker): Promise<void>;
  
  constructor(props: IPropsWorkersFieldCreate){
   super();
   this.type = 'WorkersField';
   
   this.workers = [];
   this.job = props.job;
  }
  
  async job(worker: IWorker){
  
  }
  
  addWorker(w: IWorker){
    this.workers.push(w);
  }
  
  removeWorker(wId: string){
    const workerIndexToRemove = this.workers.findIndex((w: IWorker) => w.id === wId);
  
    this.workers[workerIndexToRemove].stopJob().then(() => {
      this.workers.splice(workerIndexToRemove, 1);
    });
  }
  
  start(){
    this.workers.forEach((w: IWorker) => w.startJob(this.job))
  }
  
  stop(){
    this.workers.forEach((w: IWorker) => w.stopJob())
  }
}

export default WorkersField;