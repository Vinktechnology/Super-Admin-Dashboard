import { Box, Typography, useTheme,IconButton } from "@mui/material";
import React from "react";
import { tokens } from "../../../theme";

function ProfileAccountAddress({ item }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
          
          {/* <Box sx={{ width: "10%", textAlign: "center" }}>
            <IconButton onClick={handleClickOpen}>{item?.icon}</IconButton>
          </Box> */}
        </Box>
        <Box sx={{paddingLeft:"1rem"}}>
          <Box>
            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}} >Address Line 1</Typography>
            <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>Vikrant Kaushik</Typography>
          </Box>
          <Box sx={{marginTop:".6rem"}}>
            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}}>Address Line 2</Typography>
            <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>
              7 files changed, 231 insertions(+), 12 deletions(-)
            </Typography>
          </Box>
          <Box sx={{marginTop:".6rem"}}>
            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}} >Pin code</Typography>
            <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>110045</Typography>
          </Box>
          <Box sx={{marginTop:".6rem"}}>
            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}} >Your Pickup City</Typography>
            <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>New Delhi</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ProfileAccountAddress;
