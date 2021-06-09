import React, {memo} from 'react';

import {Component} from './styles';

interface IProps {
  className?: string
}

const TopPanel = memo((props: IProps) => {
  const {className} = props;
  
  return <Component className={className}>
  
  </Component>
});

export default TopPanel;