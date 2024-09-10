// import { Navigate, useRoutes } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard";
import Login from "./scenes/Auth/Login";
import Register from "./scenes/Auth/Register";
// import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
import AuthProtector from "./components/Protector/AuthProtector";
// import NotFound from "./pages/Page404";
import LogoutAuthProtector from "./components/Protector/LogoutAuthProtector";
// import App from "./App";

import { useState } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import Team from "./scenes/team";
import Orders from "./scenes/orders";
import Client from "./scenes/clients";
import Vendor from "./scenes/vendors";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Transactions from "./scenes/transactions";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import DashboardApp from "./components/DashboardApp";
import Category from "./scenes/category";
import AddCategory from "./scenes/category/AddCategory";
import SubCategory from "./scenes/subcategory";
import AddSubCategory from "./scenes/subcategory/AddSubCategory";
import Tag from "./scenes/tag";
import AddTag from "./scenes/tag/AddTag";
import GenericMaster from "./scenes/genericmaster";
import AddGenericMaster from "./scenes/genericmaster/AddGenericMaster";
import ViewGenericMaster from "./scenes/genericmaster/ViewGenericMaster";
import GenericMasterData from "./scenes/genericmasterdata";
import AddGenericMasterData from "./scenes/genericmasterdata/AddGenericMasterData";
import ViewGenericMasterData from "./scenes/genericmasterdata/ViewGenericMasterData"; 
import Procurement from "./scenes/procurement";
import HSNTaxCode from "./scenes/hsntaxcode";
import AddHSNTaxCode from "./scenes/hsntaxcode/AddHSNTaxCode";
import ViewHSNTaxCode from "./scenes/hsntaxcode/ViewHSNTaxCode";
import AddProcurement from "./scenes/procurement/AddProcurement";
import ViewProcurement from "./scenes/procurement/ViewProcurement";
import Banner from "./scenes/banner";
import AddBanner from "./scenes/banner/AddBanner";
import Product from "./scenes/product";
import AddTeam from "./scenes/team/AddTeam";
import VendorDisplay from "./scenes/vendors/vendordisplay";
import ProductDisplay from "./scenes/product/productdisplay";
import Profile from "./scenes/profile";
import ProfileAccount from "./scenes/profile/profileaccount";
import ProfileBank from "./scenes/profile/profilebank";
import ProfileBusiness from "./scenes/profile/profilebusiness";
import ProfileCalendar from "./scenes/profile/profilecalendar";
import ProfileSetting from "./scenes/profile/profilesetting";
import ProfileAddress from "./scenes/profile/profileaddress";
import ViewCategory from "./scenes/category/ViewCategory";
import ViewSubCategory from "./scenes/subcategory/ViewSubCategory";
import withAuth from "./hooks/withAuth";
import ViewTag from "./scenes/tag/ViewTag";
import SectionName from "./scenes/section";
import ViewSectionName from "./scenes/section/ViewSectionName";
import AddSectionName from "./scenes/section/AddSectionName";
import ViewBanner from "./scenes/banner/ViewBanner";
import Home from "./scenes/home";
import Index from "./scenes/utilitysection";


