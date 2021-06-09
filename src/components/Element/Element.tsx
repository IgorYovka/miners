import React, {memo} from 'react';
import {useSelector} from "react-redux";
import {ContextMenuTrigger} from "react-contextmenu";
import {Component, Element as ComponentElement, Name} from './style';
import {RootState} from "../../store";

interface IProps {
  id: string
}

const Element = ({id}: IProps) => {
  const data = useSelector((s: RootState) => s.logic.entities[id]);
  const {name, coords} = data;
  const {x, y} = coords;
  
  //const contextMenuId = `${name}-${id}`;
  
  return <Component>
    <ContextMenuTrigger id={'element'}>
      <ComponentElement name={name} x={x} y={y}>
        <Name>{name}</Name>
      </ComponentElement>
    </ContextMenuTrigger>
  </Component>
};

export default Element;