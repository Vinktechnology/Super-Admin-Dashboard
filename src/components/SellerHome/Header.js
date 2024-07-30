import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Card } from "@mui/material";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";

const AppBarComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };


  const toolTipsOptions = [
    {
      name: "Sell Online",
      id: 1,
      nameoptions: [
        {
          optionname: "Create Account",
          optionurl: "#",
          id: 1,
        },
        {
          optionname: "List Products",
          optionurl: "#",
          id: 2,
        },
        {
          optionname: "Storage & Shipping",
          optionurl: "#",
          id: 3,
        },
        {
          optionname: "Recieve Payments",
          optionurl: "#",
          id: 4,
        },
      ],
    },
    {
      name: "Fees and Commission",
      id: 2,
      nameoptions: [
        {
          optionname: "Create Account",
          optionurl: "#",
          id: 1,
        },
        {
          optionname: "List Products",
          optionurl: "#",
          id: 2,
        },
        {
          optionname: "Storage & Shipping",
          optionurl: "#",
          id: 3,
        },
        {
          optionname: "Recieve Payments",
          optionurl: "#",
          id: 4,
        },
      ],
    },
    {
      name: "Grow",
      id: 3,
      nameoptions: [
        {
          optionname: "Create Account",
          optionurl: "#",
          id: 1,
        },
        {
          optionname: "List Products",
          optionurl: "#",
          id: 2,
        },
        {
          optionname: "Storage & Shipping",
          optionurl: "#",
          id: 3,
        },
        {
          optionname: "Recieve Payments",
          optionurl: "#",
          id: 4,
        },
      ],
    },
    {
      name: "Learn",
      id: 4,
      nameoptions: [
        {
          optionname: "Create Account",
          optionurl: "#",
          id: 1,
        },
        {
          optionname: "List Products",
          optionurl: "#",
          id: 2,
        },
        {
          optionname: "Storage & Shipping",
          optionurl: "#",
          id: 3,
        },
        {
          optionname: "Recieve Payments",
          optionurl: "#",
          id: 4,
        },
      ],
    },
  ];

  const renderTooltip = (menu, options) => {
    return (
      <Tooltip
        componentsProps={{
          tooltip: {
            sx: {
              width: "500px",
              minWidth: "200px",
              maxWidth: "200px",
              boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;",
              bgcolor: "common.white",
              "& .MuiTooltip-arrow": {
                color: "common.black",
              },
            },
          },
        }}
        title={options.map((item) => (
          <MenuItem
            sx={{ textAlign: "center" }}
            key={item.id}
            onClick={handleMenuClose}
          >
            {item.optionname}
          </MenuItem>
        ))}
        interactive
      >
        <Button
          disableElevation
          disableRipple
          sx={{
            fontWeight: "600",
            fontSize: "16px",
            padding: "12px",
            textTransform: "none",
            ml: 1,
            "&.MuiButtonBase-root:hover": {
              bgcolor: "transparent",
            },
          }}
          onMouseEnter={(e) => handleMenuOpen(e, menu)}
          onMouseLeave={handleMenuClose}
        >
          {menu}
        </Button>
      </Tooltip>
    );
  };

  const drawer = (
    <Box onKeyDown={handleDrawerToggle} sx={{ width: 250 }}>
      {toolTipsOptions.map((item, index) => (
        <Accordion elevation={0} square key={item.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ListItemText>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "16px",
                  textTransform: "none",
                }}
              >
                {item.name}
              </Typography>
            </ListItemText>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {item?.nameoptions?.map((items) => (
                <ListItem onClick={handleDrawerToggle} key={items?.id}>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      textTransform: "none",
                    }}
                  >
                    {items.optionname}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "white" }}>
        <Toolbar
          sx={{
            boxShadow:
              "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;",
            justifyContent: "space-between",
          }}
        >
          {isMobile ? (
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Logo />
          )}
          <Drawer
            anchor={isMobile ? "left" : "top"}
            open={drawerOpen}
            onClose={handleDrawerToggle}
          >
            {drawer}
          </Drawer>
          {isMobile && <Logo />}
          <Box>
            {!isMobile &&
              toolTipsOptions?.map((item, index) =>
                renderTooltip(item?.name, item.nameoptions)
              )}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              disableElevation
              onClick={() => navigate("/register")}
              disableRipple
              sx={{
                fontWeight: "600",
                fontSize: "16px",
                textTransform: "none",
                padding: { xs: "5px", sm: "8px", md: "12", lg: "12" },
                textTransform: "none",
                ml: 1,
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "transparent",
                },
              }}
            >
              Register
            </Button>
            <Button
              onClick={() => navigate("/login")}
              disableElevation
              disableRipple
              sx={{
                fontWeight: "600",
                fontSize: "16px",
                textTransform: "none",
                padding: { xs: "5px", sm: "8px", md: "12", lg: "12" },
                textTransform: "none",
                ml: 1,
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "transparent",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarComponent;
