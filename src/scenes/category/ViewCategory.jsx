import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../src/theme.js";
import { Link as RouterLink, useNavigate,useParams } from "react-router-dom";
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
import { addNewCategoryThunk , getCategoryByIdThunk, updateCategoryThunk} from "../../store/slices/category/category.slice.js";

const ViewCategory = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [initialValues, setInitialValues] = useState({
    category: "",
    slug: "",
    description: "",
    thumbnail: "",
    sampleimages: [],
  });

  const navigate = useNavigate();



  useEffect(()=>{
    if(params.Id)
      {
        dispatch(getCategoryByIdThunk(params.Id))
        .unwrap()
        .then((da) => {
          console.log(" data of id",da)
          const newRes = da?.Categories[1];
          setInitialValues({
            category: newRes.name || "",
            slug: newRes.slug || "",
            description: newRes.description || "",
            thumbnail: newRes.imageLink || "",
            sampleimages: newRes.sampleimages || [],
          });
        });
      }
  },[params.Id])

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues,
      onSubmit: onSubmit,
      validationSchema: CatgorySchema,
    });

  async function onSubmit(data) {

    console.log("data from components",data);
    if(params.Id)
      {
        dispatch(
          updateCategoryThunk({
            ...data,id:params.Id
          })
        )
          .unwrap()
          .then(() => {
            navigate({
              pathname: "/dashboard/category",
            });
          });
      }
      else
      {
        dispatch(
          addNewCategoryThunk({
            ...data,
          })
        )
          .unwrap()
          .then(() => {
            navigate({
              pathname: "/dashboard/category",
            });
          });
      }
   
  }


  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="CATEGORY DATA" subtitle="View a Category"   />

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
          sx={{
            paddingLeft: "1rem",
            paddingRight:"1rem",
            paddingTop:"1rem",
            paddingBottom:".5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "90%" }}>
            <Typography
              sx={{
                color: colors.grey[100],
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
                Business Details
            </Typography>
          </Box>
          <Box sx={{ width: "10%", textAlign: "center" }}>
            {/* <IconButton onClick={handleClickOpen}><EditIcon fontSize="medium" style={{ fill: "rgb(2, 124, 213)" }} /></IconButton> */}
          </Box>
        </Box>
        <Box sx={{paddingLeft:"1rem"}}>
          <Box>
            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}} >Business Name</Typography>
            <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>Vink Technology Pvt Ltd </Typography>
          </Box>
          <Box sx={{marginTop:".6rem"}}>
            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}}>TAN </Typography>
            <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>Not Available   </Typography>
          </Box>
          <Box sx={{marginTop:".6rem"}}>
            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}}>GSTIN/ Provisional ID Number* </Typography>
            <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>07AAJCV0146L1Z4  </Typography>
          </Box>
          <Box sx={{marginTop:".6rem"}}>
            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}}>Registered business address </Typography>
            <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>3rd Floor, WZ-1370, Nangal raya, New Delhi, South West Delhi, NEW DELHI </Typography>
          </Box>
          <Box sx={{marginTop:".6rem"}}>
            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}}>Signature </Typography>
            <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>Done  </Typography>
          </Box>
          <Box sx={{marginTop:".6rem"}}>
            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}}>Business Type </Typography>
            <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>Private Limited Company  </Typography>
          </Box>
          <Box sx={{marginTop:".6rem"}}>
            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}}>PAN </Typography>
            <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>AAJCV0146L  </Typography>
          </Box>
          <Box sx={{marginTop:".6rem"}}>
            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}}>Address proof </Typography>
            <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>Not Available   </Typography>
          </Box>
          
        </Box>
      </Box>
      </Box>
    

    </Box>
  );
};

export default ViewCategory;
