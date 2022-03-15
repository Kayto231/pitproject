import React from "react";
import "../../index.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeOpenStateCreator } from "../../redux/action/coffee_actions";
import { Coffee_Banner_Item } from "./Coffee_Banner_Item";

export const Coffee_Banner = () => {
  const dispatch = useDispatch();
  const { currentBanner, isBannerOpened } = useSelector(
    (state) => state.coffee
  );
  const { isCartOpened } = useSelector((state) => state.cart);

  return (
    <div
      className={
        isCartOpened
          ? "main_Banner_Container cart_Opened"
          : "main_Banner_Container"
      }
    >
      <div className="header_column">
        <h2>{currentBanner.category}</h2>{" "}
        <img
          src="./images/close-image.png"
          alt="close-image"
          onClick={() => {
            dispatch(changeOpenStateCreator(isBannerOpened));
          }}
        />
      </div>
      <div className="main_Banner_Part">
        {currentBanner.items.map((el, i) => {
          return (
            <Coffee_Banner_Item
              key={i}
              img={el.img}
              title={el.title}
              format={el.format}
              price={el.price}
              id={el.id}
            />
          );
        })}
      </div>
    </div>
  );
};
