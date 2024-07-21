import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

const data = [
  {
    imgurl: "../../assets/how1.jpeg",
    heading: "Register",
    subheading:
      "Register in just 10 mins with valid GST, address, & bank details.",
  },
  {
    imgurl: "../../assets/how1.jpeg",
    heading: "Create",
    subheading: "Create your products in just 2 mins with 100+ categories.",
  },
  {
    imgurl: "../../assets/how1.jpeg",
    heading: "List",
    subheading:
      "SList your products (min 1 no.) that you want to sell on Flipkart.",
  },
  {
    imgurl: "../../assets/how1.jpeg",
    heading: "Orders",
    subheading: "Receive orders from over 45 crore+ Flipkart customers.",
  },
  {
    imgurl: "../../assets/how1.jpeg",
    heading: "Shipment",
    subheading: "Flipkart ensures stress free delivery of your products.",
  },
  {
    imgurl: "../../assets/how1.jpeg",
    heading: "Payment",
    subheading:
      "Receive payment 7 days* from the date of dispatch of your order.",
  },
];

function HowToSell() {
  return (
    <Box sx={{ padding: { xs: "1rem", md: "3rem" } }}>
      <Typography variant="h2">
        Steps to sell on{" "}
        <span style={{ color: "rgb(2, 124, 213)", fontWeight: "700" }}>
          Vink.com
        </span>
        ?
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row", lg: "row" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "100%", lg: "100%" },
            marginTop: { xs: "1rem" , md:"3.5rem" , lg: "3.5rem" },
          }}
        >
          <Grid container spacing={0}>
            {data?.map((item, index) => (
              <Grid xs={12} sm={6} md={4} sx={{ padding: "10px" }}>
                <Paper
                  elevation={3}
                  sx={{
                    minHeight: "180px",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: {xs:"center",sm:"center", md:"flex-start", lg:"flex-start", xl:"flex-start"} , alignContent:"center", flexDirection:{xs:"column", sm:"column", md:"row", lg:"row", xl:"row"}}}>
                    <Box 
                    sx={{
                        textAlign:{xs:"center",sm:"center", md:"start", lg:"start", xl:"start"},
                        padding:"5px"}}
                    >
                    <img
                      alt="heroimage"
                      src={item?.imgurl}
                      style={{
                        width:"88%" ,
                        height: "100%",
                        cursor: "default",
                        maxHeight: "545px",
                      }}
                    />
                    </Box>
                    <Box
                     sx={{
                        textAlign:{xs:"center",sm:"center", md:"start", lg:"start", xl:"start"},
                        padding:"5px"}}
                    >
                    <Typography
                      variant="h4"
                      style={{ fontWeight: "700", margin:{xs:"20px", sm:"20px", md:"10px", lg:"0px", xl:"0px"} }}
                    >
                      {item.heading}
                    </Typography>
                    <Typography
                    variant="h5"
                    style={{ paddingTop: "25px", color: "686363" }}
                    >
                    {item.subheading}
                  </Typography>
                  </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default HowToSell;
