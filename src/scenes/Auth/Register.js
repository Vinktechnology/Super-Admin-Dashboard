import React from "react";
import Header from "../../components/SellerHome/Header";
import Footer from "../../components/SellerHome/Footer";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Box, useTheme } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Element from "../../Form/Element.js";
import { inputType } from "../../utils/enum.js";
import { useFormik } from "formik";
import { tokens } from "../../../src/theme.js";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import { LoginSchema } from "../../utils/validation.js";
import Paper from "@mui/material/Paper";
import RegisterStep1 from "./RegisterStep1.js";
import RegisterStep2 from "./RegisterStep2.js";
import RegisterStep3 from "./RegisterStep3.js";

function Register() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const steps = [
    {
      label: "CONTACT & GST",
      description: (
        <RegisterStep1
          handleNext={handleNext}
          handleBack={handleBack}
          activeStep={activeStep}
        />
      ),
    },
    {
      label: "USER CREATION",
      description: (
        <RegisterStep2
          handleNext={handleNext}
          handleBack={handleBack}
          activeStep={activeStep}
        />
      ),
    },
    {
      label: "PICKUP ADDRESS & BANK DETAILS",
      description: (
        <RegisterStep3
          handleNext={handleNext}
          handleBack={handleBack}
          activeStep={activeStep}
        />
      ),
    },
  ];

  return (
    <Box>
      <Header />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: {
            xs: ".9rem",
            sm: "1rem",
            md: "4rem",
            lg: "4rem",
            xl: "4rem",
          },
          marginTop: {
            xs: "5rem",
            sm: "1rem",
            md: "4rem",
            lg: "4rem",
            xl: "4rem",
          },
          marginBottom: {
            xs: "5rem",
            sm: "1rem",
            md: "4rem",
            lg: "4rem",
            xl: "4rem",
          },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "60%", lg: "60%", xl: "60%" },
            padding: {
              xs: ".3rem",
              sm: "2rem",
              md: "3rem",
              lg: "3rem",
              xl: "3rem",
            },
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          }}
        >
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Register;
