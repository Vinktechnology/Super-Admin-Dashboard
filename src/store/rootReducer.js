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
import GenericMasterDataReducer from "./slices/genericmasterdata/genericmasterdata.slice";
import procurementReducer from "./slices/procurement/procurement.slice";
import hsntaxcodeReducer from "./slices/hsntaxcode/hsntaxcode.slice";
import vendorReducer from "./slices/vendor/vendor.slice";
import productReducer from "./slices/product/product.slice";
import homesectionReducer from "./slices/homesection/homesection.slice";
import bannerReducer from "./slices/banner/banner.slice";
import homeRenderReducer from "./slices/home/home.slice";
import utilityReducer from "./slices/websiteutility/websiteutility.slice";
import headerandfooterReducer from "./slices/headerfooter/headerfooter.slice";
import filterReducer from "./slices/filter/filter.slice";
import clientReducer from "./slices/client/client.slice";



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
  genericmasterdata:GenericMasterDataReducer,
  procurement:procurementReducer,
  hsntaxcode:hsntaxcodeReducer,
  vendor:vendorReducer,
  product:productReducer,
  homesection:homesectionReducer,
  banner:bannerReducer,
  homerender:homeRenderReducer,
  utilityrender : utilityReducer,
  headerfooter : headerandfooterReducer,
  filterReducer : filterReducer,
  client:clientReducer
});

export default rootReducer;
