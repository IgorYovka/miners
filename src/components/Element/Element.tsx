import React, {memo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setData} from 'src/store/ui/actions';
import {Component, Name} from './style';
import {RootState} from "src/store";
import {useContextMenu} from "react-contexify";

interface IProps {
  id: string;
  name: string;
  x: number;
  y: number;
}

const Element = memo(({id, name, x, y}: IProps) => {
  const dispatch = useDispatch();
  const {show} = useContextMenu({
    id: "element"
  });
  
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
});

const ElementWrapper = ({id}: {id: string}) => {
  const data = useSelector((s: RootState) => s.logic.entities[id]);
  
  const {name, coords} = data;
  
  const {x, y} = useSelector((s: RootState) => s.logic.entities[coords.id]);
  
  return <Element id={id} name={name} x={x} y={y}/>
};

export default ElementWrapper;