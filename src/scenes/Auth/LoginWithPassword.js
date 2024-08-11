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
import { LoginSchema } from "../../utils/validation.js";
import Card from "@mui/material/Card";
import { tokens } from "../../../src/theme.js";
import Header from "../../components/SellerHome/Header.js";
import Footer from "../../components/SellerHome/Footer.js";
import { useDispatch } from "react-redux";
import { loginByEmailAsyncThunk } from "../../store/slices/auth/auth.slice.js";


function LoginWithPassword() {
    const theme = useTheme();
    const dispatch= useDispatch();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();
    const INIT_STATE = {
      username: "",
      password: "",
    };
  
    const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
      useFormik({
        enableReinitialize: true,
        initialValues: INIT_STATE,
        onSubmit: onSubmit,
        validationSchema: LoginSchema,
      });
  
    async function onSubmit(data) {
      dispatch(
        loginByEmailAsyncThunk({
          ...data,authType: "password-based",
        })
      )
        .unwrap()
        .then((da) => {
          console.log("da",da);
          navigate({
            pathname: "/dashboard",
          });
        });
    }

    
    return (
        <Box
        sx={{
        //   marginTop: 15,
            width:"100%",
            minWidth:"100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        //   boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          color: colors.grey[100],
        //   borderRadius: 2,
        }}
      >
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
          sx={{ mt: 0, minWidth: "100%", pl: 2, pr:2, pb:2, pt:1 }}
        >
          <Element
            eletype={inputType.input}
            label="Email Id"
            placeholder="Please enter email"
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
            label="Please enter your password"
            placeholder="Please enter your password"
            inputProps={{
              onChange: handleChange,
              onBlur: handleBlur,
              name: "password",
            }}
            errorText={touched.password && errors.password}
            value={values.password}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
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
                textTransform:"capitalize"
              }}
            >
              Login
            </Button>
          </Box>

          <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <Box>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Box>
            {/* <Box item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Box> */}
          </Box>
        </Box>
      </Box>
    )
}

export default LoginWithPassword
