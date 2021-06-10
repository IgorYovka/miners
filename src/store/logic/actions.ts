import types from './types';

export function logicEntitySet(payload: {key: string, value: any, type: string}) {
  return {
    type: types.LOGIC_ENTITY_SET,
    payload
  };
}

export function logicUpdate(payload: any) {
  return {
    type: types.LOGIC_UPDATE,
    payload
  };
}