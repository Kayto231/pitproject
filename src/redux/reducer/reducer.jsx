import {
  ADD_COUNTER,
  CHANGE_INPUT,
  REMOVE_COUNTER,
  RESET_COUNTER,
} from "../consts";

const initialState = {
  counter: 0,
  input: "Hello, it's me again. Haven't seen you for a long time.",
};

export const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        counter: action.payload,
      };
    case REMOVE_COUNTER:
      return {
        ...state,
        counter: action.payload,
      };
    case RESET_COUNTER:
      return {
        ...state,
        counter: action.payload,
      };
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
