import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { tokens } from "../../../theme";
import ModalProfileAccountDisplay from "../../../modals/ModalProfileAccountDisplay";
import EditIcon from '@mui/icons-material/Edit';
import VerifiedIcon from '@mui/icons-material/Verified';

function Index({ item }) {
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
        //   height: { xs: "100vh", sm: "100vh", md: "100vh", lg: "100vh" },
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
            justifyContent: "center",
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
                Business Details
            </Typography>
            <Typography>{item?.subheading}</Typography>
          </Box>
          <Box sx={{ width: "10%", textAlign: "center" }}>
            <IconButton onClick={handleClickOpen}><EditIcon fontSize="medium" style={{ fill: "rgb(2, 124, 213)" }} /></IconButton>
          </Box>
        </Box>
        <Box sx={{paddingLeft:"1rem"}}>
          <Box>
            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}} >Business Name</Typography>
            <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>Vink Technology Pvt Ltd <VerifiedIcon style={{fill:"green"}} /></Typography>
          </Box>
          <Box sx={{marginTop:".6rem"}}>
            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}}>TAN </Typography>
            <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>Not Available   </Typography>
          </Box>
          <Box sx={{marginTop:".6rem"}}>
            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}}>GSTIN/ Provisional ID Number* </Typography>
            <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>07AAJCV0146L1Z4  <VerifiedIcon style={{fill:"green"}} /> </Typography>
          </Box>
          <Box sx={{marginTop:".6rem"}}>
            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}}>Registered business address </Typography>
            <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>3rd Floor, WZ-1370, Nangal raya, New Delhi, South West Delhi, NEW DELHI </Typography>
          </Box>
          <Box sx={{marginTop:".6rem"}}>
            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}}>Signature </Typography>
            <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>Done <VerifiedIcon style={{fill:"green"}} />  </Typography>
          </Box>
          <Box sx={{marginTop:".6rem"}}>
            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}}>Business Type </Typography>
            <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>Private Limited Company  </Typography>
          </Box>
          <Box sx={{marginTop:".6rem"}}>
            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}}>PAN </Typography>
            <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>AAJCV0146L <VerifiedIcon style={{fill:"green"}} />  </Typography>
          </Box>
          <Box sx={{marginTop:".6rem"}}>
            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}}>Address proof </Typography>
            <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>Not Available   </Typography>
          </Box>
          
        </Box>
      </Box>
      <ModalProfileAccountDisplay open={open} handleClose={handleClose} />
    </>
  );
}

export default Index;
