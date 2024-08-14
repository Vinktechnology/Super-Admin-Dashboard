import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { FilledInput } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { formErrorStyle } from '../utils/constant';

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


function getStyles(name, selectedData, theme) {
  return {
    fontWeight:
      selectedData.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function MuiMultiSelect({
    label,
    errorText,
    options,
    inputProps,
    value,
    styles,
    onChange,
    name}) {

    const theme = useTheme();
    const [selectedData, setSelectedData] = React.useState([]);
  
    const handleChange = (event) => {
      setSelectedData(event.target.value);
      onChange({
        target: {
          name,
          value: event.target.value,
        },
      });
    };


    return (
        <Box  sx={styles}>
        <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          fullWidth
          value={value}
          onChange={handleChange}
          input={<FilledInput id="select-multiple-chip" label={label} />}
          renderValue={(selected) => 
            (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((data) => (
              <Chip key={data?.id} label={data?.label} />
            ))}
          </Box>
        )
           }
          MenuProps={MenuProps}
        >
          {options.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name?.value, selectedData, theme)}
            >
              {name?.label}
            </MenuItem>
          ))}
        </Select>

      {errorText && <span style={formErrorStyle}>{errorText}</span>}
      </Box>
    )
}

export default MuiMultiSelect
