import { Container, Box, Typography, Grid, useTheme } from "@mui/material";
import React from "react";
import Header from "../../../components/Header";
import Profilecalendarvacation from "./Profilecalendarvacation";
import Profilecalendarweeklyoff from "./Profilecalendarweeklyoff";
import Profilecalendarworkinghours from "./Profilecalendarworkinghours";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const accountData = [
  {
    component: Profilecalendarvacation,
    heading: "Vacation plan",
    subheading: "",
    link: "account",
    btntext:"Add Holiday",
    icon: <EditIcon fontSize="medium" style={{ fill: "rgb(2, 124, 213)" }} />,
  },
  {
    component: Profilecalendarweeklyoff,
    heading: "Working hours",
    subheading: "",
    btntext:"",
    link: "address",
    icon: <EditIcon fontSize="medium" style={{ fill: "rgb(2, 124, 213)" }} />,
  },
  {
    component: Profilecalendarworkinghours,
    heading: "Weekly Off",
    subheading: "",
    btntext:"",
    link: "bankdetails",
    icon: <EditIcon fontSize="medium" style={{ fill: "rgb(2, 124, 213)" }} />,
  },
];

function Index() {
  return (
    <Container>
      <Header title="Calendar Details" subtitle="Manage Calendar" />
      <Grid container>
        {accountData?.map((item, index) => {
          const Component = item?.component;
          return (
            <Grid item key={index} xs={12} sm={12} md={6} lg={6}>
              <Component item={item} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Index;
