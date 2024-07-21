import { Box, Button, TextField ,Typography ,useTheme} from "@mui/material";
import React, { useEffect, useState } from 'react';
import Header from "../../../components/Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import TabBar from "./TabBar";




const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const locat= location.pathname;
  useEffect(() => {

   if(locat==="/dashboard/product/addproduct")
   navigate(`${locat}/productcategory`)
  
  }, []);

  
  return (
    <Box m="20px">
      <Header title="CREATE LISTING" subtitle="Create a New Listing" />

      <TabBar  locat={locat}/>

        
        <Box sx={{mt:"1rem"}}>
                <Outlet />
        </Box>
    
     
     
    </Box>
  );
};

export default Index;
