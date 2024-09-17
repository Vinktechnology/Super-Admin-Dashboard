import {
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import UtilityEmail from "./UtilityEmail";
import Header from "../../components/Header";
import UtilityPhone from "./UtilityPhone";
import UtilityFacebook from "./UtilityFacebook";
import UtilityInstagram from "./UtilityInstagram";
import UtilityTwitter from "./UtilityTwitter";
import UtilityPInterest from "./UtilityPInterest";
import UtilityYoutube from "./UtilityYoutube";
import UtilityAppStoreButton from "./UtilityAppStoreButton";
import UtilityGooglePlayButton from "./UtilityGooglePlayButton";
import UtilityAddress from "./UtilityAddress";
import { useDispatch } from "react-redux";
import { getAllUtilityThunk } from "../../store/slices/websiteutility/websiteutility.slice";
const UtilitySection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUtilityThunk());
  }, []);

  return (
    <Box
      sx={{ m: { xs: "5px", sm: "5px", md: "20px", lg: "20px", xl: "20px" } }}
    >
      <Header title="Utility Section" subtitle="Manage Utility Section" />
      <Grid container >
      <Grid xs={12} sm={6} md={6} lg={4} sx={{ mb: 2 }}>
        <UtilityEmail />
      </Grid>
      <Grid xs={12} sm={6} md={6} lg={4} sx={{ mb: 2 }}>
        <UtilityPhone />
      </Grid>
      <Grid xs={12} sm={6} md={6} lg={4}  sx={{ mb: 2 }}>
        <UtilityFacebook />
      </Grid>
      <Grid  xs={12} sm={6} md={6} lg={4} sx={{ mb: 2 }}>
        <UtilityInstagram />
      </Grid>
      <Grid  xs={12} sm={6} md={6} lg={4} sx={{ mb: 2 }}>
        <UtilityTwitter />
      </Grid>
      <Grid xs={12} sm={6} md={6} lg={4} sx={{ mb: 2 }}>
        <UtilityPInterest />
      </Grid>
      <Grid xs={12} sm={6} md={6} lg={4} sx={{ mb: 2 }}>
        <UtilityYoutube />
      </Grid>
      <Grid xs={12} sm={6} md={6} lg={4} sx={{ mb: 2 }}>
        <UtilityAppStoreButton />
      </Grid>
      <Grid xs={12} sm={6} md={6} lg={4} sx={{ mb: 2 }}>
        <UtilityGooglePlayButton />
      </Grid>
      <Grid xs={12} sm={6} md={6} lg={4} sx={{ mb: 2 }}>
        <UtilityAddress />
      </Grid>
      </Grid>
    </Box>
  );
};

export default UtilitySection;
