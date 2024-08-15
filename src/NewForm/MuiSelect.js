import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { formErrorStyle } from "../utils/constant";
import { Box } from "@mui/material";

function MuiSelect({
  label,
  errorText,
  options,
  inputProps,
  value,
  styles,
  onChange,
  name,
}) {

  const handleChange = (event) => {
    onChange({
      target: {
        name,
        value: event.target.value,
      },
    });
  };

  console.log("value select mui",value)
  return (
      <FormControl variant="filled" sx={styles}>
        <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={value}
          onChange={handleChange}
        >
          {options?.map((item) => (
            <MenuItem value={item?.value}>{item?.label}</MenuItem>
          ))}
        </Select>
        {errorText && <span style={formErrorStyle}>{errorText}</span>}
      </FormControl>
  );
}

export default MuiSelect;
