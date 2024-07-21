import { Box, Button, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useState } from "react";

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isSidebar, setIsSidebar] = useState(isMobile?true:false);
  const closeSidebar=(data)=>
    {
      setIsSidebar(!isSidebar);
    }
  return (
<div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} closeSidebar={closeSidebar} />
            <Outlet />
          </main>
        </div> 
  );
};

export default Dashboard;
