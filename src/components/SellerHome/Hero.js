import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box>
             <Typography  sx={{
           position:{xl:"absolute",lg:"absolute",md:"absolute",sm:"absolute",xs:"absolute"},
            marginTop:{xl:"13rem",lg:"13rem",md:"13rem",sm:"1.4rem",xs:"1.4rem"}, 
            fontWeight: "bold",
            marginLeft:{xs:"2rem", sm:"3rem", md:"4rem", lg:"5rem"},
            fontSize:{xs:"23px", sm:"30px", md:"33px", lg:"40px"}
        }}>
        Become a <span style={{color:"rgb(2, 124, 213)"}}>Vink Seller</span>  <br />
        and sell to 50 Crore+ customers
        </Typography>
        {
          isMobile ?
          <img
          alt="heroimagemobile"
          src={`../../assets/mobileHeader.webp`}
          style={{  
             width:"100%",
            height: "100%",
            cursor: "default",
            maxHeight: "545px", 
    
        }}
/>
          :
          <img
          alt="heroimage"
          src={`../../assets/Heroimage.webp`}
          style={{  
             width:"100%",
            height: "100%",
            cursor: "default",
            maxHeight: "545px", 
    
        }}
/>
        }
        
       
      </Box>
    )
}

export default Hero
