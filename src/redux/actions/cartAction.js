// import axios from "axios"
// import { ADD_TO_CART } from "../constants/cartConstant"
// import { BackendDomain } from "../../common/domain"

// export const addItemToCart = (id, quantity ) => async (dispatch, getState) => {
//     try{
//         const { data } = await axios.get(`${BackendDomain}/api/product/${id}`);

//         dispatch({
//             type: ADD_TO_CART,
//             payload:{
//                 product: data.product._id,
//             },
//             product: data.product

//         })

//         localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems))


//     }catch(error){
//         dispatch({
//             type: "",
//             payload: error.response.data.message
//         })
//     }
// }