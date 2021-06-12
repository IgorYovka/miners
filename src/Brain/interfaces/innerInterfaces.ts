import OreDeposit from "../classes/OreDeposit";

export interface IEntity {
  id: string;
  type: string;
}

export interface ICoords extends IEntity{
  x: number;
  y: number;
}

export interface IReceptionPoint extends IEntity{
  coords: IEntityFactory<ICoords>;
  loadPayload(s: IMishok): void;
}

export interface IWorker extends IEntity{
  field: IWorkersField | undefined;
  isWorking: boolean;
  speed: number;
  assign(field: IWorkersField): void;
  startJob(job: (w: IWorker) => Promise<void>): void;
  doingJob(job: (w: IWorker) => Promise<void>): void;
  stopJob(): Promise<void>;
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
  coords: IEntityFactory<ICoords>;
  reception: IEntityFactory<IReceptionPoint> | undefined;
  field: IEntityFactory<IWorkersField>;
  deposit: IEntityFactory<IOreDeposit>;
  start(): void;
  stop(): void;
}

export interface IBase extends IEntity{
  name: string;
  coords: IEntityFactory<ICoords>;
  reception: IEntityFactory<IReceptionPoint> | undefined
}

export interface IStore extends IEntity{
  name: string;
  coords: IEntityFactory<ICoords>;
  reception: IEntityFactory<IReceptionPoint> | undefined;
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

export interface IMishok extends Omit<IPayload, 'id' | 'type'>{
  entity: IEntity;
  amount: number;
}

export interface IWorkerManager {
  workers: IWorker[];
  createWorker(): void;
  removeWorker(w: IWorker): void;
  assignWorker(worker: IWorker, field: IWorkersField): void
}

export interface IManager {
  entities: {[key: string]: IEntity};
  observers: any;
  createEntity(props: CreateEntityProps): any;
  setEntity(e: IEntity): void;
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

export interface IEntityWithField extends IEntity{
  field: IWorkersField;
}

export interface IEntitySign {
  id: string;
  type: string;
}


export type EntityType = IWorker | ICoords | IMine | IBase | IStore | IReceptionPoint | IWorkersField | IOreDeposit | IOreDeposit | IPayload;
export type EntityStringType = 'Worker' | 'Coords' | 'Mine' | 'Base' | 'Store' | 'ReceptionPoint' | 'WorkersField' | 'OreDeposit' | 'OrePiece' | 'Payload';
export type EntityFactoryPropsType = IPropsBaseCreate | IPropsCoordsCreate | IPropsMineCreate | IPropsOreDepositCreate
  | IPropsOrePieceCreate | IPropsPayloadCreate | IPropsReceptionCreate | IPropsStoreCreate | IPropsWorkerCreate | IPropsWorkersFieldCreate


export interface IEntityFactory<T> {
  manager: IManager;
  type: EntityStringType
  id: string;
  $: T | undefined;
}