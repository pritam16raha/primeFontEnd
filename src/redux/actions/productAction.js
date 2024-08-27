import axios  from "axios";
import { BackendDomain } from "../../common/domain";

export const ALL_PRODUCT_REQUEST = "ALL_PRODUCT_REQUEST";
export const ALL_PRODUCT_SUCCESS = "ALL_PRODUCT_SUCCESS";
export const ALL_PRODUCT_FAIL = "ALL_PRODUCT_FAIL";

export const PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST";
export const PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS";
export const PRODUCT_DETAILS_FAIL = "PRODUCT_DETAILS_FAIL";

export const CLEAR_ERRORS = "CLEAR_ERRORS";




export const fetchProductList = () => async (dispatch) => {
    try{
        dispatch({ type: ALL_PRODUCT_REQUEST })
        const data = await axios.get(`${BackendDomain}/api/product/list`);
        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data.data
        })
    }catch(error){
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response?.data?.message || error.message
        })
    }
  };

  export const getProductDetails = (id) => async (dispatch) => {

    try{
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        const data = await axios.get(`${BackendDomain}/api/product/getProduct/${id}`);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })
    }catch(error){
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response?.data?.message || error.message
        })
    }
  };

  export const clearErrors = () => (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
  }