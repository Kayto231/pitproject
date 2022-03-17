import "./index.scss";

import Header from "./components/Header/Header";
import Main_Page from "./components/Main_Page/Main_Page";
import { Cart } from "./components/Cart/Cart";

import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Order_Page } from "./components/Order_Page.jsx/Order_Page";
import { Admin_Page } from "./components/Admin_Page/Admin_Page";
import { Login_Page } from "./components/Login_Page/Login_Page";
import { useEffect } from "react";
import {
  checkIsAuthFunction,
  loadAllUsersFunction,
} from "./redux/action/login_actions";
import { Profile } from "./components/Profile/Profile";

function App() {
  const { isCartOpened } = useSelector((state) => state.cart);
  const { isAdmin, isLogedIn } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllUsersFunction());
    dispatch(checkIsAuthFunction());
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {isCartOpened && <Cart />}

        <Routes>
          <Route path="/" element={<Main_Page />} />
          <Route path="/order" element={<Order_Page />} />
          <Route path="/login" element={<Login_Page />} />

          {isLogedIn && <Route path="/profile" element={<Profile />} />}

          {isAdmin && <Route path="/admin" element={<Admin_Page />} />}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
