import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import HomeContactUs from "./HomeContactUs";


function FormInformation() {
    return (
        <Box sx={{ padding: { xs: "1rem", md: "3rem" } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row", lg: "row" },
            justifyContent:"space-between",
            alignItems:"center"
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%", lg: "50%" },
              marginTop: {xs:"3.5rem", sm:"3.5rem", md:"0rem", lg:"0rem", xl:"0rem"},
              alignContent:"flex-start",
              marginBottom:{xs: "1.4rem", sm: "1.5rem"}
            }}
          >
            <Typography
              variant="h1"
              style={{ 
                  fontSize:{xs:"20px", sm:"20px", md:"50px", lg:"50px", xl:"50px"}, 
                   paddingTop: "25px", color: "rgb(53, 53, 53)" , fontWeight:"700"}}
            >
            <span style={{color:"rgb(2, 124, 213)"}}>  We are happy to help you  </span> 🙂 
            </Typography>
            <Typography
              variant="h4"
              style={{
                  display:{xs:"none", md:"block", lg:"block", xl:"block"},
                  fontSize:{xs:"20px", sm:"20px", md:"30px", lg:"30px", xl:"30px"}, 
                  paddingTop: "25px", color: "rgb(53, 53, 53)", fontWeight:"500" }}
            >
             Still have questions or queries that are left unanswered? 
             Share your thoughts below which will help us improve your website experience
            </Typography>
            <HomeContactUs />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "block", lg: "block", xl: "block" },
              width: { xs: "100%", md: "40%", lg: "40%", xl: "40%" } ,
            }}
          >
             <img
              alt="heroimage"
              src={`../../assets/globe.gif`}
              style={{
                width: "100%",
                height: "auto",
                cursor: "default",
                minHeight: "",
                height:"auto"
              }}
            />
          </Box>
        </Box>
      </Box>
    )
}

export default FormInformation
