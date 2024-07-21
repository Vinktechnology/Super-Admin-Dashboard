import { Container, Box, Typography, Grid, useTheme } from "@mui/material";
import React from "react";
import Header from "../../../components/Header";
import ProfileAccountDisplay from "./ProfileAccountDisplay";
import ProfileAccountAddress from "./ProfileAccountAddress";
import ProfileAccountContact from "./ProfileAccountContact";
import ProfileAccountLogin from "./ProfileAccountLogin";
import ProfileAccountDelete from "./ProfileAccountDelete";
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const accountData = [
  {
    component: ProfileAccountDisplay,
    heading: "Display Information",
    subheading: "",
    link: "account",
    icon:<EditIcon fontSize="medium" style={{ fill: "rgb(2, 124, 213)" }} />
  },
  {
    component: ProfileAccountAddress,
    heading: "Pick up Address",
    subheading: "",
    link: "address",
  },
  {
    component: ProfileAccountLogin,
    heading: "Login Details",
    subheading: "",
    link: "bankdetails",
    icon:<EditIcon fontSize="medium" style={{ fill: "rgb(2, 124, 213)" }} />
  },
  {
    component: ProfileAccountContact,
    heading: "Contact Details",
    subheading: "",
    link: "businessdetails",
    icon:<EditIcon fontSize="medium" style={{ fill: "rgb(2, 124, 213)" }} />
  },
  {
    component: ProfileAccountDelete,
    heading: "Delete Account",
    subheading: "",
    link: "calendar",
    icon:<DeleteForeverIcon fontSize="medium" style={{ fill: "red" }} />
  }
];

function ProfileAccount() {

  return (
    <Container>
      <Header title="Accounts" subtitle="Manage Accounts" />
      <Grid container>
        {accountData?.map((item, index) => 
          {
            const Component = item?.component
            return <Grid item key={index} xs={12} sm={12} md={6} lg={6}> <Component item={item} /></Grid> 
          }
            
          )}
      </Grid>
    </Container>
  );
}

export default ProfileAccount;
