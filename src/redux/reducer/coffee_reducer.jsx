import { LOAD_BANNER, SET_COFFEE_CATEGORY, CHANGE_OPEN_STATE } from "../consts";

const initialState = {
  currentBanner: {},
  isBannerOpened: false,
  categories: [],
  isLoading: true,
};

export const coffee_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COFFEE_CATEGORY:
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      };
    case LOAD_BANNER:
      return {
        ...state,
        currentBanner: action.payload,
      };
    case CHANGE_OPEN_STATE:
      return {
        ...state,
        isBannerOpened: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
