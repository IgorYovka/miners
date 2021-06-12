import {produce} from 'immer';
import types from './types';
import {RootState} from "src/store";

const initialState = {
  entities: {},
  idsForCanvas: ["baseIds", "storeIds", "mineIds"],
  idsWithFields: ["storeIds", "mineIds"],
  baseIds: [],
  storeIds: [],
  workersIds: [],
  mineIds: []
};

//@ts-ignore
const reducer = (state: RootState = initialState, action: any): RootState => {
  return produce<RootState>(state, (draft: RootState) => {
    switch (action.type) {
      case types.LOGIC_ENTITY_SET:
        const {key, value, type} = action.payload;
        
        if(key && type){
          if(!state[`${type}Ids`].includes(key)){
            draft[`${type}Ids`].push(action.payload.key);
          }
          draft.entities[key] = value;
        }
        return;
      case types.LOGIC_SET_DATA:
        for (const [key, value] of Object.entries(action.payload)) {
          draft[key] = value;
        }
        return;
      default:
        return state;
    }
  });
};

export default reducer;
