import * as React from "react";
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
import { LoginWithOTPSchema } from "../../utils/validation.js";
import Card from "@mui/material/Card";
import { tokens } from "../../../src/theme.js";
import Header from "../../components/SellerHome/Header.js";
import Footer from "../../components/SellerHome/Footer.js";
import OtpForm from "./OtpForm.js";

function LoginWithOTP() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [isOTPVisible, setOTPVisible] = React.useState(false);
  const INIT_STATE = {
    mobileno: "",
  };

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: INIT_STATE,
      onSubmit: onSubmit,
      validationSchema: LoginWithOTPSchema,
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

    setOTPVisible(true);
    //   navigate({
    //     pathname: "/dashboard",
    //   });
  }

  const handleOTPSucess = (data) => {
    if (data?.isSuccess) {
      //   setOTPVisible(true);
      navigate({
        pathname: "/dashboard",
      });
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: colors.grey[100],
      }}
    >
      {!isOTPVisible ? (
        <>
          <Avatar sx={{ m: 1, mt: 3, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" mb={2}>
            LOGIN
          </Typography>
          <Box
            component="form"
            display="grid"
            gap="30px"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 0, minWidth: "100%", pl: 2, pr: 2, pb: 2, pt: 1 }}
          >
            <Element
              eletype={inputType.number}
              label="Mobile Number"
              placeholder="Please enter Mobile Number"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "mobileno",
              }}
              errorText={touched.mobileno && errors.mobileno}
              value={values.mobileno}
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 1,
                  mb: 1,
                  width: "50%",
                  padding: "8px",
                  borderBox: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  color: "black",
                  fontWeight: "700",
                  fontSize: "13px",
                  textTransform: "capitalize",
                }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </>
      ) : (
        <Box sx={{ marginTop: "10px", padding: "10px" }}>
          <OtpForm isResendVisible={true} handleOTPSucess={handleOTPSucess} />{" "}
        </Box>
      )}

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "100%" }}>
          <Link href="/register" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginWithOTP;
