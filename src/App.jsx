import "./index.scss";

import Header from "./components/Header/Header";
import Main_Page from "./components/Main_Page/Main_Page";
import { Cart } from "./components/Cart/Cart";

import { useSelector } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Order_Page } from "./components/Order_Page.jsx/Order_Page";
import { Admin_Page } from "./components/Admin_Page/Admin_Page";

function App() {
  const { isCartOpened } = useSelector((state) => state.cart);
  const { isUserAdmin } = useSelector((state) => state.admin);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {isCartOpened && <Cart />}
        <Routes>
          <Route path="/" element={<Main_Page />} />
          <Route path="/order" element={<Order_Page />} />
          {isUserAdmin && <Route path="/admin" element={<Admin_Page />} />}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
