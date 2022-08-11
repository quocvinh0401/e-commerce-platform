import "./App.css";
import Login from "./components/login/Login";
import { Routes, Route } from "react-router-dom";
import { useStateValue } from "./store/Context";
import ElectronicDevice from "./components/electronicDevice/ElectronicDevice";
import ProductDetail from "./components/productDetail/ProductDetail";
import HomePage from "./components/homePage/HomePage";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./components/cart/Cart";

function App() {
  const [state, dispatch] = useStateValue();

  return (
    <div className="app">
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/thiet-bi-dien-tu" element={<ElectronicDevice />} />
          <Route path="/:link" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default App;
