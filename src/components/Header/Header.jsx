import "../../index.scss";

import React from "react";
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { changeCartStateAction } from "../../redux/action/cart_actions";

const Header = () => {
  const dispatch = useDispatch();
  const { isCartOpened } = useSelector((state) => state.cart);

  return (
    <div className="navBar__column">
      <nav>
        <div className="nav_justify">
          <img src="./images/logo3.jpg" alt="" />
          <div className="nav_Bar">
            <ul>
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
                </div>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
            <ul className="last__Ul">
              <li>
                <a href="#">Sign in</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
