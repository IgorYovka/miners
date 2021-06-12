import {createSelector} from 'reselect';

import {RootState as State} from '../';
import {TLogicState} from 'src/store/logic/types';

export const getUiState = (state: State) => state.logic;

export const selectElementsForCanvas = createSelector(
  [getUiState],
  //@ts-ignore
  (logicState: TLogicState) => logicState.idsForCanvas.map((ids: string) => logicState[ids]).flat()
);