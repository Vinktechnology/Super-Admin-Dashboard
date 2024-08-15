import { combineReducers } from "@reduxjs/toolkit";
import staticProdcutReducer from "./slices/staticproduct/staticproduct.slice";
import authReducer from "./slices/auth/auth.slice";
import toastReducer from "./slices/toast/toast.slice";
import userReducer from "./slices/user/user.slice";
import dashboardReducer from "./slices/dashboard/dashboard.slice";
import categoryReducer from "./slices/category/category.slice";
import subcategoryReducer from "./slices/subcategory/subcategory.slice"
import tagReducer from "./slices/tags/tags.slice";
import initReducer from "./slices/init/init.slice";
import GenericMasterReducer from "./slices/genericmaster/genericmaster.slice";
import procurementReducer from "./slices/procurement/procurement.slice";
import hsntaxcodeReducer from "./slices/hsntaxcode/hsntaxcode.slice";
const rootReducer = combineReducers({
  staticProduct: staticProdcutReducer,
  auth: authReducer,
  toast: toastReducer,
  user: userReducer,
  dashboard:dashboardReducer,
  category:categoryReducer,
  init:initReducer,
  subcategory:subcategoryReducer,
  tag:tagReducer,
  genericmaster:GenericMasterReducer,
  procurement:procurementReducer,
  hsntaxcode:hsntaxcodeReducer
});

export default rootReducer;
