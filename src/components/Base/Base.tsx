import React, {memo} from 'react';
import {Draggable, Droppable} from 'react-beautiful-dnd';

import {BaseComponent, Item} from './styles';

interface IProps {
  className?: string
}

function getStyle(style: object, snapshot: any) {
  if (!snapshot.isDropAnimating) {
    return style;
  }
  const {moveTo, curve, duration} = snapshot.dropAnimation;
  // move to the right spot
  const translate = `translate(${moveTo.x}px, ${moveTo.y}px)`;
  // add a bit of turn for fun
  const rotate = 'rotate(0.5turn)';
  
  // patching the existing style
  return {
    ...style,
    // slowing down the drop because we can
    transitionDuration: `0.001s`,
  };
}

const Base = memo((props: IProps) => {
  const {className} = props;
  
  return <BaseComponent className={className}>
    <Droppable droppableId={"base"}>
      {
        (provided) =>
          <div {...provided.droppableProps}
               ref={provided.innerRef}
          >
            <Draggable
              key={'base'}
              draggableId={'base'}
              index={0}
            >
              {(provided, snapshot) => (
                <Item
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  //@ts-ignore
                  style={getStyle(provided.draggableProps.style, snapshot)}
                />
              )}
            </Draggable>
          </div>
      }
    </Droppable>
  </BaseComponent>
});

export default Base;