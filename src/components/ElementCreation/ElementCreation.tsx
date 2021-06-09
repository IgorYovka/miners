import React, {memo, useContext, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Context} from '../../Brain/BrainContext';
import {dragDropSetClear} from "../../store/dragDrop/actions";

const ElementCreation = memo(() => {
  const {
    isDragging,
    dragId,
    dropId,
    droppedCoords
  } = useSelector(s => s.dragDrop);
  
  const dispatch = useDispatch();
  const brains = useContext(Context);
  
  useEffect(() => {
    if(!isDragging && dropId && dragId && !!droppedCoords){
      
      if(dragId === 'mine'){
        brains.createMine({
          name: dragId,
          coords: {...droppedCoords}
        });
      } else if(dragId === 'store'){
        brains.createStore({
          name: dragId,
          coords: {...droppedCoords}
        });
      } else if(dragId === 'base'){
        brains.createBase({
          name: dragId,
          coords: {...droppedCoords}
        });
      }
      dispatch(dragDropSetClear());
    }
  }, [isDragging, dropId, dragId, droppedCoords]);
  
  return null
});

export default ElementCreation;