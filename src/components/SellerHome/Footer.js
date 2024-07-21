import { Box, Divider, Popper, Typography } from "@mui/material";
import React from "react";
import Logo from "../Logo";
import Address from "./HomeCommon/Address";
import Copyright from "./HomeCommon/Copyright";
import CompanyName from "./HomeCommon/CompanyName";

function Footer() {
  return (
    <Box sx={{boxShadow:"rgba(17, 17, 26, 0.1) 0px 0px 16px;", }}>
        {""}
        <Box sx={{paddingTop:"30px"}}></Box>
      <Box sx={{ paddingLeft: "10%", paddingRight: "10%"}}>
        <Box sx={{ width:{xs:"75%", sm:"80%", md:"100%", lg:"100%", xl:"100%"}}}>
        <Logo />
        </Box>
        <Divider sx={{ marginTop: "1rem", marginBottom: "3rem" }} />
      </Box>

      <Box
        sx={{
          display: "flex",
          paddingLeft: "10%",
          paddingRight: "10%",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
        }}
      >
        <Box sx={{ width: "50" }}>
          <CompanyName />
          <Box sx={{ marginTop: "10px" }}>
            <Address />
          </Box>
        </Box>
        <Box sx={{ width: "50" }}>
          <Typography sx={{fontSize:"20px", fontWeight:"600"}} >How to register as a seller</Typography>
          <Typography sx={{fontSize:"20px", fontWeight:"600"}}>How to sell on Amazon</Typography>
          <Typography sx={{fontSize:"20px", fontWeight:"600"}}>Fee and pricing</Typography>
          <Typography sx={{fontSize:"20px", fontWeight:"600"}}>Offers for sellers</Typography>
          <Typography sx={{fontSize:"20px", fontWeight:"600"}}>Launch your brand</Typography>
         
        </Box>
        <Box sx={{ width: "50" }}>
        <Typography sx={{fontSize:"20px", fontWeight:"600"}}>Amazon Ads</Typography>
          <Typography sx={{fontSize:"20px", fontWeight:"600"}}>Sell globally</Typography>
          <Typography sx={{fontSize:"20px", fontWeight:"600"}}>Programs</Typography>
          <Typography sx={{fontSize:"20px", fontWeight:"600"}}>Grow your business</Typography>
          <Typography sx={{fontSize:"20px", fontWeight:"600"}}>Tools</Typography>
        </Box>
      </Box>
      <Box sx={{marginTop:"2rem", boxShadow:"rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;"}}>
      <Copyright />
      </Box>
     
    </Box>
  );
}

export default Footer;
