import React,{useState} from 'react'
import { Box, useTheme } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import { Link } from '@mui/material';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../src/theme";

function CustMenu({name,options,icon,...props}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    return (
      <Box>
      {/* <Tooltip title="Open settings"> */}
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {icon}
              </IconButton>
            {/* </Tooltip> */}
      <Menu
      anchorEl={anchorElUser}
      keepMounted
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
      sx={{}}
    >
      {options.map((setting) => (
          <Link style={{textDecoration:"none"}} to={setting.label} >  
        <MenuItem onClick={handleCloseUserMenu }>
          <Typography   color={colors.grey[100]}>{setting.name} </Typography>
        </MenuItem>
        </Link>
      ))}
    </Menu>
    </Box>
    )
}

export default CustMenu
