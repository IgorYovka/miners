import {produce} from 'immer';
import {DragDropActionTypes} from './types';
import {RootState} from "../index";

const initialState = {
  isDragging: false,
  dragId: undefined,
  dropId: undefined,
  droppedCoords: undefined
};

//@ts-ignore
const loadingReducer = (state: RootState = initialState, action: any): RootState => {
  return produce<RootState>(state, (draft: RootState) => {
    switch (action.type) {
      case DragDropActionTypes.DRAG_DROP_DRAGGING:
        draft.isDragging = action.payload;
        return;
      case DragDropActionTypes.DRAG_DRAG_ID:
        draft.dragId = action.payload;
        return;
      case DragDropActionTypes.DRAG_DROP_ID:
        draft.dropId = action.payload;
        return;
      case DragDropActionTypes.DRAG_DROP_COORDS:
        draft.droppedCoords = action.payload;
        return;
      case DragDropActionTypes.DRAG_DROP_CLEAR:
        for (const [key, value] of Object.entries(initialState)) {
          draft[key] = value
        }
        return;
        
      default:
        return state;
    }
  });
};

export default loadingReducer;
