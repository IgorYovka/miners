import React, {memo} from 'react';
import Panel from '../Panel/Panel';
import Canvas from '../Canvas/Canvas';
import TopPanel from '../TopPanel/TopPanel';
import ModalManager from '../__modals/ModalManager';
import BaseModal from '../__modals/BaseModal/BaseModal';
import {MainComponent, CanvasWrapper} from './styles';
// import {useAppDispatch, useAppSelector} from "../../hooks";
// import {uIChangeDataByIndex, uIChangeIndex, uIGenerateData} from "../../store/ui/actions";

const Main = memo(() => {
  
  return <MainComponent>
    <Panel className={"sidePanel"}/>
    <CanvasWrapper id={"canvasWrapper"}>
      <TopPanel className={'wrapperTop'}/>
      <Canvas className={'wrapperMain'}/>
      <ModalManager/>
      <BaseModal/>
    </CanvasWrapper>
  </MainComponent>
});

export default Main;