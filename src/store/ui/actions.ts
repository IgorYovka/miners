import { UIActionTypes } from './types';


export function uiSetContextMenu(id: string) {
  return {
    type: UIActionTypes.UI_SET_CONTEXT_MENU,
    payload: id
  };
}