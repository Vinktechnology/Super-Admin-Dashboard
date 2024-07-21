import { Container, Box, Typography, Grid, useTheme } from "@mui/material";
import React from "react";
import Header from "../../../components/Header";
import ProfilePickUpAddress from "./ProfilePickUpAddress";
import ProfileRegisteredAddress from "./ProfileRegisteredAddress";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const accountData = [
  {
    component: ProfileRegisteredAddress,
    heading: "Registered Address",
    subheading: "Address Registered With GST",
    slug:"registeredaddress",
    link: "",
    address:[{
      "addressline1":"RZ-26-P/4A, 3rd Floor, Gali No-31",
      "addressline2":"Indra Park, Palam Village, South West Delhi , Sudhir Doctor Clinic",
      "pincode":"110045",
      "your_pickup_city":"New Delhi"
    }],
    icon:""
  },
  {
    component: ProfilePickUpAddress,
    heading: "Pick Up Address",
    slug:"pickupaddress",
    subheading: "Your Store Address",
    link: "",
    address:[
      {
        "addressline1":"RZ-26-P/4A, 3rd Floor, Gali No-31",
        "addressline2":"Indra Park, Palam Village, South West Delhi , Sudhir Doctor Clinic",
        "pincode":"110045",
        "your_pickup_city":"New Delhi",
        "primary":true,
      },
      {
        "addressline1":"RZ-26-P/4A, 3rd Floor, Gali No-31",
        "addressline2":"Indra Park, Palam Village, South West Delhi , Sudhir Doctor Clinic",
        "pincode":"110045",
        "your_pickup_city":"New Delhi",  
        "primary":true,
      },
      {
        "addressline1":"RZ-26-P/4A, 3rd Floor, Gali No-31",
        "addressline2":"Indra Park, Palam Village, South West Delhi , Sudhir Doctor Clinic",
        "pincode":"110045",
        "your_pickup_city":"New Delhi",
        "primary":true,
      }
    ],
    icon:<EditIcon fontSize="medium" style={{ fill: "rgb(2, 124, 213)" }} />
  },
];

function Index() {

  return (
    <Container>
      <Header title="Addresses" subtitle="Manage Address" />
      <Grid container>
        {accountData?.map((item, index) => 
          {
            const Component = item?.component;
            if(item?.slug!="pickupaddress")
                {
                    return <Grid item key={index} xs={12} sm={12} md={6} lg={6}> <Component item={item} /> </Grid>  
                }
                else{
                   return item?.address.map((dt, ind)=> <Grid item key={ind} xs={12} sm={12} md={6} lg={6}> <Component item={{dt, ...item, ind}} /> </Grid>  )
                }
          }
            
          )}
      </Grid>
    </Container>
  );
}

export default Index;
