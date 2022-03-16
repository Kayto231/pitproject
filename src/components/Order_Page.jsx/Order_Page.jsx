import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.scss";
import { onSendingInfoFunction } from "../../redux/action/cart_actions";
import { Order_Item } from "./Order_Item";

export const Order_Page = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

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
            onClick={() =>
              dispatch(
                onSendingInfoFunction({
                  name,
                  address,
                  items: cartItems,
                })
              )
            }
          >
            Send Order
          </button>
        </div>
      </div>
    </div>
  );
};
