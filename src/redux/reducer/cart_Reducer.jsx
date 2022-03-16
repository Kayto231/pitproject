import {
  ADD_ITEM_TO_CART,
  CHANGE_CART_STATE,
  ORDER_IS_DONE,
  REMOVE_ITEM_FROM_CART,
  SEND_INFO_ABOUT_ORDER,
} from "../consts";

const initialState = {
  isCartOpened: false,
  cartItems: [],
  orders: [],
};

export const cartCoffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CART_STATE:
      return {
        ...state,
        isCartOpened: action.payload,
      };

    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case SEND_INFO_ABOUT_ORDER:
      return {
        ...state,
        orders: action.payload,
      };
    case ORDER_IS_DONE:
      return {
        ...state,
        cartItems: action.payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
