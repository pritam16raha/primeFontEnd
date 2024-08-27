import {
  configureStore,
  combineReducers,
  applyMiddleware,
  
} from "@reduxjs/toolkit";


import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productReducer } from "./reducers/productReducer";
import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer,
    user: userReducer
});

let initialState = {};

const middleware = [thunk];

const store = configureStore({
  reducer,
  devTools: composeWithDevTools(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
  preloadedState: initialState,
});

export default store;

{/*  we have to careful while work with redux
    1. reducer
    2. action
    3. constant - but it is optional */}