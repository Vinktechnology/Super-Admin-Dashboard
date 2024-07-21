import {
    Box,
    Button,
    Chip,
    Divider,
    IconButton,
    Typography,
    useTheme,
  } from "@mui/material";
  import React, { useState } from "react";
  import { tokens } from "../../../theme";
  import ModalProfileBankDisplay from "../../../modals/ModalProfileBankDisplay";
  import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
  
  function ProfileBankDisplay({ item }) {
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
            height: { xs: "60vh", sm: "60vh", md: "50vh", lg: "50vh" },
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
          <Box sx={{ paddingLeft: "1rem" }}>
            <Box>
              <Typography
                sx={{
                  color: colors.grey[700],
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Account Number
              </Typography>
              <Typography
                sx={{
                  color: colors.grey[400],
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                20191279076
              </Typography>
            </Box>
          
            <Divider sx={{ paddingTop: ".5rem", paddingBottom: ".5rem" }} />
            
            <Box sx={{ marginTop: ".6rem" }}>
              <Button
                disableElevation
                disableRipple
                variant="text"
                sx={{
                  color: "rgb(2, 124, 213)",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  "&:hover": {
                      backgroundColor: "transparent",
                    },
                }}
              >
                Add Details
              </Button>
            </Box>
          </Box>
        </Box>
        <ModalProfileBankDisplay open={open} handleClose={handleClose} />
      </>
    );
  }
  
  export default ProfileBankDisplay;
  