import "../../index.scss";

import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCartStateAction } from "../../redux/action/cart_actions";
import { isLogedInAction } from "../../redux/action/login_actions";

const Header = () => {
  const dispatch = useDispatch();
  const { isCartOpened, cartItems } = useSelector((state) => state.cart);
  const { isLogedIn } = useSelector((state) => state.login);

  return (
    <div className="navBar__column">
      <nav>
        <div className="nav_justify">
          <img src="./images/logo.png" alt="Logo" />
          <div className="nav_Bar">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              {isLogedIn ? (
                <>
                  <li>
                    <Link to={"/profile"}>Profile</Link>
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        dispatch(
                          isLogedInAction({
                            isLogedIn: false,
                            user: "",
                            isAdmin: false,
                          })
                        )
                      }
                      to={"/"}
                    >
                      Sign out
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to={"/login"}>Sign in</Link>
                </li>
              )}

              <li>
                <Link to={"/order"}>Orders</Link>
              </li>
              <li>
                <div className="btn">
                  <img
                    src="./images/cart.svg"
                    alt="cart"
                    onClick={() =>
                      dispatch(changeCartStateAction(isCartOpened))
                    }
                  />
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
