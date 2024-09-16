import { Box, Button, Typography } from "@mui/material";
import React, { useCallback, useState, useEffect } from "react";
import OtpInput from "../../Form/CustomOtpInput.js";
import Element from "../../Form/Element.js";
import { inputType } from "../../utils/enum.js";
import { useFormik } from "formik";
import { debounce } from "../../utils/global/global.js";
import { sendOTPMobile } from "../../utils/global/user.global.js";

function OtpForm({ handleChange,otp, isOTPVisible, mobile}) {
    const [seconds, setSeconds] = useState(60);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [isResendVisible, setIsResendVisible] = useState(false);

  const INIT_STATE = {
    otp: "",
  };



  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsButtonEnabled(true);
    }
  }, [seconds]);



  const { values, touched, errors, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: INIT_STATE,
      // onSubmit: onSubmit,
    //   validationSchema: RegisterStep1Schema,
    });

    const resendMobileOtp =()=>
      {
        const da ={
          mobile:mobile ,
          verificationFor: 'login'
        }
        sendOTPMobile(da)
        .then((result) => {
          setSeconds(60);
          setIsButtonEnabled(false);
        })
        .catch((e) => {
          console.log("error",e)
           
        });
      }

    const handleChangeOtp=(e)=>
      {
        handleChange({
          target: {
            name: otp,
            value: e.target.value,
          },
        });
      }

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

    // navigate({
    //   pathname: "/dashboard",
    // });
  }
  return (
    <Box>
      <Element
        eletype={inputType.otpinput}
        label="OTP"
        placeholder="Enter OTP sent to your mobile number"
        inputProps={{
          onChange: handleChangeOtp,
          onBlur: handleBlur,
          name: "otp",
        }}
        errorText={touched.otp && errors.otp}
        value={values.otp}
      />

{isOTPVisible && (
        <Typography sx={{ marginTop: "20px", marginBottom: "20Ppx" }}>
          Didn't receive OTP?{" "}
          <Button disabled={!isButtonEnabled} onClick={resendMobileOtp} style={{ fontSize: "14px", color: "rgb(2, 124, 213)" }}>
            {isButtonEnabled?" Resend OTP" :   `Resend OTP in  ${seconds}`}
          </Button>
        </Typography>
      )}
    </Box>
  );
}

export default OtpForm;
