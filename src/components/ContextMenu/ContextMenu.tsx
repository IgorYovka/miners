import React, {memo, useEffect} from 'react';
import {Menu, Item, Separator, Submenu, useContextMenu} from 'react-contexify';
import 'react-contexify/dist/ReactContexify.css';

import {ContextMenu as CM, MenuItem} from './styles';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "src/store";
import {setData, openModalById} from "src/store/ui/actions";

interface IProps {
  className?: string
}

const ContextMenu = memo((props: IProps) => {
  const dispatch = useDispatch();
  const contextMenu = useSelector((s: RootState) => s.ui.contextMenu);
  
  const onElementOpen = () => {
    dispatch(openModalById(contextMenu));
  };
  
  const onElementMove = () => {
  
  };
  
  const onElementRename = () => {
  
  };
  
  const onElementDelete = () => {
  
  };
  
  const hiddenHandle = () => {
    dispatch(setData({contextMenu: ''}));
  };
  
  return <CM id={'element'} onHidden={hiddenHandle}>
    <MenuItem onClick={onElementOpen}>
      Open
    </MenuItem>
    <MenuItem onClick={onElementMove}>
      Move
    </MenuItem>
    <MenuItem onClick={onElementRename}>
      Rename
    </MenuItem>
    <MenuItem onClick={onElementDelete}>
      Delete
    </MenuItem>
  </CM>
});

export default ContextMenu;