import { combineReducers } from "@reduxjs/toolkit";
import staticProdcutReducer from "./slices/staticproduct/staticproduct.slice";
import authReducer from "./slices/auth/auth.slice";
import toastReducer from "./slices/toast/toast.slice";
import userReducer from "./slices/user/user.slice";
import dashboardReducer from "./slices/dashboard/dashboard.slice";
import categoryReducer from "./slices/category/category.slice";
const rootReducer = combineReducers({
  staticProduct: staticProdcutReducer,
  auth: authReducer,
  toast: toastReducer,
  user: userReducer,
  dashboard:dashboardReducer,
  category:categoryReducer,
});

export default rootReducer;