function AppRoutes() {
  return useRoutes([
    {
      path: "/dashboard",
      element: (
        <AuthProtector>
          <DashboardLayout />
        </AuthProtector>
      ),
      children: [
        {
          path: "",
          element: <Navigate to="/dashboard/app" />,
        },
        {
          path: "app",
          element: <DashboardApp />,
        },
        { path: "clients", element: <Client /> },
        {
          path: "profile",
          element: <Outlet />,
          children: [
            { path: "", element: <Profile /> },
            { path: "account", element: <ProfileAccount /> },
            { path: "bankdetails", element: <ProfileBank /> },
            { path: "businessdetails", element: <ProfileBusiness /> },
            { path: "calendar", element: <ProfileCalendar /> },
            { path: "settings", element: <ProfileSetting /> },
            { path: "address", element: <ProfileAddress /> },
          ],          
        },
        {
          path: "vendors",
          element: <Outlet />,
          children: [
            { path: "", element: <Vendor /> },
            { path: ":Id", element: <VendorDisplay /> },
          ],
        },
        { path: "orders", element: <Orders /> },
        { path: "transactions", element: <Transactions /> },
        { path: "form", element: <Form /> },
        { path: "bar", element: <Bar /> },
        { path: "line", element: <Line /> },
        { path: "faq", element: <FAQ /> },
        { path: "pie", element: <Pie /> },
        { path: "calendar", element: <Calendar /> },
        { path: "geography", element: <Geography /> },
        {
          path: "category",
          element: <Outlet />,
          children: [
            { path: "", element: <Category /> },
            { path: "view/:Id", element: <ViewCategory /> },
            { path: "addcategory", element: <AddCategory /> },
            { path: "addcategory/:Id", element: <AddCategory /> },
          ],
        },
        {
          path: "subcategory",
          element: <Outlet />,
          children: [
            { path: "", element: <SubCategory /> },
            { path: "view/:Id", element: <ViewSubCategory /> },
            { path: "addsubcategory", element: <AddSubCategory /> },
            { path: "addsubcategory/:Id", element: <AddSubCategory /> },
          ],
        },
        {
          path: "tag",
          element: <Outlet />,
          children: [
            { path: "", element: <Tag /> },
            { path: "view/:Id", element: <ViewTag /> },
            { path: "addtag", element: <AddTag /> },
            { path: "addtag/:Id", element: <AddTag /> },
          ],
        },
        {
          path: "genericmaster",
          element: <Outlet />,
          children: [
            { path: "", element: <GenericMaster /> },
            { path: "view/:Id", element: <ViewGenericMaster /> },
            { path: "addgeneric", element: <AddGenericMaster /> },
            { path: "addgeneric/:Id", element: <AddGenericMaster /> },
          ],
        },
        {
          path: "genericmasterdata",
          element: <Outlet />,
          children: [
            { path: "", element: <GenericMasterData /> },
            { path: "view/:Id", element: <ViewGenericMasterData /> },
            { path: "addgenericmasterdata", element: <AddGenericMasterData /> },
            { path: "addgenericmasterdata/:Id", element: <AddGenericMasterData /> },
          ],
        },
        {
          path: "procurement",
          element: <Outlet />,
          children: [
            { path: "", element: <Procurement /> },
            { path: "view/:Id", element: <ViewProcurement /> },
            { path: "addprocurement", element: <AddProcurement /> },
            { path: "addprocurement/:Id", element: <AddProcurement /> },
          ],
        },
        {
          path: "hsntaxcode",
          element: <Outlet />,
          children: [
            { path: "", element: <HSNTaxCode /> },
            { path: "view/:Id", element: <ViewHSNTaxCode /> },
            { path: "addhsntaxcode", element: <AddHSNTaxCode /> },
            { path: "addhsntaxcode/:Id", element: <AddHSNTaxCode /> },
          ],
        },
        {
          path: "section",
          element: <Outlet />,
          children: [
            { path: "", element: <SectionName /> },
            { path: "view/:Id", element: <ViewSectionName /> },
            { path: "addsection", element: <AddSectionName /> },
            { path: "addsection/:Id", element: <AddSectionName /> },
          ],
        },
        {
          path: "banner",
          element: <Outlet />,
          children: [
            { path: "", element: <Banner /> },
            { path: "view/:Id", element: <ViewBanner /> },
            { path: "addbanner", element: <AddBanner /> },
            { path: "addbanner/:Id", element: <AddBanner /> },
          ],
        },

        {
          path: "home",
          element: <Outlet />,
          children: [
            { path: "", element: <Home /> },
          ],
        },

        {
          path: "utilitysection",
          element: <Index />,
         
        },
        
        // {
        //   path: "product",
        //   element: <Outlet />,
        //   children: [
        //     { path: "", element: <Product /> },
        //     { path: "addproduct", element: <AddProduct />,
        //       children:[
        //         {path:"productcategory", element:<ProductCategory /> },
        //         {path:"productbrand", element:<ProductBrand /> },
        //         {path:"productfeatures", element:<ProductFeatures /> },
        //       ]
        //      },
        //     { path: "addproduct/:Id", element: <AddProduct /> },
        //   ],
        // },
        {
          path: "product",
          element: <Outlet />,
          children: [
            { path: "", element: <Product /> },
            { path: ":Id", element: <ProductDisplay /> },
          ],
        },
        {
          path: "team",
          element: <Outlet />,
          children: [
            { path: "", element: <Team /> },
            { path: "addteam", element: <AddTeam /> },
            { path: "addteam/:Id", element: <AddTeam /> },
          ],
        },
      ],
    },
    {
      path: "/",
      element: (
        <LogoutAuthProtector>
          <Login />
        </LogoutAuthProtector>
      ),
    },
    { path: "register", element: <Register /> },
    
    // { path: "forgot-password", element: <ForgotPassword /> },
    // { path: "reset-password", element: <NewPassword /> },
    // { path: "404", element: <NotFound /> },
    // { path: "/", element: <Navigate to="/dashboard" /> },
    // { path: "*", element: <Navigate to="/404" /> },
  ]);
}

export default AppRoutes;
// export default withAuth(AppRoutes);
