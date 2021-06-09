import {produce} from 'immer';
import {UIActionTypes} from './types';
import {RootState} from "../index";

const initialState = {
  contextMenu: ''
};

//@ts-ignore
const loadingReducer = (state: RootState = initialState, action: any): RootState => {
  return produce<RootState>(state, (draft: RootState) => {
    switch (action.type) {
      case UIActionTypes.UI_SET_CONTEXT_MENU:
        draft.contextMenu = action.payload;
        return;
        
      default:
        return state;
    }
  });
};

export default loadingReducer;
