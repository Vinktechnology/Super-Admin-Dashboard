import React, { useState } from 'react';
import { Switch, Box } from '@mui/material';
import { styled } from '@mui/system';

const CustomSwitchStyled = styled(Switch)(({ theme }) => ({
    width: 100,
    height: 50,
    padding: 10,
    '& .MuiSwitch-switchBase': {
      padding: 10,
      '&.Mui-checked': {
        transform: 'translateX(48px)', // Move thumb to the right when checked
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: '#FF0000', // Red when checked
          opacity: 1,
          border: 0,
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#fff',
      width: 24,
      height: 24,
      padding:3,
      margin:3
    },
    '& .MuiSwitch-track': {
      borderRadius: 25,
      backgroundColor: '#2ECA45', // Green when unchecked
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 10px',
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: 14,
        color: theme.palette.common.white,
        zIndex: 1, // Ensure text is above the thumb
      },
      '&:before': {
        content: '"No"',
        left: 10,
      },
      '&:after': {
        content: '"Yes"',
        right: 10,
      },
    },
  }));

function CustomizedSwitches({onChangeToggle,checkedStatus}) {
    const [checked, setChecked] = useState(checkedStatus);

    const handleChange = (event) => {
      setChecked(event.target.checked);
      onChangeToggle(!event.target.checked);
    };
  
  
  return (
    <Box display="flex" alignItems="center">
    <CustomSwitchStyled checked={checked} onChange={handleChange} />
  </Box>
  );
}

export default CustomizedSwitches;
