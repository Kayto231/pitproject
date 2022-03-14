import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { stateReducer } from "../reducer/reducer";
import { todoAppReducer } from "../reducer/todoReducer";

const rootReducer = combineReducers({
  todo: stateReducer,
  app: todoAppReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
