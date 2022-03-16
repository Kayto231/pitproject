import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.scss";
import {
  onSendingInfoFunction,
  orderIsDoneAction,
} from "../../redux/action/cart_actions";
import { Order_Item } from "./Order_Item";

export const Order_Page = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isOrderDone, setIsOrderDone] = useState(false);

  const makeOrderFunction = () => {
    dispatch(
      onSendingInfoFunction({
        name,
        address,
        items: cartItems,
      })
    );
    setName("");
    setAddress("");

    setIsOrderDone(!isOrderDone);

    setIsDisabled(!isDisabled);
    dispatch(orderIsDoneAction());
  };
  return (
    <div className="page_Border">
      <h2>Your order:</h2>

      <div className="page_Slider">
        {cartItems.length >= 1 ? (
          cartItems.map((el, i) => (
            <Order_Item
              key={i}
              title={el.title}
              img={el.img}
              format={el.format}
              price={el.price}
            />
          ))
        ) : isOrderDone && cartItems.length <= 0 ? (
          <div className="text_Nothing">Your order is completed</div>
        ) : (
          <div className="text_Nothing">Nothing is added</div>
        )}
      </div>
      <div className="page_Form">
        <p className="text">
          Your total:{" "}
          {cartItems.length >= 1
            ? cartItems
                .map((obj) => obj.price)
                .reduce((prev, current) => (current += prev)) + ""
            : "0"}{" "}
          grn
        </p>
        <div className="form">
          <p>Your Name</p>
          <input
            type="text"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>Address</p>
          <input
            type="text"
            name="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button
            disabled={isDisabled || cartItems.length <= 0 ? true : false}
            onClick={() => makeOrderFunction()}
          >
            Send Order
          </button>
        </div>
      </div>
    </div>
  );
};
