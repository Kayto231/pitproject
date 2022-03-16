import axios from "axios";
import { GET_ADMIN_ORDERS } from "../consts";

export const getAdminOrdersAction = (array) => ({
  type: GET_ADMIN_ORDERS,
  payload: array,
});

export const getAdminOrdersFunction = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://6153b0673f4c4300171593fc.mockapi.io/orders"
    );
    console.log(response.data);
    dispatch(getAdminOrdersAction(response.data));
  };
};
