import { Box, Typography, useTheme, IconButton } from "@mui/material";
import React, { useState } from "react";
import { tokens } from "../../../theme";
import ModalProfileAccountChangePassword from "../../../modals/ModalProfileAccountChangePassword";
import EditIcon from "@mui/icons-material/Edit";

function ProfileAccountLogin({ item }) {
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
            paddingRight: "1rem",
            paddingTop: "1rem",
            paddingBottom: ".5rem",
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

          <Box sx={{ width: "30%", textAlign: "center" }}>
            <Typography
              onClick={handleClickOpen}
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                cursor: "pointer",
                color: "rgb(2, 124, 213)",
              }}
            >
              Change Password
            </Typography>
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
              Display Name
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Vikrant Kaushik
            </Typography>
          </Box>
          <Box
            sx={{ marginTop: ".6rem", display: "flex", justifyContent: "end" }}
          >
            <Box sx={{ width: "85%" }}>
              <Typography
                sx={{
                  color: colors.grey[700],
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Your Mobile Number
              </Typography>
              <Typography
                sx={{
                  color: colors.grey[400],
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                9176500323
              </Typography>
            </Box>
            <Box sx={{ width: "15%" ,mt:"1rem" }}>
              <EditIcon />
            </Box>
          </Box>

          <Box
            sx={{ marginTop: ".6rem", display: "flex", justifyContent: "end" }}
          >
            <Box sx={{ width: "85%" }}>
              <Typography
                sx={{
                  color: colors.grey[700],
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Your Email
              </Typography>
              <Typography
                sx={{
                  color: colors.grey[400],
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                vikrantkaushik@gmail.com
              </Typography>
            </Box>
            <Box sx={{ width: "15%",mt:"1rem" }}>
              <EditIcon />
            </Box>
          </Box>
         
          <Box sx={{ marginTop: ".6rem" }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Password
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              ********
            </Typography>
          </Box>
        </Box>
      </Box>
      <ModalProfileAccountChangePassword
        open={open}
        handleClose={handleClose}
      />
    </>
  );
}

export default ProfileAccountLogin;
