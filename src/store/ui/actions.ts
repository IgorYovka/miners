import { UIActionTypes } from './types';

import {setData as setUIData} from '../ui/actions';

let idModalCounter = 0;

export function uiSetContextMenu(id: string) {
  return {
    type: UIActionTypes.UI_SET_CONTEXT_MENU,
    payload: id
  };
}

export const setData = (data: any) => {
  return {
    type: UIActionTypes.UI_SET_DATA,
    payload: data,
  };
};

export const queueModal = () => async (dispatch: any, getState: any): Promise<number> => {
  const modals = getState().ui.modals.slice();
  const id = ++idModalCounter;
  modals.unshift(id);
  await dispatch(setData({modals}));
  return id;
};

export const getCurrentModal = () => async (dispatch: any, getState: any) => {
  const modals = getState().ui.modals;
  if (modals.length) {
    await dispatch(setData({currentModal: modals[modals.length - 1]}));
  }
};

export const dequeueModal = (modal: number) => async (dispatch: any, getState: any) => {
  const modals = getState().ui.modals.slice();
  const currentModal = getState().ui.currentModal;
  
  if (currentModal === modal) {
    modals.pop();
    await dispatch(setData({modals, currentModal: null}));
  } else {
    await dispatch(setData({modals: modals.filter((mId: number) => mId !== modal)}));
  }
};

export const openModalById = (id: string) => async (dispatch: any, getState: any) => {
  const entity = getState().logic.entities[id];
  const entityType = Object.getPrototypeOf(entity)?.constructor?.name;
  
  console.log(entityType, id);
  
  if(typeof entityType === 'string' && entityType.toLowerCase() === 'base'){
    dispatch(setUIData({baseModal: true}));
  }
};