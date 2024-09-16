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
import { debounce } from "../../utils/global/global.js";
import { sendOTPMobile, verifyOTPMobile } from "../../utils/global/user.global.js";
import { loginByOTPAsyncThunk } from "../../store/slices/auth/auth.slice.js";
import { useDispatch } from "react-redux";

function LoginWithOTP() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [isOTPVisible, setOTPVisible] = React.useState(false);
  const dispatch = useDispatch();
  
  const INIT_STATE = {
    mobile: "",
    otp:"",
  };

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: INIT_STATE,
      onSubmit: onSubmit,
      validationSchema: LoginWithOTPSchema,
    });


     // Debounced function
     const fetchData = React.useCallback(
      debounce(async (searchQuery) => {
        if (searchQuery) {
            const da ={
              mobile: searchQuery,
              verificationFor: 'login'
            }
            sendOTPMobile(da)
            .then((result) => {
              setOTPVisible(true)
            })
            .catch((e) => {
              console.log("error",e)
               
            });
        }
    }, 500),
      [] // Dependencies for useCallback, empty means it only initializes once
  );

  const handleChangeMobile = event => {

    handleChange({
      target: {
        name: event.currentTarget.name,
        value: event.target.value,
      },
    });
            
      if(event.target.value.length===10)
       {   
               
          fetchData(event.target.value)
      }
      
    }
  async function onSubmit(da) {
    console.log("data",da)
    const {mobile,...rest} = da;
    dispatch(
      loginByOTPAsyncThunk({
        mobile ,mobileOTP:da?.otp,authType: "otp-based"
      })
    )
      .unwrap()
      .then((da) => {
        navigate({
          pathname: "/dashboard",
        });
      })
      .catch((error)=>
      {
        console.log(error)
      })
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
                onChange: handleChangeMobile,
                onBlur: handleBlur,
                name: "mobile",
              }}
              errorText={touched.mobile && errors.mobile}
              value={values.mobile}
            />
                 {isOTPVisible && (<>
                   <Box>
                   <OtpForm otp="otp" mobile={values.mobile} handleChange={handleChange} isOTPVisible={isOTPVisible} />{" "}
                 </Box>
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
            </Box></>)}
          </Box>
       
     
     
        </>
    </Box>
  );
}

export default LoginWithOTP;
