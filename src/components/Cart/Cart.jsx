import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCartStateAction } from "../../redux/action/cart_actions";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";

export const Cart = () => {
  const dispatch = useDispatch();
  const { isCartOpened, cartItems } = useSelector((state) => state.cart);

  return (
    <div className="cart_column">
      <div className="header_column">
        <div className="header">
          {" "}
          <h2>Cart</h2>
          <img
            src="./images/close-image.png"
            alt="close-image"
            onClick={() => dispatch(changeCartStateAction(isCartOpened))}
          />
        </div>
        <div className="cart_Main_Container">
          {cartItems.length >= 1 ? (
            cartItems.map((el, i) => {
              return (
                <CartItem
                  key={i}
                  img={el.img}
                  title={el.title}
                  format={el.format}
                  price={el.price}
                  id={i}
                  idCart={el.idCart}
                />
              );
            })
          ) : (
            <div className="cart_Text_absent">
              <p>Cart is absent</p>
              <Link to={"/"}>
                {" "}
                <button
                  onClick={() => dispatch(changeCartStateAction(isCartOpened))}
                >
                  Do some oreders
                </button>{" "}
              </Link>
            </div>
          )}
        </div>
        <div className="cart_Footer_Container">
          <Link to={"/order"}>
            <button
              onClick={() => dispatch(changeCartStateAction(isCartOpened))}
              disabled={cartItems.length >= 1 ? false : true}
            >
              Make the order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
