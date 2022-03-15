import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCartStateAction } from "../../redux/action/cart_actions";
import { CartItem } from "./CartItem";

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
            <div className="cart_Text_absent">Cart is absent</div>
          )}
        </div>
        <div className="cart_Footer_Container">
          <button>Make the order</button>
        </div>
      </div>
    </div>
  );
};
