
    import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
    import React, { useState } from "react";
    import { tokens } from "../../../theme";
    import ModalProfileAccountDisplay from "../../../modals/ModalProfileAccountDisplay";
    import DeleteIcon from '@mui/icons-material/Delete';
    
    function Profilecalendarvacation({ item }) {
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
              minHeight: { xs: "25vh", sm: "25vh", md: "25vh", lg: "25vh" },
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
                <IconButton onClick={handleClickOpen} sx={{fontSize:"10px"}}>{item?.icon}</IconButton>
              </Box>
            </Box>
            <Divider  />
            <Box sx={{paddingLeft:"1rem", marginTop:"1rem", display:"flex", justifyContent:"space-between"}}>
              <Box>
                <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}} >Festival</Typography>
                <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>Aug, 19 2024</Typography>
              </Box>
              <Box sx={{paddingRight:"1rem",paddingTop:".5rem"}}>
                <DeleteIcon sise="medium" style={{fill:"red"}}/>
              </Box>
             
            </Box>
            <Box sx={{paddingLeft:"1rem", marginTop:"1rem", display:"flex", justifyContent:"space-between"}}>
              <Box>
                <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}} >Festival</Typography>
                <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>Aug, 20 2024</Typography>
              </Box>
              <Box sx={{paddingRight:"1rem",paddingTop:".5rem"}}>
                <DeleteIcon sise="medium" style={{fill:"red"}}/>
              </Box>
             
            </Box>
          </Box>
          <ModalProfileAccountDisplay open={open} handleClose={handleClose} />
        </>
      );
    }
    
    export default Profilecalendarvacation;
    
