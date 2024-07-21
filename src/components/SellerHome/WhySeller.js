import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SwipeUpIcon from "@mui/icons-material/SwipeUp";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";


const data = [
  {
    icon: <CameraEnhanceIcon style={{FontSize:"large", color:"rgb(2, 124, 213)"}}/>,
    heading: "Opportunity",
    subheading:
      "45 crore+ of customers across 19000+ pincodes, and access to shopping festivals like The Big Billion Days, and more.",
  },
  {
    icon: <SwipeUpIcon  style={{FontSize:"35px", color:"rgb(2, 124, 213)"}}/>,
    heading: "Ease of Doing Business",
    subheading:
      "Create your Flipkart seller account in under 10 minutes with just 1 product and a valid GSTIN number.",
  },
  {
    icon: <AutoGraphIcon  style={{FontSize:"35px", color:"rgb(2, 124, 213)"}}/>,
    heading: "Growth",
    subheading:
      "Sellers see an average 2.8X spike in growth, 2.3X more visibility, and up to 5X growth in The Big Billion Days Sale.",
  },
  {
    icon: <SupportAgentIcon style={{FontSize:"35px", color:"rgb(2, 124, 213)"}} />,
    heading: "Additional Support",
    subheading:
      "Account management services, exclusive training programs, business insights, catalogue/photoshoot support, and more.",
  },
];

function WhySeller() {
  return (
    <Box sx={{ padding: {xs:"1rem", md:"3rem"} }}>
      <Typography variant="h2">
        Why do{" "}
        <span style={{ color: "rgb(2, 124, 213)", fontWeight: "700" }}>
          sellers love selling on Vink?
        </span>
      </Typography>

      <Box sx={{ display: "flex" , flexDirection:{xs:"column", md:"row", lg:"row"}}}>
        <Box sx={{ width:{xs:"100%", md:"60%",lg:"60%"},   marginTop:"3.5rem" }}>
          <Grid container spacing={0}>
            {data?.map((item, index) => (
              <Grid xs={12} sm={6} md={6} sx={{padding:"10px"}} >
                <Paper elevation={3} sx={{ minHeight:"160px", padding:"20px", borderRadius:"10px", boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}}>
                    <Box sx={{display:"flex", justifyContent:"flex-start" }}>
                        
                    {item.icon}
                    <Typography variant="h4" style={{fontWeight:"700", paddingLeft:"20px"}} >{item.heading}</Typography>
                    </Box>
                   
                    <Typography variant="h5" style={{paddingTop:"25px", color:"686363"}} >{item.subheading}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box  sx={{display:{xs:"none", md:"block", lg:"block", xl:"block"}, width:"40%", textAlign: "center" }}>
          <img
            alt="heroimage"
            src={`../../assets/lady.webp`}
            style={{
              width: "45%",
              height: "auto",
              cursor: "default",
              maxHeight: "545px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default WhySeller;
