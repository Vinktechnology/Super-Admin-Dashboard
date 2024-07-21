import { Box, Typography } from '@mui/material'
import React from 'react'

function Copyright() {
    return (
        <Box sx={{display:"flex", justifyContent:"center"}}>
        <Typography sx={{fontSize:{xs:"10px",sm:"12px", md:"14", lg:"15px", xl:"15"}, fontWeight:"700", padding:"10px"}}>Copyright @2024 All Rights Reserved by Vink Technology Pvt ltd.</Typography>
      </Box>
    )
}

export default Copyright
