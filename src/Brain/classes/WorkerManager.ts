import {IWorker, IWorkerManager, IPropsWorkersFieldCreate, IWorkersField} from "../interfaces/innerInterfaces";

import Worker from './Worker';

class WorkerManager implements IWorkerManager{
  workers: IWorker[];
  
  private static _instance: WorkerManager;
  
  constructor(){
    if (!WorkerManager._instance) {
      WorkerManager._instance = this;
      
      this.workers = [];
    } else {
      this.workers = WorkerManager._instance.workers;
    }
    return WorkerManager._instance;
  }
  
  async createWorker(){
    const newWorker = new Worker({speed: 60});
    
    this.workers.push(newWorker);
    console.log('createWorker');
  }
  
  async removeWorker(worker: IWorker){
    
    const workerIndexToRemove = this.workers.findIndex((w: IWorker) => w.id === worker.id);
  
    this.workers[workerIndexToRemove].stopJob().then(() => {
      this.workers.splice(workerIndexToRemove, 1);
      
    });
  }
  
  async assignWorker(worker: IWorker, field: IWorkersField): Promise<void> {
    worker.assign(field);
  };
}

export default WorkerManager;