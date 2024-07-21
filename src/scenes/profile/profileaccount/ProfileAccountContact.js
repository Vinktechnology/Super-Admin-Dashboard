import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { tokens } from "../../../theme";
import ModalProfileAccountContact from "../../../modals/ModalProfileAccountContact";

function ProfileAccountContact({ item }) {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Box
      sx={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        height: { xs: "40vh", sm: "40vh", md: "40vh", lg: "40vh" },
        margin: "15px",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
    >
      <Box
        sx={{
          paddingLeft: "1rem",
          paddingRight:"1rem",
          paddingTop:"1rem",
          paddingBottom:".5rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "70%" }}>
          <Typography
            sx={{
              color: colors.grey[100],
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {item?.heading}
          </Typography>
          <Typography>{item?.subheading}</Typography>
        </Box>
        <Box sx={{ width: "10%", textAlign: "center" }}>
            <IconButton onClick={handleClickOpen}>{item?.icon}</IconButton>
          </Box>
        
       
      </Box>
      <Box sx={{paddingLeft:"1rem"}}>
        <Box>
          <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}} >Your Name</Typography>
          <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>Vikrant Kaushik</Typography>
        </Box>
        <Box sx={{marginTop:".6rem"}}>
          <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}}>Your Mobile Number</Typography>
          <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>
            9716500323
          </Typography>
        </Box>
        <Box sx={{marginTop:".6rem"}}>
          <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}} >Your Email Address</Typography>
          <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>vikrantitpro@gmail.com</Typography>
        </Box>
        <Box sx={{marginTop:".6rem"}}>
          <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}} >Preferred Time Slot For Call</Typography>
          <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>10:00 - 18:00</Typography>
        </Box>
      </Box>
    </Box>
    <ModalProfileAccountContact open={open} handleClose={handleClose}/>
  </>
  );
}

export default ProfileAccountContact;
