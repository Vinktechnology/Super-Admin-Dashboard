import React ,{useCallback}from "react";
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
import { RegisterStep2Schema } from "../../utils/validation.js";
import Paper from "@mui/material/Paper";
import { debounce } from "../../utils/global/global.js";

function RegisterStep2({handleNext,handleBack,activeStep}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const INIT_STATE = {
    username: "",
    password: "",
    displayname:""
  };

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: INIT_STATE,
      onSubmit: onSubmit,
      validationSchema: RegisterStep2Schema,
    });

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

  const fetchDataDisplayName = useCallback(
    debounce(async (searchQuery) => {
        if (searchQuery) {
            // const response = await fetch(`https://api.example.com/search?q=${searchQuery}`);
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1"); // replace with axio and redux-toolkit
            const data = await response.json();
        }
    }, 1000),
    [] // Dependencies for useCallback, empty means it only initializes once
);

const handleDisplayNameChange=(e)=>
  {
      handleChange({
          target:{
              name:e.currentTarget.name,
              value:e.target.value
          }
      })
      if(e.target.value !="")
          {
              fetchDataDisplayName(e.target.value);

          }
  }
 
  return (
    <Box
      component="form"
      display="grid"
      gap="30px"
      onSubmit={handleSubmit}
      noValidate
      sx={{ mt: 1, width: "40", minWidth: "100%", p: 2 }}
    >

<Element
        eletype={inputType.input}
        label="Display Name"
        placeholder="Please enter Display Name"
        inputProps={{
          onChange: handleDisplayNameChange,
          onBlur: handleBlur,
          name: "displayname",
        }}
        errorText={touched.displayname && errors.displayname}
        value={values.displayname}
      />
      <Element
        eletype={inputType.input}
        label="Full Name"
        placeholder="Please enter Full Name"
        inputProps={{
          onChange: handleChange,
          onBlur: handleBlur,
          name: "username",
        }}
        errorText={touched.username && errors.username}
        value={values.username}
      />

      <Element
        eletype={inputType.passwordinput}
        label="Please enter your initial password"
        placeholder="Please enter your initial password"
        inputProps={{
          onChange: handleChange,
          onBlur: handleBlur,
          name: "password",
        }}
        errorText={touched.password && errors.password}
        value={values.password}
      />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
      type="button"
      variant="contained"
      onClick={handleBack}
      sx={{
        mt: 1,
        mb: 1,
        width: {xs:"30%", sm:"25%", md:"20%", lg:"20%", xl:"20%"},
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
      back
    </Button>
    <Button
      type="submit"
      variant="contained"
      sx={{
        mt: 1,
        mb: 1,
        width: {xs:"30%", sm:"25%", md:"20%", lg:"20%", xl:"20%"},
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

export default RegisterStep2;
