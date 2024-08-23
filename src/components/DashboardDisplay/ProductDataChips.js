import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import EmailIcon from "@mui/icons-material/Email";
import StatBox from "../StatBox";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";





const ProductDataChips = () => {
  const dashData = useSelector(({ dashboard }) => dashboard?.dashboardData);
  const {dashBoardData :{productData,vendorData} = {}  } = dashData;

  console.log("productData",productData)

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data,setData] = useState(null)
  const navigate = useNavigate();

  return (
    <Box m="20px">

      <Box>
        <Typography
          variant="h3"
          sx={{
            color: "#141414",
            fontWeight: "600",
            margin: "1.5rem 0rem .3rem 0rem",
          }}
        >
        Product Records
        </Typography>
        <hr />
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
        <Box
              sx={{
                gridColumn: {
                  xs: "span 12",
                  sm: "span 6",
                  md: "span 3",
                  lg: "span 3",
                  xl: "span 3",
                },
              }}
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
              onClick={()=> navigate("/dashboard/product?status=draft")}
            >
            
              <StatBox
                title={productData?.statusCounts?.draft}
                subtitle="Draft Product"
                progress="0.75"
                increase=""
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>

            <Box
              sx={{
                gridColumn: {
                  xs: "span 12",
                  sm: "span 6",
                  md: "span 3",
                  lg: "span 3",
                  xl: "span 3",
                },
              }}
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
              onClick={()=> navigate("/dashboard/product?status=approved")}
            >
            
              <StatBox
                title={productData?.statusCounts?.approved}
                subtitle="Approved Product"
                progress="0.75"
                increase=""
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>

            <Box
              sx={{
                gridColumn: {
                  xs: "span 12",
                  sm: "span 6",
                  md: "span 3",
                  lg: "span 3",
                  xl: "span 3",
                },
              }}
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
              onClick={()=> navigate("/dashboard/product?status=QCPending")}
            >
            
              <StatBox
                title={productData?.statusCounts?.QCPending}
                subtitle="QC Pending"
                progress="0.75"
                increase=""
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>

            <Box
              sx={{
                gridColumn: {
                  xs: "span 12",
                  sm: "span 6",
                  md: "span 3",
                  lg: "span 3",
                  xl: "span 3",
                },
              }}
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
              onClick={()=> navigate("/dashboard/product?status=rejected")}
            >
            
              <StatBox
                title={productData?.statusCounts?.rejected}
                subtitle="Rejected Products"
                progress="0.75"
                increase=""
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>

        </Box>
      </Box>
    
    </Box>
  );
};

export default ProductDataChips;
