
    import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { tokens } from "../../../theme";
import ModalProfileAccountDelete from "../../../modals/ModalProfileAccountDelete";

function ProfileAccountDelete({ item }) {
        
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
      <Box sx={{paddingLeft:"1rem"}}>
        <Box>
          <Typography sx={{   color: colors.grey[400],fontSize:"15px",  fontWeight: "600",}}>Account can be deleted only when:</Typography>
        </Box>
        <Box sx={{marginTop:".6rem"}}>
          <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}}> * There are no actively pending orders (Forward and return)</Typography>
          <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}}> * There are no pending settlements</Typography>
         
        </Box>
      </Box>
    </Box>
    <ModalProfileAccountDelete open={open} handleClose={handleClose} />
  </>
  );
}

export default ProfileAccountDelete;

