import { combineReducers, applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import dragDropReducer from './dragDrop/reducer';
import logicReducer from './logic/reducer';
//@ts-ignore
const rootReducer = combineReducers({
  dragDrop: dragDropReducer,
  logic: logicReducer
});

const middleware = [reduxThunk];

//@ts-ignore
export const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

// Infer the `RootState` and `AppDispatch` types from the store itself
//@ts-ignore
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch