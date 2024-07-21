import { Box, Button, Typography } from "@mui/material";
import React, { useCallback, useState, useEffect } from "react";
import OtpInput from "../../Form/CustomOtpInput.js";
import Element from "../../Form/Element.js";
import { inputType } from "../../utils/enum.js";
import { useFormik } from "formik";
import { debounce } from "../../utils/global/global.js";

function OtpForm({isResendVisible, handleOTPSucess}) {
    const [seconds, setSeconds] = useState(60);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

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

  const handleResendOtp = () => {
    setSeconds(60);
    setIsButtonEnabled(false);
  };

  const { values, touched, errors, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: INIT_STATE,
      onSubmit: onSubmit,
    //   validationSchema: RegisterStep1Schema,
    });

     // Debounced function
     const fetchData = useCallback(
        debounce(async (searchQuery) => {
            if (searchQuery) {
                // const response = await fetch(`https://api.example.com/search?q=${searchQuery}`);
                const response = await fetch("https://jsonplaceholder.typicode.com/todos/1"); // replace with axio and redux-toolkit
                const data = await response.json();
                     
                handleOTPSucess({data, isSuccess:true})
            }
        }, 500),
        [] // Dependencies for useCallback, empty means it only initializes once
    );

    const handleChange = event => {
              
        if(event.target.value.length===6)
         {   
                 
            fetchData("sdf")
        }
        
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
  console.log("values",values)
  return (
    <Box>
      <Element
        eletype={inputType.otpinput}
        label="OTP"
        placeholder="Enter OTP sent to your mobile number"
        inputProps={{
          onChange: handleChange,
          onBlur: handleBlur,
          name: "otp",
        }}
        errorText={touched.otp && errors.otp}
        value={values.otp}
      />

{isResendVisible && (
        <Typography sx={{ marginTop: "20px", marginBottom: "20Ppx" }}>
          Didn't receive OTP?{" "}
          <Button disabled={!isButtonEnabled} onClick={handleResendOtp} style={{ fontSize: "14px", color: "rgb(2, 124, 213)" }}>
            {isButtonEnabled?" Resend OTP" :   `Resend OTP in  ${seconds}`}
          </Button>
        </Typography>
      )}
    </Box>
  );
}

export default OtpForm;
