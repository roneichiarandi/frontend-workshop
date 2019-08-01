import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import characters from "./reducer";

export const rootReducer = combineReducers({ characters });

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;