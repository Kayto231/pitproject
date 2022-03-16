import {
  CHANGE_ADMIN_STATE,
  GET_ADMIN_ORDERS,
  SEND_INFO_ABOUT_ORDER,
} from "../consts";

const initialState = {
  isUserAdmin: true,
  adminOrders: [],
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ADMIN_STATE:
      return {
        ...state,
        isUserAdmin: action.payload,
      };
    case GET_ADMIN_ORDERS:
      return {
        ...state,
        adminOrders: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
