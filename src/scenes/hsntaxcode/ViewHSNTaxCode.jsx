import { Box, Button, Grid, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../src/theme.js";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useDispatch } from "react-redux";
import { globalFormatDate } from "../../utils/formatTime.js";
import { getHSNTaxCodeByIdThunk } from "../../store/slices/hsntaxcode/hsntaxcode.slice.js";

const ViewHSNTaxCode = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [viewdata, setViewData] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    if (params.Id) {
      dispatch(getHSNTaxCodeByIdThunk(params.Id))
        .unwrap()
        .then((da) => {
          console.log(da)
          setViewData(da);
        });
    }
  }, [params.Id]);

  return (
    <Box m="20px">
     

        
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title=" HSN & Tax Code DATA" subtitle="View a HSN & Tax Code" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={() => navigate("/dashboard/hsntaxcode")}
          >
            Back to  HSN & Tax Code
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          //   height: { xs: "100vh", sm: "100vh", md: "100vh", lg: "100vh" },
          margin: "15px",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Box
          sx={{ padding: "1rem",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"top",
            flexDirection:{xs:"column",sm:"column",md:"row",lg:"row", xl:"row" }

           }}
         
        >
          <Box  sx={{ width:{xs:"100%",sm:"100%",md:"40%",lg:"40%",xl:"40%",} ,    display:"flex", alignItems:"center",justifyContent:"center",}}>
        <Box>
            <Typography sx={{
                    color: colors.grey[400],
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    textAlign:"center",
                    margin:"0px 0px 10px 0px"
                  }}>
            {viewdata?.name}</Typography>
            <Typography sx={{
                    color: colors.grey[400],
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    textAlign:"center",
                    margin:"0px 0px 10px 0px"
                  }}> Category : 
            {viewdata?.categoryId?.name}</Typography>

            </Box>

          </Box>
          <Box  sx={{ width:{xs:"100%",sm:"100%",md:"60%",lg:"60%",xl:"60%",} }}>

          <Box
              sx={{ padding: "1rem" }}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
                <Box sx={{width:"50%"}}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Master Name
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                 {viewdata?.type?.masterName}
                </Typography>
              </Box>
                <Box sx={{width:"50%"}}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap:"break-word"
                  }}
                >
                  Tax
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap:"break-word"
                  }}
                >
                 {viewdata?.taxRate}

                 
                </Typography>
              </Box>
                
            </Box>
            <Box
              sx={{ padding: "1rem" }}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Box sx={{width:"50%"}}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap:"break-word"
                  }}
                >
                  Slug
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
wordWrap:"break-word"
                  }}
                >
                 {viewdata?.slug}
                </Typography>
              </Box>
              <Box sx={{width:"50%"}}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap:"break-word"
                  }}
                >
                  Description
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap:"break-word"
                  }}
                >
                 {viewdata?.description}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{ padding: "1rem" }}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Box sx={{width:"50%"}}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap:"break-word"
                  }}
                >
                  Created By
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap:"break-word"
                  }}
                >
                 {viewdata?.createdBy?.fullName}
                </Typography>
              </Box>
              <Box sx={{width:"50%"}}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap:"break-word"
                  }}
                >
                  Created On
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap:"break-word"
                  }}
                >
                 {globalFormatDate(viewdata?.createdAt)}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{ padding: "1rem" }}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Box sx={{width:"50%"}}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap:"break-word"
                  }}
                >
                  Updated By
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap:"break-word"
                  }}
                >
                 {viewdata?.updatedBy?.fullName}
                </Typography>
              </Box>
              <Box sx={{width:"50%"}}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap:"break-word"
                  }}
                >
                  Updated On
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap:"break-word"
                  }}
                >
                 {globalFormatDate(viewdata?.updatedAt)}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{ padding: "1rem" }}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
                <Box sx={{width:"50%"}}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap:"break-word"
                  }}
                >
                  Status
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap:"break-word"
                  }}
                >
                 {viewdata?.isActive?"Active":"In-Active"}

                 
                </Typography>
              </Box>
                  <Box sx={{width:"50%"}}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {/* Master Name */}
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                 {/* {viewdata?.type} */}
                </Typography>
              </Box>
            </Box>

            


          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewHSNTaxCode;
