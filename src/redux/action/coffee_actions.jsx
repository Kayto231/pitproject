import axios from "axios";
import { CHANGE_OPEN_STATE, LOAD_BANNER, SET_COFFEE_CATEGORY } from "../consts";

//ActionCreator
export const getCoffeCategories = (categories) => ({
  type: SET_COFFEE_CATEGORY,
  payload: categories,
});
export const loadBannerCreator = (obj) => ({ type: LOAD_BANNER, payload: obj });
export const changeOpenStateCreator = (state) => ({
  type: CHANGE_OPEN_STATE,
  payload: !state,
});

//Functions
export const getCoffeeCategoiesList = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://6153b0673f4c4300171593fc.mockapi.io/posts"
    );
    console.log(response.data);
    dispatch(
      getCoffeCategories(response.data.length >= 1 ? response.data : [])
    );
  };
};

export const loadBannerFunction = (obj, openState) => {
  return (dispatch) => {
    dispatch(changeOpenStateCreator(openState));
    dispatch(loadBannerCreator(obj));
  };
};
