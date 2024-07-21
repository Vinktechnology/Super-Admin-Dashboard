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
          <Box sx={{ marginTop: ".6rem" }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              IFSC Code
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              SBIN0000733
            </Typography>
          </Box>
          <Divider sx={{ paddingTop: ".5rem", paddingBottom: ".5rem" }} />
          <Box
            sx={{
              marginTop: ".6rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: "70%" }}>
              <Typography
                sx={{
                  color: colors.grey[700],
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Account Holder Name
              </Typography>
              <Typography
                sx={{
                  color: colors.grey[400],
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Mr. VIKRANT KAUSHIK
              </Typography>
            </Box>
            <Box sx={{ width: "30%", paddingTop: ".2rem" }}>
              <Chip
                label="Verification Failed"
                sx={{
                  fontWeight: "600",
                  background: "rgb(255, 236, 236)",
                  color: "rgb(232, 92, 92)",
                }}
              />
            </Box>
          </Box>
          <Box sx={{ marginTop: ".6rem" }}>
            <Typography
              sx={{
                borderRadius: "10px",
                padding: "5px",
                marginRight: "1rem",
                background: "rgb(255, 236, 236)",
                color: colors.grey[700],
                fontSize: "17px",
                fontWeight: "600",
              }}
            >
              <ErrorOutlineIcon
                style={{ fill: "rgb(232, 92, 92)", fontSize: "17px" }}
              />
              <span style={{ marginTop: "-10px" }}>
                Account holder’s name do not match with the entered GSTIN.
                Please try another account
              </span>
            </Typography>
          </Box>
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
              Add Another Account
            </Button>
          </Box>
        </Box>
      </Box>
      <ModalProfileBankDisplay open={open} handleClose={handleClose} />
    </>
  );
}

export default ProfileBankDisplay;
