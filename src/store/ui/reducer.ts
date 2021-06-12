import {produce} from 'immer';
import {UIActionTypes} from './types';
import {RootState} from "../index";

const initialState = {
  contextMenu: '',
  modals: [],
  currentModal: null,
  baseModal: false
};

//@ts-ignore
const loadingReducer = (state: RootState = initialState, action: any): RootState => {
  return produce<RootState>(state, (draft: RootState) => {
    switch (action.type) {
      case UIActionTypes.UI_SET_DATA:
        for (const [key, value] of Object.entries(action.payload)) {
          draft[key] = value;
        }
        return;
      case UIActionTypes.UI_SET_CONTEXT_MENU:
        draft.contextMenu = action.payload;
        return;
        
      default:
        return state;
    }
  });
};

export default loadingReducer;
