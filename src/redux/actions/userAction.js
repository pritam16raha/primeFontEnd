import axios from "axios";
import { BackendDomain } from "../../common/domain";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,

  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstant";

export const fetchUser = (email, password) => async (dispatch) => {
  try {
    const { config } = { headers: { "Content-Type": "application/json" } };

    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.post(
      `${BackendDomain}/api/user/login`,
      { email, password },
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      token: data.token,
      payload: data.user,
      success: data.success,
    });
    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user?._id)
    }
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const registerUser = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    const { config } = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `${BackendDomain}/api/user/register`,
      { name, email, password },
      config
    );
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data.user,
      success: data.success,
      user: data.user,
      token: data.token
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const id = localStorage.getItem('userId');
    console.log("User id is",id)
    // const { config } = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.get(
      `${BackendDomain}/api/user/getuser/${id}`,
    );
    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
      success: data.success,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

  export const logoutUser = () => async (dispatch) => {
    try{
      dispatch({ type: LOGOUT_SUCCESS });
      localStorage.removeItem("token");
      localStorage.removeItem("userId");

    }catch(error){
      dispatch: ({
        type: LOGOUT_FAIL,
        payload: error.response.data.message
      })
    }
  }

export const clearErrors = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
