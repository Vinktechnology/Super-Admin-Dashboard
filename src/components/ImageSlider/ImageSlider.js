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
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


function ImageSlider({sampleImages ,handleClose, open, title}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
      function ArrowLeft(props){
        const {  onClick } = props;
        return(
            <IconButton
            onClick={onClick}
            sx={{
                position: "absolute",
                top: "50%",
                borderRadius:"10%",
                left: "10px",
                zIndex: 1,
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                },
            }}
        >
            {"<"}
        </IconButton>
        )
      };

      function ArrowRight(props ){
        const {  onClick } = props;
        return( <IconButton
            onClick={onClick}
            sx={{
                position: "absolute",
                top: "50%",
                right: "10px",
                borderRadius:"10%",
                zIndex: 1,
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                },
            }}
        >
            {">"}
        </IconButton>
        )
    }
   
      const settings = {
        initialSlide: 0,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />
      };

   
      
  return (

    <Dialog
    fullScreen
    open={open}
    onClose={handleClose}
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
          onClick={handleClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
    </AppBar>

      <Slider {...settings}>
            {sampleImages?.map((image, index) => (
              <Box key={index}>
                     <Box
                        key={index}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "80vh",
                            overflow:"hidden",
                            padding:"20px"
                        }}
                    >
                        <img
                            src={image}
                            style={{ width: "100%", maxHeight: "100%" }}
                            alt={`Sample ${index}`}
                        />
                    </Box>
              </Box>
            ))}
          </Slider>
  </Dialog>
  );
}

export default ImageSlider;
