import {
  ADD_ITEM_TO_CART,
  CHANGE_CART_STATE,
  REMOVE_ITEM_FROM_CART,
} from "../consts";

const initialState = {
  isCartOpened: false,
  cartItems: [],
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

    default: {
      return {
        ...state,
      };
    }
  }
};
