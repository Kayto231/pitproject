import "../../index.scss";

import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCartStateAction } from "../../redux/action/cart_actions";

const Header = () => {
  const dispatch = useDispatch();
  const { isCartOpened, cartItems } = useSelector((state) => state.cart);

  return (
    <div className="navBar__column">
      <nav>
        <div className="nav_justify">
          <img src="./images/logo3.jpg" alt="" />
          <div className="nav_Bar">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/order"}>Orders</Link>
              </li>
              <li>
                <div className="btn">
                  {" "}
                  <button
                    onClick={() =>
                      dispatch(changeCartStateAction(isCartOpened))
                    }
                  >
                    Cart
                  </button>
                  <div className="btn_Cart_Counter">
                    {cartItems.length >= 1
                      ? cartItems
                          .filter((el) => +el.price)
                          .map((el) => el.price)
                          .reduce((prev, current) => (current += prev), 0) +
                        " grn"
                      : ""}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
