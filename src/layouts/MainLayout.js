import React from "react";
import { Outlet } from "react-router-dom";
import withAuth from "../hoc/withAuth";

function MainLayout() {
  return <Outlet />;
}

export default withAuth(MainLayout);
