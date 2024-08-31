import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { FilledInput } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { formErrorStyle } from "../utils/constant";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



function MuiMultiSelect({
  label,
  errorText,
  options,
  inputProps,
  styles,
  onChange,
  name,
  value
}) {
  const theme = useTheme();

   
  
  function getStyles(value, selectedData, theme) {

    return {
      fontWeight:
        selectedData.some((item) => item.value === value)
          ? theme.typography.fontWeightMedium
          : theme.typography.fontWeightRegular,
    };
  }
  // const [selectedData, setSelectedData] = React.useState([]);

  const handleChange = (event) => {
// setSelectedData(value);

 

    onChange({
      target: {
        name,
        value:event.target.value,
      },
    });
  };

 const fncRenderValue=(selected)=>
  {
    let matchingOptions = options.filter(opt => selected.includes(opt.value));
    return  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>  
          {
         matchingOptions.map((data) => (
          <Chip key={data.value} label={data.label} />
        ))
        }
      </Box>
  }

  return (
    <Box sx={styles}>
      <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        fullWidth
        value={value}
        onChange={handleChange}
        input={<FilledInput id="select-multiple-chip" label={label} />}
        renderValue={(selected) => fncRenderValue(selected)}
        MenuProps={MenuProps}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            style={getStyles(option.value, value, theme)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>

      {errorText && <span style={formErrorStyle}>{errorText}</span>}
    </Box>
  );
}

export default MuiMultiSelect;
