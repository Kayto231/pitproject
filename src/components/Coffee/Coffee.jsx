import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.scss";
import { getCoffeeCategoiesList } from "../../redux/action/coffee_actions";
import { Coffee_Banner } from "../Coffee_Banner/Coffee_Banner";
import { Category } from "./Category";

export const Coffee = () => {
  const dispatch = useDispatch();
  const { categories, isLoading, isBannerOpened } = useSelector(
    (state) => state.coffee
  );
  useEffect(() => {
    dispatch(getCoffeeCategoiesList());
  }, []);

  return (
    <div className="main__Coffee_Container">
      {isBannerOpened && <Coffee_Banner />}
      {isLoading
        ? "Loading"
        : categories.length >= 1
        ? categories.map((el, i) => (
            <Category key={i} category={el.category} items={el.items} />
          ))
        : "Categories are absent"}
    </div>
  );
};
