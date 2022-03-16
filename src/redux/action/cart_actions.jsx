import axios from "axios";
import {
  ADD_ITEM_TO_CART,
  CHANGE_CART_STATE,
  REMOVE_ITEM_FROM_CART,
  SEND_INFO_ABOUT_ORDER,
} from "../consts";

export const changeCartStateAction = (state) => ({
  type: CHANGE_CART_STATE,
  payload: !state,
});

export const onAddToCartAction = (obj) => ({
  type: ADD_ITEM_TO_CART,
  payload: obj,
});
export const onRemoveItemFromCartAction = (obj) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: obj,
});

export const onSendingInfoAction = (array) => ({
  type: SEND_INFO_ABOUT_ORDER,
  payload: array,
});

export const onAddToCartFunction = (currentArray, obj) => {
  return async (dispatch) => {
    dispatch(onAddToCartAction([...currentArray, obj]));
  };
};

export const onRemoveItemFromCartFunction = (currentArray, idCart) => {
  return (dispatch) => {
    const finalArray = currentArray.filter((el) => el.idCart !== idCart);
    dispatch(onRemoveItemFromCartAction(finalArray));
  };
};
export const onSendingInfoFunction = (obj) => {
  return async (dispatch) => {
    dispatch(onSendingInfoAction(obj));
    await axios.post("https://6153b0673f4c4300171593fc.mockapi.io/orders", obj);
  };
};
