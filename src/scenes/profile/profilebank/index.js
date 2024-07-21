import { Container, Box, Typography, Grid, useTheme } from "@mui/material";
import React from "react";
import Header from "../../../components/Header";
import ProfileBankDisplay from "./ProfileBankDisplay";
import ProfileBankLDC from "./ProfileBankLDC";
import EditIcon from '@mui/icons-material/Edit';


const bankData = [
  {
    component: ProfileBankDisplay,
    heading: "Bank Account Information",
    subheading: "For a successful bank verification, account name must match with the registered GSTIN name",
    link: "account",
    icon:<EditIcon fontSize="medium" style={{ fill: "rgb(2, 124, 213)" }} />
  },
  {
    component: ProfileBankLDC,
    heading: "Claim LDC for TDS under 194O",
    subheading: "Please provide us your LDC details",
    link: "address",
    icon:"",

  }
];

function Index() {

  return (
    <Container>
      <Header title="Bank Details" subtitle="Manage Bank Details" />
      <Grid container>
        {bankData?.map((item, index) => 
          {
            const Component = item?.component
            return <Grid item key={index} xs={12} sm={12} md={6} lg={6}> <Component item={item} /></Grid> 
          }
            
          )}
      </Grid>
    </Container>
  );
}

export default Index;
