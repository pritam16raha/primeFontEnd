import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MyOrders from "./pages/MyOrders";
import Verify from "./pages/Verify";
import Product from "./pages/Product";
import { useEffect, useState } from "react";
import LoginPopup from "./components/LoginPopup";
import Footer from "./components/Footer";
import Order from "./pages/Order";
import MyAccount from "./pages/MyAccount";
import store from "./redux/store";
import { loadUser } from "./redux/actions/userAction";
import { useSelector } from "react-redux";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    store.dispatch(loadUser())
  },[])

  const { user } = useSelector((state) => state.user)
  // console.log("user is", user)
  // localStorage.setItem("userId", user?._id)

  return (
    <BrowserRouter>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
      <Header setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/myaccount" element={<MyAccount user={user}/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/myorders" element={<MyOrders />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
