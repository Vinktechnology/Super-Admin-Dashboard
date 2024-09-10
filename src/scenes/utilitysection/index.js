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
const UtilitySection = () => {
  return (
    <Box
      sx={{ m: { xs: "5px", sm: "5px", md: "20px", lg: "20px", xl: "20px" } }}
    >
      <Header title="Utility Section" subtitle="Manage Utility Section" />
      <Box sx={{ mb: 2 }}>
        {" "}
        <UtilityEmail />
      </Box>

      <Box sx={{ mb: 2 }}>
        {" "}
        <UtilityPhone />
      </Box>
      <Box sx={{ mb: 2 }}>
        {" "}
        <UtilityFacebook />
      </Box>
      <Box sx={{ mb: 2 }}>
        {" "}
        <UtilityInstagram />
      </Box>
      <Box sx={{ mb: 2 }}>
        {" "}
        <UtilityTwitter />
      </Box>
      <Box sx={{ mb: 2 }}>
        {" "}
        <UtilityPInterest />
      </Box>
      <Box sx={{ mb: 2 }}>
        {" "}
        <UtilityYoutube />
      </Box>
      <Box sx={{ mb: 2 }}>
        {" "}
        <UtilityAppStoreButton />
      </Box>
      <Box sx={{ mb: 2 }}>
        {" "}
        <UtilityGooglePlayButton />
      </Box>
      <Box sx={{ mb: 2 }}>
        {" "}
        <UtilityAddress />
      </Box>
    </Box>
  );
};

export default UtilitySection;
