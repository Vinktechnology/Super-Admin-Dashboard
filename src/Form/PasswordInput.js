import React, { useEffect } from "react";
import { useStyles } from "./Form.theme";
import { Box, TextField } from "@mui/material";
import { formErrorStyle } from "../utils/constant";

const PasswordInput = ({
  label,
  errorText,
  inputProps,
  value,
  styles,
  icon,
  placeholder,
  param,
}) => {
  const classes = useStyles;

  return (
    <Box>
      <TextField
      fullWidth
      variant="filled"
      label={label}
        {...inputProps}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        type="password"
      />
      {errorText && <span style={formErrorStyle}>{errorText}</span>}

    </Box>
  );
};

export default PasswordInput;
