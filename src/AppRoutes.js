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
import Attribute from "./scenes/attribute";
import AddAttribute from "./scenes/attribute/AddAttribute";
import Product from "./scenes/product";
import AddProduct from "./scenes/product/addproduct";
import AddTeam from "./scenes/team/AddTeam";
import SellerHome from "./components/SellerHome";
import VendorDisplay from "./scenes/vendors/vendordisplay";
import Profile from "./scenes/profile";
import ProfileAccount from "./scenes/profile/profileaccount";
import ProfileBank from "./scenes/profile/profilebank";
import ProfileBusiness from "./scenes/profile/profilebusiness";
import ProfileCalendar from "./scenes/profile/profilecalendar";
import ProfileSetting from "./scenes/profile/profilesetting";
import ProfileAddress from "./scenes/profile/profileaddress";
import ProductCategory from "./scenes/product/addproduct/ProductCategory";
import ProductFeatures from "./scenes/product/addproduct/ProductFeatures";
import ProductBrand from "./scenes/product/addproduct/ProductBrand";



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
            { path: "addcategory", element: <AddCategory /> },
            { path: "addcategory/:Id", element: <AddCategory /> },
          ],
        },
        {
          path: "subcategory",
          element: <Outlet />,
          children: [
            { path: "", element: <SubCategory /> },
            { path: "addsubcategory", element: <AddSubCategory /> },
            { path: "addsubcategory/:Id", element: <AddSubCategory /> },
          ],
        },
        {
          path: "tag",
          element: <Outlet />,
          children: [
            { path: "", element: <Tag /> },
            { path: "addtag", element: <AddTag /> },
            { path: "addtag/:Id", element: <AddTag /> },
          ],
        },
        {
          path: "attribute",
          element: <Outlet />,
          children: [
            { path: "", element: <Attribute /> },
            { path: "addattribute", element: <AddAttribute /> },
            { path: "addattribute/:Id", element: <AddAttribute /> },
          ],
        },
        {
          path: "product",
          element: <Outlet />,
          children: [
            { path: "", element: <Product /> },
            { path: "addproduct", element: <AddProduct />,
              children:[
                {path:"productcategory", element:<ProductCategory /> },
                {path:"productbrand", element:<ProductBrand /> },
                {path:"productfeatures", element:<ProductFeatures /> },
              ]
             },
            { path: "addproduct/:Id", element: <AddProduct /> },
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
        // {
        //   path: "user",
        //   element: <Outlet />,
        //   children: [
        //     { path: "", element: <User /> },
        //     { path: "createUser", element: <AddUser /> },
        //   ],
        // },
        // {
        //   path: "projects",
        //   element: <Outlet />,
        //   children: [
        //     { path: "", element: <AllProjects /> },
        //     {
        //       path: ":id",
        //       element: <Outlet />,
        //       children: [
        //         {
        //           path: "",
        //           element: <ProjectDetails />,
        //           children: [
        //             { path: overviewPath, element: <Overview /> },
        //             { path: proposalPath, element: <Proposal /> },
        //             { path: tablePath, element: <TimelineDashboard /> },
        //             { path: scopePath, element: <Charter /> },
        //             {
        //               path: supportPath,
        //               element: <Outlet />,
        //               children: [
        //                 { path: "", element: <Ticket /> },
        //                 { path: ":ticketId", element: <ContactChatTicket /> },
        //               ],
        //             },
        //             { path: milestonePath, element: <Collections /> },
        //             { path: ratingsPath, element: <ProjectFeedback /> },
        //           ],
        //         },
        //       ],
        //     },
        //   ],
        // },
        // {
        //   path: "myProfile",
        //   element: <MyProfile />,
        // },
        // { path: "notification", element: <Notification /> },
        // { path: "wallet", element: <Wallet /> },
        // { path: "overview", element: <OverView /> },
        // { path: "project_feedback", element: <ProjectFeedback /> },
        // { path: "ticket", element: <Ticket /> },
        // { path: "faq", element: <Faq /> },
        // { path: "chat", element: <MainChat /> },
        // {
        //   path: "contact_us",
        //   element: <Outlet />,
        //   children: [
        //     { path: "", element: <Contact /> },
        //     { path: "tickets/:ticketId", element: <ContactChatTicket /> },
        //   ],
        // },
      ],
    },

    // {
    //   path: "/dashboard",
    //   element:
    //   (
    //     <AuthProtector>
    //       <DashboardLayout />
    //     </AuthProtector>
    //   )
    //   ,
    //   children: [
    //     // {
    //     //   path: "",
    //     //   element: <Navigate to="/dashboard/app" />,
    //     // },
    //     // {
    //     //   path: "app",
    //     //   element: <DashboardApp />,
    //     // },
    //     // {
    //     //   path: "user",
    //     //   element: <Outlet />,
    //     //   children: [
    //     //     { path: "", element: <User /> },
    //     //     { path: "createUser", element: <AddUser /> },
    //     //   ],
    //     // },
    //     // {
    //     //   path: "projects",
    //     //   element: <Outlet />,
    //     //   children: [
    //     //     { path: "", element: <AllProjects /> },
    //     //     {
    //     //       path: ":id",
    //     //       element: <Outlet />,
    //     //       children: [
    //     //         {
    //     //           path: "",
    //     //           element: <ProjectDetails />,
    //     //           children: [
    //     //             { path: overviewPath, element: <Overview /> },
    //     //             { path: proposalPath, element: <Proposal /> },
    //     //             { path: tablePath, element: <TimelineDashboard /> },
    //     //             { path: scopePath, element: <Charter /> },
    //     //             {
    //     //               path: supportPath,
    //     //               element: <Outlet />,
    //     //               children: [
    //     //                 { path: "", element: <Ticket /> },
    //     //                 { path: ":ticketId", element: <ContactChatTicket /> },
    //     //               ],
    //     //             },
    //     //             { path: milestonePath, element: <Collections /> },
    //     //             { path: ratingsPath, element: <ProjectFeedback /> },
    //     //           ],
    //     //         },
    //     //       ],
    //     //     },
    //     //   ],
    //     // },
    //     // {
    //     //   path: "myProfile",
    //     //   element: <MyProfile />,
    //     // },
    //     // { path: "notification", element: <Notification /> },
    //     // { path: "wallet", element: <Wallet /> },
    //     // { path: "overview", element: <OverView /> },
    //     // { path: "project_feedback", element: <ProjectFeedback /> },
    //     // { path: "ticket", element: <Ticket /> },
    //     // { path: "faq", element: <Faq /> },
    //     // { path: "chat", element: <MainChat /> },
    //     // {
    //     //   path: "contact_us",
    //     //   element: <Outlet />,
    //     //   children: [
    //     //     { path: "", element: <Contact /> },
    //     //     { path: "tickets/:ticketId", element: <ContactChatTicket /> },
    //     //   ],
    //     // },
    //   ],
    // },
    { path: "/", element: <SellerHome /> },

    //  { path: "", element: <Navigate to="/login" /> },
    {
      path: "login",
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
