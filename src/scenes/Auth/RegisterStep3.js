import React, { useCallback, useState } from "react";
import Header from "../../components/SellerHome/Header";
import Footer from "../../components/SellerHome/Footer";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Box, Divider, useTheme } from "@mui/material";
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
import { RegisterStep3Schema } from "../../utils/validation.js";
import Paper from "@mui/material/Paper";
import { debounce } from "../../utils/global/global.js";

function RegisterStep3({ handleNext, handleBack, activeStep }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const [cityOptions, setCityOptions] = useState([]);

  const INIT_STATE = {
    bankaccount: "",
    ifsccode: "",
    address1: "",
    address2: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  };

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: INIT_STATE,
      onSubmit: onSubmit,
      validationSchema: RegisterStep3Schema,
    });

  async function onSubmit(data) {
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

    navigate({
      pathname: "/dashboard",
    });
  }

  const fetchDataPincode = useCallback(
    debounce(async (searchQuery) => {
      if (searchQuery) {
        const response = await fetch(
          `http://www.postalpincode.in/api/pincode/${searchQuery}`
        ); // replace with axio and redux-toolkit
        const data = await response.json();

        if (data?.Status !== "Error") {
          const options = data?.PostOffice.map((item) => {
            return {
              label: item?.Name,
              value: item?.Name?.split(" ").join("_"),
            };
          });
          setCityOptions(options);
          handleChange({
            target: {
              name: "state",
              value: data?.PostOffice[0]?.State,
            },
          });

          handleChange({
            target: {
              name: "country",
              value: data?.PostOffice[0]?.Country,
            },
          });
        } else {
          handleChange({
            target: {
              name: "state",
              value: "",
            },
          });

          handleChange({
            target: {
              name: "country",
              value: "",
            },
          });
          setCityOptions([]);
        }
      }
    }, 1000),
    []
  );

  const handlePincodeChange = (e) => {
    handleChange({
      target: {
        name: e.currentTarget.name,
        value: e.target.value,
      },
    });
    if (e.target.value != "") {
      if (e?.target?.value?.toString().length === 6) {
        fetchDataPincode(e.target.value);
      } else {
        handleChange({
          target: {
            name: "state",
            value: "",
          },
        });

        handleChange({
          target: {
            name: "country",
            value: "",
          },
        });
        setCityOptions([]);
      }
    }
  };

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
        eletype={inputType.number}
        label="Bank Account Number"
        placeholder="Please enter Bank Account Number"
        inputProps={{
          onChange: handleChange,
          onBlur: handleBlur,
          name: "bankaccount",
        }}
        errorText={touched.bankaccount && errors.bankaccount}
        value={values.bankaccount}
      />

      <Element
        eletype={inputType.input}
        label="IFSC Code"
        placeholder="Please enter IFSC code"
        inputProps={{
          onChange: handleChange,
          onBlur: handleBlur,
          name: "ifsccode",
        }}
        errorText={touched.ifsccode && errors.ifsccode}
        value={values.ifsccode}
      />

      <Divider sx={{ margin: "1rem" }} />

      <Element
        eletype={inputType.input}
        label="Address Line 1"
        placeholder="Please enter Line1 Address"
        inputProps={{
          onChange: handleChange,
          onBlur: handleBlur,
          name: "address1",
        }}
        errorText={touched.address1 && errors.address1}
        value={values.address1}
      />

      <Element
        eletype={inputType.input}
        label="Address Line 2"
        placeholder="Please enter Line2 Address"
        inputProps={{
          onChange: handleChange,
          onBlur: handleBlur,
          name: "address2",
        }}
        errorText={touched.address2 && errors.address2}
        value={values.address2}
      />
      <Element
        eletype={inputType.number}
        label="Pin Code"
        placeholder="Please enter pincode"
        inputProps={{
          onChange: handlePincodeChange,
          onBlur: handleBlur,
          name: "pincode",
        }}
        errorText={touched.pincode && errors.pincode}
        value={values.pincode}
      />

      <Element
        eletype={inputType.select}
        label="City"
        placeholder="Please enter City"
        inputProps={{
          onChange: handleChange,
          onBlur: handleBlur,
          name: "city",
        }}
        options={cityOptions}
        errorText={touched.city && errors.city}
        value={values.city}
      />

      <Element
        eletype={inputType.input}
        label="State"
        placeholder="Please enter State"
        IsDisable={true}
        inputProps={{
          onChange: handleChange,
          onBlur: handleBlur,
          name: "state",
        }}
        errorText={touched.state && errors.state}
        value={values.state}
      />

      <Element
        eletype={inputType.input}
        label="Country"
        placeholder="Please enter country"
        IsDisable={true}
        inputProps={{
          onChange: handleChange,
          onBlur: handleBlur,
          name: "country",
        }}
        errorText={touched.country && errors.country}
        value={values.country}
      />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          type="button"
          variant="contained"
          onClick={handleBack}
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
          back
        </Button>
        <Button
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
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default RegisterStep3;
