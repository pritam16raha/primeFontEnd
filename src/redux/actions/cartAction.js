import axios from "axios"
import { ADD_TO_CART, REMOVE_CART_ITEM } from "../constants/cartConstant"
import { BackendDomain } from "../../common/domain"

export const addItemsToCart = (id, quantity ) => async (dispatch, getState) => {
    try{
        const { data } = await axios.get(`${BackendDomain}/api/product/${id}`);

        dispatch({
            type: ADD_TO_CART,
            payload:{
                product: data.product._id,
                name: data.product.name,
                price: data.product.price,
                image: data.product.image[0].url,
                // stock: data.product.Stock,
                quantity,
            },
        })

        localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems))


    }catch(error){
        dispatch({
            type: "",
            payload: error.response.data.message
        })
    }
}

export const removeItemsFromCart = (id) => async(dispatch, getState) => {
    try{
        dispatch({
            type: REMOVE_CART_ITEM,
            payload: id,
        })

        localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems))

    }catch(error){
        dispatch({
            type: "",
            payload: error.response.data.message
        })
    }
}