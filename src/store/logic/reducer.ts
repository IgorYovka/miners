import {produce} from 'immer';
import types from './types';
import {RootState} from "../index";

const initialState = {
  entities: {},
  ids: ["baseIds", "storeIds", "mineIds"],
  baseIds: [],
  storeIds: [],
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
        
      default:
        return state;
    }
  });
};

export default reducer;
