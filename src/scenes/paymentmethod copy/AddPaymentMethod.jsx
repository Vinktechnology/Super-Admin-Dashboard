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
import { addNewPaymentMethodThunk, getPaymentMethodByIdThunk, updatePaymentMethodThunk } from "../../store/slices/paymentmethods/paymentmethods.slice.js";

const AddPaymentMethod = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [initialValues, setInitialValues] = useState({
    label: "",
    value: "",
    mobile_label:"",
    position: "",
    image: ""
  });

  const navigate = useNavigate();



  useEffect(()=>{
    if(params.Id)
      {
        dispatch(getPaymentMethodByIdThunk(params.Id))
        .unwrap()
        .then((da) => {
          console.log(" data of id",da)
        
          setInitialValues({
            label: da.label || "",
            value: da.value || "",
            mobile_label: da.mobile_label || "",
            position:da?.position ||"",
            image: da.image || ""
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
          updatePaymentMethodThunk({
            ...data,id:params.Id
          })
        )
          .unwrap()
          .then(() => {
            navigate({
              pathname: "/dashboard/paymentmethod",
            });
          });
      }
      else
      {
        dispatch(
          addNewPaymentMethodThunk({
            ...data,
          })
        )
          .unwrap()
          .then(() => {
            navigate({
              pathname: "/dashboard/paymentmethod",
            });
          });
      }
   
  }


  return (
    <Box m="20px">
 
      <Header title={params.Id?"EDIT PAYMENT METHOD":"CREATE PAYMENT METHOD" } subtitle={params.Id?"Edit a Payment Method":"Create a New Payment Method" }  />
    
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
              eletype={inputType.input}
              label="*Please Enter the Method Name"
              placeholder="Please Enter the Method Name"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "label",
              }}
              errorText={touched.label && errors.label}
              value={values.label}
              styles={{ gridColumn: "span 2" }}
            />

<Element
              eletype={inputType.input}
                 label="*Please ener Value of Payment Method"
              placeholder="Please enter Value of Payment Method"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "value",
              }}
              errorText={touched.value && errors.value}
              value={values.value}
              styles={{ gridColumn: "span 2" }}
            />

            <Element
              eletype={inputType.input}
              label="*Please ener Value of Mobile Payment Method"
              placeholder="Please enter Value of Mobile Payment Method"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "mobile_label",
              }}
              errorText={touched.mobile_label && errors.mobile_label}
              value={values.mobile_label}
              styles={{ gridColumn: "span 2" }}
            />


            <Element
              eletype={inputType.number}
              label="*Please enter Position To Display"
              placeholder="Please enter Position To Display"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "position",
              }}
              errorText={touched.position && errors.position}
              value={values.position}
              styles={{ gridColumn: "span 2" }}
            />

            <Element
              eletype={inputType.dropzone}
              label="*Please choose image of Payment Method"
              placeholder="Please enter image"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "image",
              }}
              errorText={touched.image && errors.image}
              value={values.image}
              styles={{
                gridColumn: "span 2",
                backgroundColor: "rgba(0, 0, 0, 0.06)",
              }}
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
                pathname: "/dashboard/paymentmethod",
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
            {params.Id? "Edit":" Add"} Payment Method
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default AddPaymentMethod;
