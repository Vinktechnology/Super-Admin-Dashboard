import { Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logo() {

  const navigate = useNavigate();
    return (
        <Box onClick={()=> navigate("/")} sx={{  minWidth:{xs:"50%", sm:"60%", md:"17%", lg:"17%", xl:"17%"},
            maxWidth:{xs:"75%", sm:"60%", md:"17%", lg:"17%", xl:"17%"}}}>
          <img
              alt="logo"
              src={`../../assets/logo1.webp`}
              style={{
                width: "100%",
                height: "auto",
                cursor: "default",
                minHeight: "",
                height:"auto",
                minHeight:"100%",
                maxHeight:"100%",
              }}
            />
        </Box>
    )
}

export default Logo
