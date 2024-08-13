import { Box, Button, Grid, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../src/theme.js";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { inputType } from "../../utils/enum";
import Element from "../../Form/Element";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useFormik } from "formik";
import { CatgorySchema } from "../../utils/validation.js";
import { useDispatch } from "react-redux";
import {
  addNewCategoryThunk,
  getCategoryByIdThunk,
  updateCategoryThunk,
} from "../../store/slices/category/category.slice.js";
import ImageSlider from "../../components/ImageSlider/ImageSlider.js";






const sampleImages =[{
    name:"front view",
    imageUrl:"https://vink-api.s3.ap-south-1.amazonaws.com/vinks/e2b197f4-2d3b-4289-ad27-999453ba1dd5_sample-pic.jpg"
},
{
    name:"front view",
    imageUrl:"https://vink-api.s3.ap-south-1.amazonaws.com/vinks/6034412f-841c-4f2f-af7e-471affabb8a6_lady.png"
},
{
    name:"front view",
    imageUrl:"https://vink-api.s3.ap-south-1.amazonaws.com/vinks/e2b197f4-2d3b-4289-ad27-999453ba1dd5_sample-pic.jpg"
},
{
    name:"front view",
    imageUrl:"https://vink-api.s3.ap-south-1.amazonaws.com/vinks/6034412f-841c-4f2f-af7e-471affabb8a6_lady.png"
},
{
    name:"front view",
    imageUrl:"https://vink-api.s3.ap-south-1.amazonaws.com/vinks/e2b197f4-2d3b-4289-ad27-999453ba1dd5_sample-pic.jpg"
},
{
    name:"front view",
    imageUrl:"https://vink-api.s3.ap-south-1.amazonaws.com/vinks/6034412f-841c-4f2f-af7e-471affabb8a6_lady.png"
},
{
    name:"front view",
    imageUrl:"https://vink-api.s3.ap-south-1.amazonaws.com/vinks/e2b197f4-2d3b-4289-ad27-999453ba1dd5_sample-pic.jpg"
},
]

const ViewCategory = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [viewdata, setViewData] = useState(null);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleClickOpen = (index) => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


  useEffect(() => {
    if (params.Id) {
      dispatch(getCategoryByIdThunk(params.Id))
        .unwrap()
        .then((da) => {
          setViewData(da);
        });
    }
  }, [params.Id]);

  return (
    <Box m="20px">
        <ImageSlider title="Sample Images" sampleImages={sampleImages} handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} />

        
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="CATEGORY DATA" subtitle="View a Category" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={() => navigate("/dashboard/category")}
          >
            Back to Category
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
          <Box  sx={{ width:{xs:"100%",sm:"100%",md:"40%",lg:"40%",xl:"40%",} }}>
        <Box>
            <Typography sx={{
                    color: colors.grey[400],
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    textAlign:"center",
                    margin:"0px 0px 10px 0px"
                  }}>
            {viewdata?.name}</Typography>
            </Box>
        <Box sx={{
                    textAlign:"center"
                  }}>
            <img src={viewdata?.imageLink}     style={{ width: "100%", maxHeight: "100%" }} />
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
                 {viewdata?.createdBy}
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
                 {viewdata?.createdAt}
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
                 {viewdata?.updatedBy}
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
                 {viewdata?.updatedAt}
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
                  Is Active
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
                  {/* Is Active */}
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                 {/* {viewdata?.isActive?"Active":"In-Active"} */}
                </Typography>
              </Box>
            
            </Box>


          </Box>
        </Box>
                  {/* ----for sample images-- */}
                  <Box sx={{marginTop:"1rem"}}>
                    <Typography sx={{    color: colors.grey[400],
                    fontSize: "1.3rem",
                    padding:"0px 0px 0px .8rem",
                    fontWeight: "600",}}>Sample Images</Typography>
                    <hr />
                  <Grid container spacing={0}>
              <Grid xs={12} sm={6} md={4} sx={{ padding: "10px" }} onClick={() => handleClickOpen()}>
              <img src={viewdata?.imageLink}     style={{ width: "100%", maxHeight: "100%" }} />
                </Grid>
                <Grid xs={12} sm={6} md={4} sx={{ padding: "10px" }}>
                <img src={viewdata?.imageLink}     style={{ width: "100%", maxHeight: "100%" }} />
                </Grid>
                <Grid xs={12} sm={6} md={4} sx={{ padding: "10px" }}>
                <img src={viewdata?.imageLink}     style={{ width: "100%", maxHeight: "100%" }}/>
                </Grid>

                <Grid xs={12} sm={6} md={4} sx={{ padding: "10px" }}>
              <img src={viewdata?.imageLink}     style={{ width: "100%", maxHeight: "100%" }}/>
                </Grid>
                <Grid xs={12} sm={6} md={4} sx={{ padding: "10px" }}>
                <img src={viewdata?.imageLink}     style={{ width: "100%", maxHeight: "100%" }}/>
                </Grid>
                <Grid xs={12} sm={6} md={4} sx={{ padding: "10px" }}>
                <img src={viewdata?.imageLink}     style={{ width: "100%", maxHeight: "100%" }}/>
                </Grid>
                </Grid>
                </Box>
      </Box>
    </Box>
  );
};

export default ViewCategory;
