import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.scss";
import { loadBannerFunction } from "../../redux/action/coffee_actions";

export const Category = ({ category, id, items }) => {
  // console.log(category);
  const dispatch = useDispatch();
  const { isBannerOpened } = useSelector((state) => state.coffee);

  return (
    <div
      className="main_Category_Container"
      onClick={() =>
        dispatch(loadBannerFunction({ category, id, items }, isBannerOpened))
      }
    >
      <div className="btn">
        <button
          onClick={() => {
            // title;
          }}
        >
          {category}
        </button>
      </div>
    </div>
  );
};
