import React, {memo, useRef} from 'react';
import {Droppable} from 'react-beautiful-dnd';
import {useDispatch, useSelector} from "react-redux";
import {dragDropSetDroppedCoords} from "../../store/dragDrop/actions";
import ElementCreation from '../../components/ElementCreation/ElementCreation';
import ContextMenu from '../../components/ContextMenu/ContextMenu';
import Element from '../../components/Element/Element';

import {CanvasComponent, CanvasContent} from './styles';
import {RootState} from "../../store";

const Canvas = memo(({className} : {className?: string}) => {
  const canvasRef = useRef(null);
  const isDragging = useSelector((s: RootState) => s.dragDrop.isDragging);
  const elements = useSelector((s: RootState) => s.logic.idsForCanvas.map((ids: string) => s.logic[ids])).flat();
  const dispatch = useDispatch();
  
  console.log("Canvas");
  
  const handleMouseUp = (e: any) => {
    const parent = document.getElementById('canvasWrapper');
    if(parent && canvasRef?.current && isDragging){
      //@ts-ignore
      const x = e.nativeEvent.clientX - parent?.offsetLeft;
      //@ts-ignore
      const y = e.nativeEvent.clientY - canvasRef.current?.offsetTop;
  
      dispatch(dragDropSetDroppedCoords({x, y}));
    }
  };
  
  return <CanvasComponent className={className} onMouseUp={handleMouseUp} ref={canvasRef}>
    <Droppable droppableId={"1"}>
      {(provided) =>
        <CanvasContent
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {
            elements.map( (e: string) => <Element key={e} id={e}/>)
          }
        </CanvasContent>}
    </Droppable>
    <ElementCreation/>
    <ContextMenu/>
  </CanvasComponent>
});

export default Canvas;