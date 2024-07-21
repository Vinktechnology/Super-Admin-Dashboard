import { Container, Box, Typography, Grid, useTheme } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { tokens } from "../../../src/theme";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Link } from "react-router-dom";

const profileData = [
  {
    icon: <PersonIcon fontSize="large" style={{ fill: "rgb(2, 124, 213)" }} />,
    heading: "Account",
    subheading: "View your display information,login details and more",
    link: "account",
  },
  {
    icon: <HomeIcon fontSize="large" style={{ fill: "rgb(2, 124, 213)" }} />,
    heading: "Address",
    subheading: "View your Pickup and Registered address",
    link: "address",
  },
  {
    icon: (
      <AccountBalanceIcon
        fontSize="large"
        style={{ fill: "rgb(2, 124, 213)" }}
      />
    ),
    heading: "Bank Details",
    subheading: "View your bank details",
    link: "bankdetails",
  },
  {
    icon: (
      <LocalMallIcon fontSize="large" style={{ fill: "rgb(2, 124, 213)" }} />
    ),
    heading: "Business Details",
    subheading: "View your business details and KYC documents",
    link: "businessdetails",
  },
  {
    icon: (
      <CalendarMonthIcon
        fontSize="large"
        style={{ fill: "rgb(2, 124, 213)" }}
      />
    ),
    heading: "Calendar",
    subheading: "List your working hours, Holiday list and Vacation Plan",
    link: "calendar",
  },
  {
    icon: (
      <SettingsSuggestIcon
        fontSize="large"
        style={{ fill: "rgb(2, 124, 213)" }}
      />
    ),
    heading: "Settings",
    subheading: "Manage your logistics and FBF settings",
    link: "settings",
  },
];

function Index() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Container>
      <Header title="Profile" subtitle="Manage Profile" />
      <Grid container>
        {profileData?.map((item, index) => (
          <Grid item key={index} xs={12} sm={12} md={6} lg={6}>
            <Link to={item?.link} style={{
                textDecoration:"inherit",
                color:"inherit"
              }}>
            <Box sx={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                margin: "15px",
                
                "&:hover": {
                    backgroundColor: "transparent",
                  },
              }}>
            <Box
              sx={{
                padding: "10px",
                height: {xs:"16vh", sm:"15vh", md:"10vh", lg:"10vh"},
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: "20%", textAlign: "center" }}>{item.icon}</Box>
              <Box sx={{ width: "80%" }}>
                <Typography
                  sx={{
                    color: colors.grey[100],
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {item.heading}
                </Typography>
                <Typography>{item.subheading}</Typography>
              </Box>
            </Box>
            <Box sx={{display:"flex", justifyContent:"end"}}>
                  <Box sx={{marginRight:".8rem"}}>
                  <TrendingFlatIcon fontSize="large" style={{ fill: "rgb(2, 124, 213)" }} />
                  </Box>
            </Box>
            </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Index;
