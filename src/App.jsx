import "./index.scss";
import Header from "./components/Header/Header";
import Main_Page from "./components/Main_Page/Main_Page";
import { useSelector } from "react-redux";
import { Cart } from "./components/Cart/Cart";
function App() {
  const { isCartOpened } = useSelector((state) => state.cart);
  return (
    <div className="App">
      <Header />
      {isCartOpened && <Cart />}
      <Main_Page />
    </div>
  );
}

export default App;
