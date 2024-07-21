import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { tokens } from "../../../theme";
import ModalProfileAccountDisplay from "../../../modals/ModalProfileAccountDisplay";

function ProfileRegisteredAddress({ item }) {
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
          minHeight: { xs: "40vh", sm: "40vh", md: "40vh", lg: "40vh" },
          margin: "15px",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "1rem",
            paddingBottom: ".5rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "90%" }}>
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
        {
                    item?.address.map((dt, index)=>
                        <Box sx={{paddingLeft:"1rem"}}>
                        <Box sx={{marginTop:".6rem"}} key={index}>
                            
                    <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}} >Address Line 1</Typography>
                    <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>{dt?.addressline1}</Typography>
                  </Box>
                   <Box sx={{marginTop:".6rem"}} key={index}>
                   <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}} >Address Line 2</Typography>
                   <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>{dt?.addressline2}</Typography>
                 </Box>
                 <Box sx={{marginTop:".6rem"}} key={index}>
                   <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}} >Pin Code</Typography>
                   <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>{dt?.pincode}</Typography>
                 </Box>
                 <Box sx={{marginTop:".6rem"}} key={index}>
                   <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}} >City</Typography>
                   <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>{dt?.your_pickup_city}</Typography>
                 </Box>
                 </Box>
                    )
                }
      </Box>
      <ModalProfileAccountDisplay open={open} handleClose={handleClose} />
    </>
  );
}

export default ProfileRegisteredAddress;
