import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../src/theme";
import { mockTransactions } from "../../src/data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../src/components/Header";
import LineChart from "../../src/components/LineChart";
import GeographyChart from "../../src/components/GeographyChart";
import BarChart from "../../src/components/BarChart";
import StatBox from "../../src/components/StatBox";
import ProgressCircle from "../../src/components/ProgressCircle";
import { Link } from "react-router-dom";

const data = {
  vendors_data: [
    {
      name: "Active Vendors",
      count: 99000,
      increment_by: "+10%",
      link: "#",
    },
    {
      name: "Inactive Vendors",
      count: 100,
      increment_by: "-3%",
      link: "#",
    },
    {
      name: "Pending Request Approval Vendor",
      count: 30,
      increment_by: "+20%",
      link: "#",
    },
    {
      name: "Total Vendors",
      count: 100000,
      increment_by: "+10%",
      link: "#",
    },
  ],
  clients_data: [
    {
      name: "Active Clients",
      count: 99000,
      increment_by: "+10%",
      link: "#",
    },
    {
      name: "Inactive Clients",
      count: 100,
      increment_by: "-3%",
      link: "#",
    },
    {
      name: "Pending Request Approval Clients",
      count: 30,
      increment_by: "+20%",
      link: "#",
    },
    {
      name: "Total Clients",
      count: 100000,
      increment_by: "+10%",
      link: "#",
    },
  ],
  products_data: [
    {
      name: "Active Products",
      count: 99000,
      increment_by: "+10%",
      link: "#",
    },
    {
      name: "Inactive Products",
      count: 100,
      increment_by: "-3%",
      link: "#",
    },
    {
      name: "QC Pending",
      count: 30,
      increment_by: "+20%",
      link: "#",
    },
    {
      name: "QC Rejected",
      count: 100000,
      increment_by: "+10%",
      link: "#",
    },
  ],
  orders_data: [
    {
      name: "Active Orders",
      count: 99000,
      increment_by: "+10%",
      link: "#",
    },
    {
      name: "Completed Orders",
      count: 100,
      increment_by: "-3%",
      link: "#",
    },
    {
      name: "Pending From Vendors",
      count: 30,
      increment_by: "+20%",
      link: "#",
    },
    {
      name: "Rejected Orders",
      count: 100000,
      increment_by: "+10%",
      link: "#",
    },
  ],
  transaction_data: [
    {
      name: "Active Transactions",
      count: 99000,
      increment_by: "+10%",
      link: "#",
    },
    {
      name: "Completed Transactions",
      count: 100,
      increment_by: "-3%",
      link: "#",
    },
    {
      name: "Pending From Transactions",
      count: 30,
      increment_by: "+20%",
      link: "#",
    },
    {
      name: "Rejected Transactions",
      count: 100000,
      increment_by: "+10%",
      link: "#",
    },
  ],
};

const DashboardApp = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      <Box
        display="flex"
        sx={{flexDirection:{xs:"column", sm:"column", md:"row", lg:"row", xl:"row"}}}
        justifyContent="space-between"
        alignItems="center"
      >

      <Box sx={{ width:"100%",margin:"0px 5px 0px 5px"}}>
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
          {data?.vendors_data?.map((da, i) => (
            <Box
              key={i}
              sx={{
                gridColumn: {
                  xs: "span 12",
                  sm: "span 6",
                  md: "span 6",
                  lg: "span 6",
                  xl: "span 3",
                },
              }}
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title={da.count}
                subtitle={da.name}
                progress="0.75"
                increase={da.increment_by}
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{width:"100%",margin:"0px 5px 0px 5px"}}>
        <Typography
          variant="h3"
          sx={{
            color: "#141414",
            fontWeight: "600",
            margin: "1.5rem 0rem .3rem 0rem",
          }}
        >
          Clients Records
        </Typography>
        <hr />
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          {data?.clients_data?.map((da, i) => (
            <Box
              key={i}
              sx={{
                gridColumn: {
                  xs: "span 12",
                  sm: "span 6",
                  md: "span 6",
                  lg: "span 6",
                  xl: "span 3",
                },
              }}
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title={da.count}
                subtitle={da.name}
                progress="0.75"
                increase={da.increment_by}
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          ))}
        </Box>
      </Box>
      </Box>


      <Box>
        <Typography
          variant="h3"
          sx={{
            color: "#141414",
            fontWeight: "600",
            margin: "1.5rem 0rem .3rem 0rem",
          }}
        >
          Orders Records
        </Typography>
        <hr />
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          {data?.orders_data?.map((da, i) => (
            <Box
              key={i}
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
            >
              <StatBox
                title={da.count}
                subtitle={da.name}
                progress="0.75"
                increase={da.increment_by}
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Typography
          variant="h3"
          sx={{
            color: "#141414",
            fontWeight: "600",
            margin: "1.5rem 0rem .3rem 0rem",
          }}
        >
          Transaction Records
        </Typography>
        <hr />
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          {data?.transaction_data?.map((da, i) => (
            <Box
              key={i}
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
            >
              <StatBox
                title={da.count}
                subtitle={da.name}
                progress="0.75"
                increase={da.increment_by}
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          ))}

          {/*        
        <Box
                 sx={{ gridColumn:{xs:"span 12", sm:"span 6", md:"span 3", lg:"span 3", xl:"span 3"}}}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
        sx={{ gridColumn:{xs:"span 12", sm:"span 6", md:"span 3", lg:"span 3", xl:"span 3"}}}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          sx={{ gridColumn:{xs:"span 12", sm:"span 6", md:"span 3", lg:"span 3", xl:"span 3"}}}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

         */}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardApp;
