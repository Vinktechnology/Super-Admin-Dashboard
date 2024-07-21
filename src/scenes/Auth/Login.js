import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import Container from "@mui/material/Container";
import Header from "../../components/SellerHome/Header.js";
import Footer from "../../components/SellerHome/Footer.js";
import LoginWithPassword from "./LoginWithPassword.js";
import LoginWithOTP from "./LoginWithOTP.js";
import { tokens } from "../../../src/theme.js";

export default function Login() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [signInWithOTP, setSignInWithOTP] = useState(false);
  const handleChangeLogin = () => {
    setSignInWithOTP(!signInWithOTP);
  };

  const Login_With_Password =<Box
  sx={{
    marginTop: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
    color: colors.grey[100],
    borderRadius: 2,
  }}
>
  <LoginWithPassword />

  <Divider>Or connect with</Divider>

  <Box display="flex" justifyContent="center">
    <Button
      variant="contained"
      sx={{
        mt: 1,
        mb: 3,
        width: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
        },
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
      onClick={handleChangeLogin}
    >
      Login with Phone Number
    </Button>
  </Box>
</Box>;

  const Login_With_OTP = <Box
  sx={{
    marginTop: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
    color: colors.grey[100],
    borderRadius: 2,
  }}
>
  <LoginWithOTP /> <Divider>Or connect with</Divider>
  <Box display="flex" justifyContent="center">
    <Button
      variant="contained"
      sx={{
        mt: 1,
        mb: 3,
        width: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
        },
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
      onClick={handleChangeLogin}
    >
      Login with Password
    </Button>
  </Box>
</Box>;

  return (
    <Box>
      <Header />
      <Container component="main" maxWidth="xs">
        {signInWithOTP ? 
          Login_With_OTP
         :Login_With_Password}
      </Container>
      <Box
        sx={{
          marginTop: { xs: "25%", sm: "20%", md: "20%", lg: "10%", xl: "10%" },
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
}
