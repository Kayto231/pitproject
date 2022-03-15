import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAddToCartFunction } from "../../redux/action/cart_actions";

export const Coffee_Banner_Item = ({ img, format, price, title, id }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="main_Position_Coffee">
      <div className="header_Position_Coffee">
        <img src={`./images/coffee${img}.${format}`} alt="" />
        <div className="span_text">
          <div className="text">
            <span>
              {" "}
              <b> Name: </b>
              {title}{" "}
            </span>
            <span>
              <b>Price:</b> {price} grn
            </span>
          </div>
          <div
            className="on_Add_To_Cart"
            onClick={() =>
              dispatch(
                onAddToCartFunction(cartItems, {
                  img,
                  format,
                  price,
                  title,
                  idCart: Math.random(),
                })
              )
            }
          >
            <button>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
