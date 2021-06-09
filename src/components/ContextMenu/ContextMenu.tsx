import React, {memo} from 'react';

import {ContextMenu as CM, MenuItem} from './styles';

interface IProps {
  className?: string
}

const ContextMenu = memo((props: IProps) => {
  const {className} = props;
  
  const onElementOpen = () => {
  
  };
  
  const onElementMove = () => {
  
  };
  
  const onElementRename = () => {
  
  };
  
  const onElementDelete = () => {
  
  };
  
  return <>
    <CM id={"element"}>
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
  </>
});

export default ContextMenu;