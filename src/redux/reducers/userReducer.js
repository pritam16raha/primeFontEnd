import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,

  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,

  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,

  CLEAR_ERRORS,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from "../constants/userConstant";

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      case REGISTER_USER_REQUEST:
        case LOAD_USER_REQUEST:
      return {
        loading: true,
        success: false,
      };
    case LOGIN_SUCCESS:
      case REGISTER_USER_SUCCESS:
        case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.success,
        user: action.payload,
        token: action.token,
      };

      case LOGOUT_SUCCESS: 
        return{
          loading: false,
          user: null,
          success: false
        }

    case LOGIN_FAIL:
      case REGISTER_USER_FAIL:
      return {
        loading: false,
        success: false,
        user: null,
        error: action.payload,
        token: null
      };

      case LOAD_USER_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          user: null,
          error: action.payload,
          token: null
        }
        
        case LOGOUT_FAIL:
          return{
            ...state,
            loading: false,
            error: action.payload
          }

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

      default:
        return state;
  }
};
