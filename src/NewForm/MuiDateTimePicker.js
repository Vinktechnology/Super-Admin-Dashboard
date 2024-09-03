import * as React from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import { formErrorStyle } from "../utils/constant";
import dayjs from "dayjs";

export default function MuiDateTimePicker({
  label,
  errorText,
  inputProps,
  value,
  styles,
  icon,
  placeholder,
  name,
  onChange,
}) {
  const handleChange = (event) => {
    console.log("event", event)
    onChange({
      target: {
        name,
        value:event,
      },
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        sx={styles}
        label={label}
        ampm={false} 
        value={value==""?null:value}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField fullWidth variant="filled" {...params} />
        )}
      />
      {errorText && <span style={formErrorStyle}>{errorText}</span>}
    </LocalizationProvider>
  );
}
