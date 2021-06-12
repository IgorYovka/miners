import React, {memo, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setData} from 'src/store/ui/actions';
import {Component, Name} from './style';
import {RootState} from "src/store";
import {useContextMenu} from "react-contexify";

interface IProps {
  id: string
}

const Element = ({id}: IProps) => {
  const dispatch = useDispatch();
  const {show} = useContextMenu({
    id: "element"
  });
  
  const data = useSelector((s: RootState) => s.logic.entities[id]);
  const {name, coords} = data;
  
  const coordsObj = useSelector((s: RootState) => s.logic.entities[coords.id]);
  
  const {x, y} = coordsObj;
  
  const handleContextMenuClick = async (e: any) => {
    await dispatch(setData({contextMenu: id}));
    show(e);
    e.preventDefault();
    return false;
  };
  
  
  return <>
    <Component name={name} x={x} y={y} onContextMenu={handleContextMenuClick}>
      <Name>{name}</Name>
    </Component>
  </>
};

export default Element;