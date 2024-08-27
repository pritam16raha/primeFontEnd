import React, { createContext, useEffect, useState } from "react";
import axios  from "axios";
import { BackendDomain } from "../common/domain";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [all_products, setAll_products] = useState([]);

  const addToCart = async (itemId) => {
    if (!cartItems?.[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token){
      await axios.post(`${BackendDomain}/api/cart/add`,{itemId},{headers:{token}})
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(token){
      await axios.post(`${BackendDomain}/api/cart/remove`,{itemId},{headers:{token}})
    }
  };

  // get total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // get total cart items
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      totalItems += cartItems[item];
    }
    return totalItems;
  };

  const fetchProductList = async () => {
    const response = await axios.get(`${BackendDomain}/api/product/list`);
    setAll_products(response.data.data);
  };


  const loadCartData = async (token)=>{
    const response = await axios.post(`${BackendDomain}/api/cart/get`,{},{headers:{token}})
    setCartItems(response.data.cartData)
  }

  useEffect(() => {
    async function loadData() {
      await fetchProductList();

      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"))
      }
    }
    loadData()
  }, []);

  const contextvalue = {
    all_products,  //products
    cartItems, //
    setCartItems,
    addToCart, //addProduct
    removeFromCart,
    getTotalCartAmount, //total
    getTotalCartItems,
    token,
    setToken,
  };

  return (
    <ShopContext.Provider value={contextvalue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
