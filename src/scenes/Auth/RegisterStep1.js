import React, { useCallback, useEffect, useState } from "react";
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
import { RegisterStep1Schema } from "../../utils/validation.js";
import Paper from "@mui/material/Paper";
import OtpInput from "../../Form/CustomOtpInput.js";
import OtpForm from "./OtpForm.js";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { debounce } from "../../utils/global/global.js";

const phoneRegExp = /^[6-9]\d{9}$/;

function RegisterStep1({ handleNext, handleBack, activeStep }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [isOTPVisible, setOTPVisible] = useState(false);
  const [isOTPSuccess, setOTPSuccess] = useState(false);
  const [isGSTVerified, setGSTVerified] = useState(false);
  const [isPHONEVerified, setPHONEVerified] = useState(false);

  const INIT_STATE = {
    contactnumber: "",
    emailid: "",
    gstno: "",
  };

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: INIT_STATE,
      onSubmit: onSubmit,
      validationSchema: RegisterStep1Schema,
    });

  // Debounced function
  const fetchDataGST = useCallback(
    debounce(async (searchQuery) => {
      if (searchQuery) {
        // const response = await fetch(`https://api.example.com/search?q=${searchQuery}`);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        ); // replace with axio and redux-toolkit
        const data = await response.json();

        setGSTVerified(true);
      }
    }, 1000),
    [] // Dependencies for useCallback, empty means it only initializes once
  );

  async function onSubmit(data) {
    handleNext();
    // dispatch(
    //   loginByEmailAsyncThunk({
    //     ...values,
    //   })
    // )
    //   .unwrap()
    //   .then(() => {
    //     navigate({
    //       pathname: "/",
    //     });
    //   });

    // navigate({
    //   pathname: "/dashboard",
    // });
  }
  const handleOTPSucess = (data) => {
    if (data?.isSuccess) {
      setOTPVisible(false);
      setOTPSuccess(true);
      setPHONEVerified(true);
    }
  };

  const handleShowHideOTP = () => {
    //axios call and send otp
    // on success it will show the otp screen
    setOTPVisible(true);
  };

  const handleContactChange = (e) => {
    handleChange({
      target: {
        name: e.currentTarget.name,
        value: e.target.value,
      },
    });
    if(isOTPVisible==true)
      {
        setOTPVisible(false);
      }
  };

  const handleGstChange = (e) => {
    handleChange({
      target: {
        name: e.currentTarget.name,
        value: e.target.value,
      },
    });
    if (e.target.value != "" ) {
      fetchDataGST(e.target.value);
    }
  };

  console.log("values", values);
  return (
    <Box
      component="form"
      display="grid"
      gap="30px"
      onSubmit={handleSubmit}
      noValidate
      sx={{ mt: 1, width: "40", minWidth: "100%", p: 2 }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "80%" }}>
          <Element
            eletype={inputType.number}
            label="Contact Number"
            placeholder="Please enter contact nubmer"
            inputProps={{
              onChange: handleContactChange,
              onBlur: handleBlur,
              name: "contactnumber",
            }}
            errorText={touched.contactnumber && errors.contactnumber}
            value={values.contactnumber}
          />
        </Box>
        <Box sx={{ width: "20%", padding: "10px" }}>
          {!isOTPVisible && !isOTPSuccess && (
            <Button
              variant="contained"
              onClick={handleShowHideOTP}
              disabled={
                values.contactnumber.toString().length === 10 &&
                errors?.contactnumber == undefined
                  ? false
                  : true
              }
              sx={{
                fontSize: {
                  xs: "7px",
                  sm: "12px",
                  md: "15px",
                  lg: "15px",
                  xl: "17px",
                },
                background: "rgb(2, 124, 213)",
              }}
            >
              Send OTP
            </Button>
          )}
          {isOTPSuccess && (
            <CheckCircleIcon style={{ fill: "green" }} fontSize="large" />
          )}
        </Box>
      </Box>

      {isOTPVisible && (
        <Box sx={{ marginTop: "10px" }}>
          <OtpForm isResendVisible={true} handleOTPSucess={handleOTPSucess} />{" "}
        </Box>
      )}

      <Element
        eletype={inputType.input}
        label="Email Id"
        placeholder="Please enter Email Id"
        inputProps={{
          onChange: handleChange,
          onBlur: handleBlur,
          name: "emailid",
        }}
        errorText={touched.emailid && errors.emailid}
        value={values.emailid}
      />

      <Element
        eletype={inputType.input}
        label="GST NO"
        placeholder="Please enter GST NO"
        inputProps={{
          onChange: handleGstChange,
          onBlur: handleBlur,
          name: "gstno",
        }}
        errorText={touched.gstno && errors.gstno}
        value={values.gstno}
      />
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          disabled={isPHONEVerified && isGSTVerified ? false : true}
          type="submit"
          variant="contained"
          sx={{
            mt: 1,
            mb: 1,
            width: { xs: "30%", sm: "25%", md: "20%", lg: "20%", xl: "20%" },
            padding: "8px",
            borderBox: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
            },
            color: "black",
            fontWeight: "700",
            fontSize: "13px",
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
}

export default RegisterStep1;
