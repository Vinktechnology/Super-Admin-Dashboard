import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

// Updated array with objects containing name, label, id, and value
const names = [
  { name: 'Oliver Hansen', label: 'Oliver Hansen', id: 1, value: 'oliver' },
  { name: 'Van Henry', label: 'Van Henry', id: 2, value: 'van' },
  { name: 'April Tucker', label: 'April Tucker', id: 3, value: 'april' },
  { name: 'Ralph Hubbard', label: 'Ralph Hubbard', id: 4, value: 'ralph' },
  { name: 'Omar Alexander', label: 'Omar Alexander', id: 5, value: 'omar' },
  { name: 'Carlos Abbott', label: 'Carlos Abbott', id: 6, value: 'carlos' },
  { name: 'Miriam Wagner', label: 'Miriam Wagner', id: 7, value: 'miriam' },
  { name: 'Bradley Wilkerson', label: 'Bradley Wilkerson', id: 8, value: 'bradley' },
  { name: 'Virginia Andrews', label: 'Virginia Andrews', id: 9, value: 'virginia' },
  { name: 'Kelly Snyder', label: 'Kelly Snyder', id: 10, value: 'kelly' },
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name.value) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState(['oliver', 'van']); // use value instead of name

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Placeholder</em>;
            }
            return names
              .filter(name => selected.includes(name.value))
              .map(name => name.label)
              .join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name.id}
              value={name.value}
              style={getStyles(name, names, theme)}
            >
              {name.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
