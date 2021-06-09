export interface IEntity {
  id: string;
}

export interface ICoords extends IEntity{
  x: number;
  y: number;
}

export interface IReceptionPoint extends IEntity{
  coords: ICoords;
}

export interface IMine extends IEntity{
  name: string;
  coords: ICoords;
  reception: IReceptionPoint
}

export interface CreateEntityProps{
  type: string;
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

export interface IManager {
  entities: {[key: string]: IEntity};
  observers: any;
  subscribe(foo:any): void;
  createEntity(props: CreateEntityProps): any;
}

export interface IBrain {
  manager: IManager;
}

export interface IBrainManagerSubscriber {
  props: any;
  action: any;
  result: any;
}
