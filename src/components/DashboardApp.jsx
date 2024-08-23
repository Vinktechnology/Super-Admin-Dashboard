import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

import { mockTransactions } from "../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "./Header";
import LineChart from "./LineChart";
import GeographyChart from "./GeographyChart";
import BarChart from "./BarChart";
import StatBox from "./StatBox";
import ProgressCircle from "./ProgressCircle";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardDataThunk } from "../store/slices/dashboard/dashboard.slice";
import VendorDataChips from "./DashboardDisplay/VendorDataChips";
import ProductDataChips from "./DashboardDisplay/ProductDataChips";




const DashboardApp = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(()=>
  {
    dispatch(getDashboardDataThunk())
  },[])


  
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
      <VendorDataChips />
      <ProductDataChips />
    </Box>
  );
};

export default DashboardApp;
