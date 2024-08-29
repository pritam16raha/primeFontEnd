import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { TbTrash } from "react-icons/tb";
import { useNavigate } from "react-router-dom"
import { BackendDomain } from "../common/domain";
import { useDispatch, useSelector } from "react-redux";
import { removeItemsFromCart } from "../redux/actions/cartAction";


const Cart = () => {

  const navigate = useNavigate();
  // const { all_products, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  

  //redux

  const dispatach = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const getTotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.price, 0)
  };
  
  const removeFromCart = (id) => {
    dispatach(removeItemsFromCart(id))
  }


  // console.log("cart is", )

  return (
    <section className="max-padd-container pt-20">
      <div className="py-10">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-900/20 text-gray-30 regular-14 xs:regular-16 text-start py-12">
              <th className="p-1 text-left">Products</th>
              <th className="p-1 text-left">Title</th>
              <th className="p-1 text-left">Price</th>
              <th className="p-1 text-left">Quantity</th>
              <th className="p-1 text-left">Total</th>
              <th className="p-1 text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((product, index) => {
               
                return (
                  <tr
                    key={index}
                    className="border-b border-slate-900/20 text-gray-50 p-6 medium-14 text-left"
                  >
                    <td className="p-1">
                      <img
                        // src={`${BackendDomain}/images/`+product?.image}
                        src={product?.image}
                        alt="productImg"
                        height={38}
                        width={38}
                        className="rounded-lg ring-1 ring-slate-900/5 m-1"
                      />
                    </td>
                    <td className="p-1">
                      <div className="line-clamp-3">{product?.name}</div>
                    </td>
                    <td className="p-1">{product?.price}</td>
                    <td className="p-1">{cartItems?.[product?.product]}</td>
                    <td className="p-1">
                    ₹ {product?.price * 1}
                    </td>
                    <td className="p-1">
                      <div className="bold-22">
                        <TbTrash
                          onClick={() => {
                            removeFromCart(product.product);
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                );
            })}
          </tbody>
        </table>
        {/* cart total */}
        <div className="flex flex-col xl:flex-row gap-20 mt-20">
          <div className="flex flex-1 flex-col gap-2">
            <h4 className="bold-22">Summary</h4>
            <div>
              <div className="flexBetween py-3">
                <h4 className="medium-16">Subtotal:</h4>
                <h4 className="text-gray-30 font-semibold">₹{}</h4>
              </div>
              <hr />
              <div className="flexBetween py-3">
                <h4 className="medium-16">Shipping Fee:</h4>
                <h4 className="text-gray-30 font-semibold">₹{}</h4>
              </div>
              <hr />
              <div className="flexBetween py-3">
                <h4 className="medium-18">Total:</h4>
                <h4 className="bold-18">{getTotal(cartItems)}</h4>
              </div>
            </div>
            <button onClick={()=> navigate('/order')}  className="btn-secondary w-52 rounded">Proceed to Checkout</button>
          </div>
          <div className="flex flex-1 flex-col gap-8">
            <h4 className="bold-20 capitalize">Your coupon code enter here:</h4>
            <div className="flexBetween h-[2.8rem] bg-primary ring-1 ring-slate-900/10 w-full max-w-[488px] rounded">
              <input type="text" placeholder="Coupon code" className="pl-3 bg-transparent border-none outline-none"/>
              <button className="btn-dark rounded relative !px-10 !py-3">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
