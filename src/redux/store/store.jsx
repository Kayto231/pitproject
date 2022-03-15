import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cartCoffeeReducer } from "../reducer/cart_Reducer";
import { coffee_Reducer } from "../reducer/coffee_reducer";
import { stateReducer } from "../reducer/reducer";
import { todoAppReducer } from "../reducer/todoReducer";

const rootReducer = combineReducers({
  todo: stateReducer,
  app: todoAppReducer,
  coffee: coffee_Reducer,
  cart: cartCoffeeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
