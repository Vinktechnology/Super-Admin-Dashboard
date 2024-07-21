import { combineReducers } from "@reduxjs/toolkit";
import staticProdcutReducer from "./slices/staticproduct/staticproduct.slice";
// import authReducer from "./slices/auth/auth.slice";
const rootReducer = combineReducers({
  staticProduct: staticProdcutReducer,
  // auth: authReducer,
});

export default rootReducer;
