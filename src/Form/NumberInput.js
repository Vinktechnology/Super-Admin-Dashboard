import React, { useEffect } from "react";
import { Box, TextField, Container } from "@mui/material";
import { formErrorStyle } from "../utils/constant";

const NumberInput = ({
  label,
  errorText,
  inputProps,
  value,
  styles,
  icon,
  placeholder,
  param,
}) => {
       
  return (
    <Box sx={styles}>
      <TextField
        fullWidth
        variant="filled"
        label={label}
        {...inputProps}
        value={value}
        placeholder={placeholder}
        sx={styles}
        type="number"
      />

      {errorText && <span style={formErrorStyle}>{errorText}</span>}
    </Box>
  );
};

export default NumberInput;
