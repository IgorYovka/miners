import React  from 'react';
import "./styles.scss";
import {IRenderComponent} from "../classes/RenderComponent";

export interface IProps {
  list: IRenderComponent[];
}

const ClassList = ({list}: IProps): JSX.Element => {
  return <div className={'list'}>
    {
      list.map((Item: IRenderComponent, index) => <div key={index} className={'list__item'}>
        {<Item/>}
      </div>)
    }
  </div>
};

export default ClassList;