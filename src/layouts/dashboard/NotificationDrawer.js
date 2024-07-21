import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Typography } from "@mui/material";

export default function NotificationDrawer({
  isDrawerOpen,
  handleDrawerChange,
}) {
  const DrawerList = (
    <Box sx={{ width:"100%"}} role="presentation" onClick={handleDrawerChange}>
        <Box sx={{display:"flex", justifyContent:"flex-start"}}>
            <Box>
            <Typography variant="h3" sx={{padding:".8rem", color: "rgb(2, 124, 213)", fontWeight:"600"}}> Notifications</Typography> 
            </Box>
        </Box>
        <Divider />
      <List>
        {["Inbox, all message of mobile are there.", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            width: {xs:"70%", sm:"40%", md:"30%", lg:"30%", xl:"30%"} , // Set your desired width here
          },
        }}
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerChange}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
