import {
    Box,
    Button,
    Grid,
    Typography,
    useTheme,
    Dialog,
    DialogContent,
    IconButton,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import Slider from "react-slick";
  import { tokens } from "../../theme";

  import AppBar from '@mui/material/AppBar';
  import Toolbar from '@mui/material/Toolbar';
  import CloseIcon from '@mui/icons-material/Close';
  import Slide from '@mui/material/Slide';
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function SingleImageView({imageUrl ,handleCloseSingleImage, openSingle, title}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Dialog
        fullScreen
        open={openSingle}
        onClose={handleCloseSingleImage}
        TransitionComponent={Transition}
        sx={{ background: "rgba(0, 0, 0, 0.9)" }}
      >
        <AppBar sx={{ position: 'relative', overflow:"hidden" }}>
          <Toolbar sx={{display:"flex", justifyContent:"space-between" , overflow:"hidden"}}>
            <Typography>
                {title}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseSingleImage}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
                  <Box >
                         <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                overflow:"hidden",
                                padding:"20px"
                            }}
                        >
                            <img
                                src={imageUrl}
                                style={{ width: "100%", maxHeight: "100%" }}
                                alt={`Sample}`}
                            />
                        </Box>
                  </Box>
               
      </Dialog>
    )
}

export default SingleImageView
