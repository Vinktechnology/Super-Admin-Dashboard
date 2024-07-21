import React, { useCallback, useState } from "react";
import { Box, Button, Container, TextField, Typography, useScrollTrigger, useTheme } from "@mui/material";
import { tokens } from "../../../../src/theme.js";
import { useFormik } from "formik";
import { CatgorySchema } from "../../../utils/validation.js";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { inputType } from "../../../utils/enum.js";
import Element from "../../../Form/Element";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { debounce } from "../../../utils/global/global.js";
import { useDispatch, useSelector } from "react-redux";
import { formErrorStyle , formSuccessStyle} from "../../../utils/constant.js";
import { setBrand } from "../../../store/slices/staticproduct/staticproduct.slice.js";

function ProductBrand({ dataCheck }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const brandData = useSelector(({staticProduct})=> staticProduct.brand);
  const { search } = useLocation();

   const query = new URLSearchParams(search);
   const prodcategory = query.get('prodcategory');


  const [isAlreadyBrand, setIsAlreadyBrand] = useState(false);
  const [isAlreadyBrandError, setIsAlreadyBrandError] = useState("");
 

  const navigate = useNavigate();
  const initialValues = {
    brandname:brandData?.tabStep?brandData?.name: "",
  };

  const { values, touched, errors, handleBlur,handleChange, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues,
      onSubmit: onSubmit,
      // validationSchema: CatgorySchema,
    });

  async function onSubmit(data) {
          
    const bData = {
      name:values.brandname,
      tabStep:2
    }
    dispatch(setBrand(bData))

    navigate(`/dashboard/product/addproduct/productfeatures?prodcategory=${prodcategory}&prodbrand=${values.brandname}`);
    // dispatch(
    //   loginByEmailAsyncThunk({
    //     ...values,
    //   })
    // )
    //   .unwrap()
    //   .then(() => {
    //     navigate({
    //       pathname: "/",
    //     });
    //   });
    //    navigate({
    //   pathname: "/dashboard",
    // });
  }

     // Debounced function
     const fetchData = useCallback(
      debounce(async (searchQuery) => {
          if (searchQuery) {
              // const response = await fetch(`https://api.example.com/search?q=${searchQuery}`);
              const response = await fetch("https://jsonplaceholder.typicode.com/todos/1"); // replace with axio and redux-toolkit
              const data = await response.json();
                   
              setIsAlreadyBrand(true);
              setIsAlreadyBrandError("");
          }
      }, 1000),
      [] // Dependencies for useCallback, empty means it only initializes once
  ); 
  
  const handleChangeBrand = event => {

    handleChange({
      target:{
        name:event.target.name,
        value:event.target.value
      }
    })
        fetchData(event.target.value)   
  }




  return (
    <Container sx={{boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",padding:"2rem"}}>
    <Box sx={{display:"flex", justifyContent:"center",padding:{xs:".5rem", sm:".7rem", md:"3rem",lg:"3rem"}, flexDirection:{xs:"column", sm:"column", md:"row", lg:"row",xl:"row"}}}>
      <Box sx={{minWidth:"50%"}}>
        <Element
          eletype={inputType.input}
          label="Brand Name"
          placeholder="Please enter Brand Name"
          inputProps={{
            onChange: handleChangeBrand,
            onBlur: handleBlur,
            name: "brandname",
          }}
          errorText={touched.brandname && errors.brandname}
          value={values.brandname}
          styles={{ gridColumn: "span 2" }}
        />

{
        isAlreadyBrand && <span style={formErrorStyle} >{isAlreadyBrandError}</span>
      }

{
        (isAlreadyBrand && isAlreadyBrandError=="") &&<Box sx={{display:"flex", margin:".5rem", padding:".5rem",  justifyContent:"space-between", background:"lightgreen"}}>
          <Typography sx={{color:"green"}} >
            You can start selling under this brand
          </Typography>
         
          <Button  variant="contained" onClick={handleSubmit} >Go to Listing</Button>
        </Box> 
      }
      </Box>
{/* 
      <Box  sx={{minWidth:"20%",padding:"1rem"}}>
        <Button
          type="submit"
          onClick={handleSubmit}
          sx={{
            backgroundColor: colors.greenAccent[500],
          }}
          variant="contained"
        >
          Check Brand
        </Button>
      </Box> */}
    </Box>

  
</Container>
  );
}

export default ProductBrand;
