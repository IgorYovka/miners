import { DragDropActionTypes } from './types';


export function dragDropSetIsDragging(flag: boolean) {
  return {
    type: DragDropActionTypes.DRAG_DROP_DRAGGING,
    payload: flag
  };
}
export function dragDropSetDragId(id: string) {
  return {
    type: DragDropActionTypes.DRAG_DRAG_ID,
    payload: id
  };
}

export function dragDropSetDropId(id: string) {
  return {
    type: DragDropActionTypes.DRAG_DROP_ID,
    payload: id
  };
}

export function dragDropSetDroppedCoords(coords: {x:number, y:number}) {
  return {
    type: DragDropActionTypes.DRAG_DROP_COORDS,
    payload: coords
  };
}

export function dragDropSetClear() {
  return {
    type: DragDropActionTypes.DRAG_DROP_CLEAR,
  };
}