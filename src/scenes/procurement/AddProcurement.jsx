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
import { addNewProcurementThunk, getProcurementByIdThunk, updateProcurementThunk } from "../../store/slices/procurement/procurement.slice.js";

const ddlDropdownData = [{
  label:"Procurement",
  value:"procurement",
  id:1
},
{
  label:"Minimum order Quantity",
  value:"pack-of",
  id:1
}
]

const AddProcurement = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [initialValues, setInitialValues] = useState({
    name: "",
    slug: "",
    description: "",
    type:""
  });

  const navigate = useNavigate();



  useEffect(()=>{
    if(params.Id)
      {
        dispatch(getProcurementByIdThunk(params.Id))
        .unwrap()
        .then((da) => {
          console.log(" data of id",da)
        
          setInitialValues({
            name: da?.name || "",
            slug:da?.slug||  "",
            description:da?.description ||"",
            type:da?.type||""
          });
        });
      }
  },[params.Id])

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues,
      onSubmit: onSubmit,
      // validationSchema: CatgorySchema,
    });

  async function onSubmit(data) {

    console.log("data from components",data);
    if(params.Id)
      {
        dispatch(
          updateProcurementThunk({
            ...data,id:params.Id
          })
        )
          .unwrap()
          .then(() => {
            navigate({
              pathname: "/dashboard/procurement",
            });
          });
      }
      else
      {
        dispatch(
          addNewProcurementThunk({
            ...data,
          })
        )
          .unwrap()
          .then(() => {
            navigate({
              pathname: "/dashboard/procurement",
            });
          });
      }
   
  }


  return (
    <Box m="20px">
 
      <Header title={params.Id?"EDIT PROCUREMENT":"CREATE PROCUREMENT" } subtitle={params.Id?"Edit a Procurement":"Create a New Procurement" }  />
    
      <Card
        sx={{
          maxWidth: "100%",
          pt: 5,
          pb: 2,
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
              eletype={inputType.number}
              label="*Name"
              placeholder="Please enter Name"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "name",
              }}
              errorText={touched.name && errors.name}
              value={values.name}
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
              eletype={inputType.select}
              label="*Select a Master"
              placeholder="*Please select a Master"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "type",
              }}
              errorText={touched.type && errors.type}
              value={values.type}
              styles={{ gridColumn: "span 2" }}
              options={ddlDropdownData}
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
              styles={{ gridColumn: "span 2" }}
            />

          </Box>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "end" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: colors.redAccent[500],
            }}
            onClick={() => {
              navigate({
                pathname: "/dashboard/procurement",
              });
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            sx={{
              backgroundColor: colors.greenAccent[500],
            }}
            variant="contained"
          >
            {params.Id? "Edit":" Add"} Procurement
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default AddProcurement;
