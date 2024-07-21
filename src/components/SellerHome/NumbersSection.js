import { Box, Grid ,Paper, Typography, Divider} from "@mui/material";
import React from "react";

const data =[
    {
        heading:"14 Lakh+",
        subheading:"Seller community"
    },
    {
        heading:"24x7",
        subheading:"Online Business"
    },
    {
        heading:"7",
        subheading:"Online Business"
    },
    {
        heading:"100+",
        subheading:"Pincodes served"
    }
]

function NumbersSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2, // Outer padding for the Box
        marginTop:"-2rem"
      }}
    >
      <Paper
      elevation={6}
        sx={{
          width: '100%',
          maxWidth: 1200,
          padding: 1,
          borderRadius: 20,
          boxShadow: 3,
        }}
      >
        <Grid container spacing={0}>
          {data?.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={item?.heading}
              sx={{
                // display: 'flex',
                textAlign: 'center', // Center content horizontally
                '&:not(:last-child)': {
                  borderRight: {
                    xs: 'none', // No border on xs devices
                    sm: index % 2 === 0 ? '1px solid #e0e0e0' : 'none',
                    md: '1px solid #e0e0e0',
                  },
                },
              }}
            >
                <Typography variant="h2"  sx={{color:"rgb(2, 124, 213)", fontWeight:"700"}}> {item?.heading}</Typography>
                <Typography variant="h4"> {item?.subheading}</Typography>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}

export default NumbersSection;
