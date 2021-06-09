import React, {memo} from 'react';
import Base from '../Base/Base';
import Mine from '../Mine/Mine';
import Store from '../Store/Store';

import {PanelComponent, Items} from './styles';

const Panel = memo(({className}: {className: string}) => {
  
  return <PanelComponent className={className}>
    <Items>
      <Base className={"item"}/>
      <Mine className={"item"}/>
      <Store className={"item"}/>
    </Items>
  </PanelComponent>
});

export default Panel;