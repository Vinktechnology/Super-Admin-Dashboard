import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import CustSleekSlider from "../../NewForm/CustSleekSlider";


const options=[{
    imageUrl:"../../assets/testimonial1.jpeg",
    name:"Sundar Pichai",
    company:"Google",
    heading:"Feedback",
    designation:"Director",
    subheading:"We were facing a shortage of experienced developers. EMB identified the right profiles and we we were able to onboard the candidates within a week."
},
{
    imageUrl:"../../assets/testimonial2.jpeg",
    name:"Satya Nadella",
    company:"Microsoft",
    heading:"Feedback",
    designation:"Director",
    subheading:"We were facing a shortage of experienced developers. EMB identified the right profiles and we we were able to onboard the candidates within a week."
},
{
    imageUrl:"../../assets/testimonial3.jpeg",
    name:"Vikrant Kaushik",
    company:"Vink Technolgoy",
    heading:"Feedback",
    designation:"Director",
    subheading:"We were facing a shortage of experienced developers. EMB identified the right profiles and we we were able to onboard the candidates within a week."
},
{
    imageUrl:"../../assets/testimonial4.jpeg",
    name:"Vinod Joshi",
    company:"Vink Technology",
    heading:"Feedback",
    designation:"Director",
    subheading:"We were facing a shortage of experienced developers. EMB identified the right profiles and we we were able to onboard the candidates within a week."
},
{
    imageUrl:"../../assets/testimonial5.jpeg",
    name:"Amit Patoliya",
    company:"Maruti Fabrics",
    heading:"Feedback",
    designation:"Director",
    subheading:"We were facing a shortage of experienced developers. EMB identified the right profiles and we we were able to onboard the candidates within a week."
}

]


function Testimonials() {
  return (
    <Box sx={{ padding: { xs: "1rem", md: "3rem" } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row", lg: "row" },
          justifyContent:"center"
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%", lg: "50%" },
            marginTop: {xs:"3.5rem", sm:"3.5rem", md:"0rem", lg:"0rem", xl:"0rem"},
            alignContent:"center",
            marginBottom:{xs: "1.4rem", sm: "1.5rem"}
          }}
        >
          <Typography
            variant="h1"
            style={{ 
                fontSize:{xs:"20px", sm:"20px", md:"50px", lg:"50px", xl:"50px"}, 
                 paddingTop: "25px", color: "rgb(53, 53, 53)" , fontWeight:"700"}}
          >
          <span style={{color:"rgb(2, 124, 213)"}}>  Sellers Success  </span> Story
          </Typography>
          <Typography
            variant="h4"
            style={{
                display:{xs:"none", md:"block", lg:"block", xl:"block"},
                fontSize:{xs:"20px", sm:"20px", md:"30px", lg:"30px", xl:"30px"}, 
                paddingTop: "25px", color: "rgb(53, 53, 53)", fontWeight:"500" }}
          >
            14 Lakh+ sellers trust Flipkart for their online business.
          </Typography>
        </Box>
        <Box
          sx={{
            // display: { xs: "none", md: "block", lg: "block", xl: "block" },
            width: { xs: "100%", md: "40%", lg: "40%", xl: "40%" } ,
            textAlign: "center",
          }}
        >
          <CustSleekSlider options={options}/>
        </Box>
      </Box>
    </Box>
  );
}

export default Testimonials;
