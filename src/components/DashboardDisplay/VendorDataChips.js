import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import EmailIcon from "@mui/icons-material/Email";
import StatBox from "../StatBox";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";





const VendorDataChips = () => {
  const dashData = useSelector(({ dashboard }) => dashboard?.dashboardData);
  const {dashBoardData :{productData,vendorData}= {}  } = dashData;


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
        Vendors Records
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
              onClick={()=> navigate("/dashboard/vendors?status=approved")}
            >
            
              <StatBox
                title={vendorData?.statusCounts?.approved}
                subtitle="Approved Vendors"
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
              onClick={()=> navigate("/dashboard/vendors?status=pending")}
            >
            
              <StatBox
                title={vendorData?.statusCounts?.pending}
                subtitle="Pending Vendors"
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
              onClick={()=> navigate("/dashboard/vendors?status=rejected")}
            >
            
              <StatBox
                title={vendorData?.statusCounts?.rejected}
                subtitle="Rejected Vendors"
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
              onClick={()=> navigate("/dashboard/vendors?status=blocked")}
            >
            
              <StatBox
                title={vendorData?.statusCounts?.blocked}
                subtitle="Blocked Vendors"
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

export default VendorDataChips;
