import {
  ADD_TASK,
  REMOVE_TASK,
  SET_TODOLIST,
  ADD_INPUT_TASK,
  RESET_INPUT,
  REMOVE_ALL,
  CHANGE_DONE_STATE,
  IS_EDIT_STATE,
  CHANGE_EDIT_INPUT,
  EDIT_IS_DONE,
} from "../consts";

const initialState = {
  tasks: [],
  isLoading: true,
  input: "",
  isEdit: false,
  editObject: {},
  editInput: "",
};

export const todoAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOLIST:
      return {
        ...state,
        tasks: action.payload,
        isLoading: false,
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: action.payload,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: action.payload,
      };
    case ADD_INPUT_TASK:
      return {
        ...state,
        input: action.payload,
      };
    case RESET_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    case REMOVE_ALL:
      return {
        ...state,
        tasks: action.payload,
      };
    case CHANGE_DONE_STATE:
      return {
        ...state,
        tasks: action.payload,
      };
    case IS_EDIT_STATE:
      return {
        ...state,
        isEdit: action.payload.isEdit,
        editObject: action.payload.obj,
      };
    case CHANGE_EDIT_INPUT:
      return {
        ...state,
        editInput: action.payload,
      };
    case EDIT_IS_DONE:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
