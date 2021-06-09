
export interface IEntity {
  id: string;
}

export interface ICoords extends IEntity{
  x: number;
  y: number;
}

export interface IReceptionPoint extends IEntity{
  coords: ICoords;
  loadPayload(s: IMishok): void;
}

export interface IWorker extends IEntity{
  isWorking: boolean;
  speed: number;
  startJob(job: (w: IWorker) => Promise<void>): void;
  doingJob(job: (w: IWorker) => Promise<void>): void;
  stopJob: any;
}

export interface IWorkersField extends IEntity{
  workers: IWorker[]
  job(worker: IWorker): Promise<void>;
  addWorker(w: IWorker): void;
  removeWorker(wId: string): void;
  start(): void;
  stop(): void;
}


export interface IMine extends IEntity{
  name: string;
  coords: ICoords;
  reception: IReceptionPoint;
  field: IWorkersField;
  start(): void;
  stop(): void;
}

export interface IBase extends IEntity{
  name: string;
  coords: ICoords;
  reception: IReceptionPoint
}

export interface IStore extends IEntity{
  name: string;
  coords: ICoords;
  reception: IReceptionPoint
}

export interface IOreDeposit extends IEntity{
  material: string;
  amount: number;
  quality: number;
}

export interface IOrePiece extends IEntity{
  material: string;
  quality: number;
}

export interface IPayload extends IEntity{
  entity: IEntity;
  amount: number;
}

export interface IMishok extends Omit<IPayload, 'id'>{
  entity: IEntity;
  amount: number;
}

export interface IManager {
  entities: {[key: string]: IEntity};
  observers: any;
  createEntity(props: CreateEntityProps): any;
}

export interface CreateEntityProps{
  type?: string;
}

export interface IPropsWorkerCreate extends CreateEntityProps {
  speed: number;
}

export interface IPropsCoordsCreate extends CreateEntityProps{
  coords: {x: number; y: number};
}

export interface IPropsMineCreate extends CreateEntityProps{
  name?: string;
  coords: {x: number; y: number};
}

export interface IPropsBaseCreate extends CreateEntityProps{
  name?: string;
  coords: {x: number; y: number};
}

export interface IPropsStoreCreate extends CreateEntityProps{
  name?: string;
  coords: {x: number; y: number};
}

export interface IPropsReceptionCreate extends CreateEntityProps{
  coords: {x: number; y: number};
}

export interface IPropsWorkersFieldCreate extends CreateEntityProps{
  job(worker: IWorker): Promise<void>;
}

export interface IPropsOreDepositCreate extends CreateEntityProps {
  material: string;
  amount: number;
  quality: number;
}

export interface IPropsOrePieceCreate extends CreateEntityProps {
  material: string;
  quality: number;
}

export interface IPropsPayloadCreate extends CreateEntityProps{
  entity: IEntity;
  amount?: number;
}