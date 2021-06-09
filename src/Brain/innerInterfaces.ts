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

export interface IManager {
  entities: {[key: string]: IEntity};
  observers: any;
  createEntity(props: CreateEntityProps): any;
}

export interface CreateEntityProps{
  type?: string;
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