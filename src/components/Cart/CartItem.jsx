import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.scss";
import { onRemoveItemFromCartFunction } from "../../redux/action/cart_actions";

export const CartItem = ({ img, format, price, title, idCart }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div className="cartItem_column">
      <div className="cartItem_header">
        <div className="cartItem_Description">
          <div className="cartItem_content">
            <div className="photo">
              <img src={`./images/coffee${img}.${format}`} alt="coffee" />
            </div>
            <div className="cartItem_Text">
              <span>{title}</span>
              <span>{price} grn</span>
            </div>
          </div>
          <img
            src="./images/close-image.png"
            alt="close-image"
            onClick={() =>
              dispatch(onRemoveItemFromCartFunction(cartItems, idCart))
            }
          />
        </div>
      </div>
    </div>
  );
};
