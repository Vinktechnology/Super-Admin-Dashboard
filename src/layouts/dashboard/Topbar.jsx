import { Badge, Box, IconButton, useTheme } from "@mui/material";
import { useContext , useState} from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import CustMenu from "../../NewForm/CustMenu";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationDrawer from "./NotificationDrawer";


const Topbar = ({closeSidebar}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleDrawerChange =()=>
    {
      setIsDrawerOpen(!isDrawerOpen)
    }

  const options =[{
    name:"Profile",
    label:"profile",
    url:"dashboard/profile"
  },
  {
    name:"Logout",
    label:"logout"
  },
]

  return (
    <>
     <NotificationDrawer isDrawerOpen={isDrawerOpen}  handleDrawerChange={handleDrawerChange}/>
 
    <Box display="flex" sx={{justifyContent:"space-between"}} p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        borderRadius="3px"
        justifyContent="flex-start"
      >
        <MenuIcon style={{background:"none"}} onClick={closeSidebar} /> 
        {/* <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton> */}
      </Box>

      {/* ICONS */}
      {/* */}
      <Box display="flex" p="4" gap={2}>
        
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon sx={{ fontSize: 25 }}  onClick={colorMode.toggleColorMode}/>
          ) : (
            <LightModeOutlinedIcon sx={{ fontSize: 25 }} onClick={colorMode.toggleColorMode} />
          )}
        {/* </IconButton> */}
        <Badge badgeContent={4} color="primary" mb={-8}>
        {/* <IconButton> */}
          <NotificationsOutlinedIcon onClick={handleDrawerChange} sx={{ fontSize: 25 }} />
        {/* </IconButton> */}
        </Badge>
       
        {/* <IconButton>
          <SettingsOutlinedIcon />
        </IconButton> */}
        {/* <IconButton> */}
          <CustMenu icon={ <PersonOutlinedIcon sx={{ fontSize: 25 }}  />} name="Profile" options={options} />
        {/* </IconButton> */}
      </Box>
    </Box>
    </>
  );
};

export default Topbar;
