import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store/index';
import Main from '../components/Main/Main';
import Brain from '../Brain/Brain';
import {Provider as BrainProvider} from '../Brain/BrainContext';
import GlobalDragDrop from '../components/GlobalDragDrop/GlobalDragDrop';
import './styles.scss';

const brain = Brain();

const App: React.FC = () =>
  <Provider store={store}>
    <BrainProvider brain={brain}>
      <GlobalDragDrop>
        <Main/>
      </GlobalDragDrop>
    </BrainProvider>
  </Provider>
;

export default App;