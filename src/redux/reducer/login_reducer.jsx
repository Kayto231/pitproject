import { ERROR_WHILE_LOGGING, LOAD_ALL_USERS, LOGED_IN_STATE } from "../consts";

const initialState = {
  isLogedIn: false,
  user: {},
  allUsers: [],
  isAdmin: false,
  isError: false,
  errorMessage: "",
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGED_IN_STATE:
      return {
        ...state,
        isLogedIn: action.payload.isLogedIn,
        user: action.payload.user,
        isAdmin: action.payload.isAdmin,
      };
    case ERROR_WHILE_LOGGING:
      return {
        ...state,
        isError: action.payload.isError,
        errorMessage: action.payload.errorMessage,
      };
    case LOAD_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
