import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";

function Fade({ options }) {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         initialSlide: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
  };
  return (
    <Paper container elevation={6} sx={{boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;", padding:{xs:".2rem" ,sm:".5rem", md:"1rem", lg:"1rem"}, borderRadius:{xs:"3%" ,sm:"3%", md:"10%", lg:"10%"}}}>
      <Slider {...settings}>
        {options?.map((item,index) => (
            <Box>
          <Box  sx={{display:"flex", justifyContent:"center", textAlign:"center", flexDirection:{xs:"column", sm:"column", md:"row", lg:"row"}}}>
            <Box sx={{display:"flex", justifyContent:"center", padding:"20px"}}>
            <img
              style={{ height: "300px", width: "300px", borderRadius: "100%" }}
              src={item?.imageUrl}
            />
            </Box>
          </Box>
          <Box sx={{margin:"20px"}}>
                <Typography variant="h2" sx={{margin:"5px", fontWeight:"900"}}>{item.name}</Typography>
                <Typography variant="h4" sx={{margin:"1rem", fontWeight:"600"}}>{item.designation+" "+ item.company}</Typography>
                <Typography variant="h6" sx={{margin:"5px", fontWeight:"500"}}>{item.subheading}</Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Paper>
  );
}

export default Fade;
