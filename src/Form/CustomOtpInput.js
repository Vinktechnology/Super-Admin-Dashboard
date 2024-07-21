import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
function CustomOtpInput({
  label,
  errorText,
  options,
  inputProps,
  // value,
  styles,
  onChange,
  placeholder,
  name,
}) {
  const [otp, setOtp] = useState("");

  const handleOtp = (e) => {
    setOtp(e);
    onChange({
      target: {
        name,
        value: e,
      },
    });
  };
  return (
    <Box sx={{ background: "#F3F3F3", padding: "10%" }}>
      <Typography sx={{ marginTop: "20px", marginBottom: "20px" }}>
        *{placeholder}
      </Typography>
      <OtpInput
        value={otp}
        onChange={handleOtp}
        numInputs={6}
        separator={<span style={{ width: "8px" }}></span>}
        isInputNum={true}
        shouldAutoFocus={true}
        renderInput={(props) => <input {...props} />}
        inputStyle={{
          border: "1px solid transparent",
          borderRadius: "8px",
          width: "25%",
          height: "40px",
          fontSize: "15px",
          color: "#000",
          fontWeight: "400",
          caretColor: "blue",
          margin: "5px",
        }}
        focusStyle={{
          border: "1px solid #CFD3DB",
          outline: "none",
        }}
      />
    </Box>
  );
}

export default CustomOtpInput;
