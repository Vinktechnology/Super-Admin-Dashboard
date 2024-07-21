import { Box, Button, TextField ,Typography ,useTheme} from "@mui/material";
import { tokens } from "../../../src/theme.js";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { IconButton, Paper } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { inputType } from "../../utils/enum";
import Element from "../../Form/Element";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useFormik } from "formik";
import { AttributeSchema } from '../../utils/validation.js';
import AttributeProperties from "../attribute/AttributeProperties.jsx"


const AddAttribute = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");


  const navigate = useNavigate();
  const initialValues = {
    attribute: "",
    slug: "",
    description: ""
  };



  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
  useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit:onSubmit,
    validationSchema: AttributeSchema ,
  });

  async function onSubmit(data) {
      
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


console.log("errors",errors)
  return (
    <Box m="20px">
      <Header title="CREATE ATTRIBUTE" subtitle="Create a New Attribute" />

      <Card 
       sx={{
        maxWidth: "100%" ,
         pt:5, 
         pb:2,
        backgroundColor: colors.primary[400],
        color: colors.grey[100],
        borderRadius: 2,
        boxShadow: 4,
      }}
      >
      <CardContent>
      <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >

            <Element
                eletype={inputType.input}
                label="Attribute"
                placeholder="Please enter Attribute"
                inputProps={{
                  onChange: handleChange,
                  onBlur: handleBlur,
                  name: "attribute",
                }}
                errorText={touched.attribute && errors.attribute}
                value={values.attribute}
                styles={{ gridColumn: "span 2" }}
              />
            
                <Element
                eletype={inputType.input}
                label="Slug"
                placeholder="Please enter Slug"
                inputProps={{
                  onChange: handleChange,
                  onBlur: handleBlur,
                  name: "slug",
                }}
                errorText={touched.slug && errors.slug}
                value={values.slug}
                styles={{ gridColumn: "span 2" }}
              />

            <Element
                eletype={inputType.textarea}
                label="Description"
                placeholder="Please enter Description"
                inputProps={{
                  onChange: handleChange,
                  onBlur: handleBlur,
                  name: "description",
                }}
                errorText={touched.description && errors.description}
                value={values.description}
                styles={{ gridColumn: "span 4" }}
              />
            </Box>
      </CardContent>
      <CardActions  sx={{display:"flex", justifyContent:"end"}}>
      <Button variant="contained"
       sx={{
        backgroundColor: colors.redAccent[500]
      }}
      onClick={()=>{navigate({
         pathname: "/dashboard/attribute",
         })}}
      > 
                Cancel
              </Button>
              <Button type="submit" onClick={handleSubmit}
                sx={{
                    backgroundColor: colors.greenAccent[500]
                  }}
              variant="contained">
                Create New Attribute
              </Button>
      </CardActions>
    </Card>

                  <Box sx={{mt:5}}>
                  <Card 
                    sx={{
                      maxWidth: "100%" ,
                      pt:5, 
                      pb:2,
                      backgroundColor: colors.primary[400],
                      color: colors.grey[100],
                      borderRadius: 2,
                      boxShadow: 4,
                    }}
                    >
                  <AttributeProperties />
                  </Card>
                  </Box>


    
    </Box>
  );
};

export default AddAttribute;
