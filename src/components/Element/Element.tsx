import React, {memo, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setData, openModalById} from 'src/store/ui/actions';
import {Component, Name, ContextMenu as CM, MenuItem} from './style';
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
  
  const contextMenu = useSelector((s: RootState) => s.ui.contextMenu);
  
  const data = useSelector((s: RootState) => s.logic.entities[id]);
  const {name, coords} = data;
  const {x, y} = coords;
  
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