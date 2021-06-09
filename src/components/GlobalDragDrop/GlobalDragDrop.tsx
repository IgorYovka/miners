import React, {memo, useCallback, useEffect} from 'react';
import {DragDropContext, DragStart, DropResult, ResponderProvided} from 'react-beautiful-dnd';
import {useDispatch} from "react-redux";
import {dragDropSetDragId, dragDropSetDropId, dragDropSetIsDragging} from "../../store/dragDrop/actions";

interface IProps {
  children: any;
}

const GlobalDragDrop = memo(({children}: IProps) => {
  const dispatch = useDispatch();
  
  const onBeforeCapture = useCallback(() => {
  
  }, []);
  
  const onBeforeDragStart = useCallback((start: DragStart) => {
    dispatch(dragDropSetIsDragging(true));
    dispatch(dragDropSetDragId(start.draggableId));
  }, [dispatch]);
  
  const onDragStart = useCallback((event: DragEvent) => {
   // dispatch(dragDropSetDragId("base"));
  }, [dispatch]);
  
  const onDragUpdate = useCallback(() => {
  
  }, []);
  
  const onDragEnd = useCallback(( result: DropResult, provided: ResponderProvided) => {
    dispatch(dragDropSetDropId("canvas"));
    dispatch(dragDropSetIsDragging(false));
  }, [dispatch]);
  
  return <DragDropContext
    onBeforeCapture={onBeforeCapture}
    onBeforeDragStart={onBeforeDragStart}
    onDragStart={onDragStart}
    onDragUpdate={onDragUpdate}
    onDragEnd={onDragEnd}
  >
    {children}
  </DragDropContext>
});

export default GlobalDragDrop