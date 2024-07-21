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
import { TeamSchema } from '../../utils/validation.js';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const numberOfEmployeesOptions = [
  {
    label: "Admin",
    value: "Admin",
  },
  {
    label: "Accountant",
    value: "Accountant",
  },
  {
    label: "Sales",
    value: "Sales",
  },
  {
    label: "Finance",
    value: "Finance",
  },
  {
    label: "Super Admin",
    value: "Super",
  },
];


const AddTeam= () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");


  const navigate = useNavigate();
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    role:"",
    thumbnail:""
  };



  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
  useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit:onSubmit,
    validationSchema: TeamSchema ,
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
      <Header title="CREATE STAFF" subtitle="Add your staff necessary information" />

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
                label="FirstName"
                placeholder="Please enter First Name"
                inputProps={{
                  onChange: handleChange,
                  onBlur: handleBlur,
                  name: "firstname",
                }}
                errorText={touched.firstname && errors.firstname}
                value={values.firstname}
                styles={{ gridColumn: "span 2" }}
              />

            <Element
                eletype={inputType.input}
                label="LastName"
                placeholder="Please enter Last Name"
                inputProps={{
                  onChange: handleChange,
                  onBlur: handleBlur,
                  name: "lastname",
                }}
                errorText={touched.lastname && errors.lastname}
                value={values.lastname}
                styles={{ gridColumn: "span 2" }}
              />
            
                <Element
                eletype={inputType.input}
                label="Email"
                placeholder="Please enter Email"
                inputProps={{
                  onChange: handleChange,
                  onBlur: handleBlur,
                  name: "email",
                }}
                errorText={touched.email && errors.email}
                value={values.email}
                styles={{ gridColumn: "span 2" }}
              />

          <Element
                eletype={inputType.select}
                label="Role"
                placeholder="Please select a Role"
                inputProps={{
                  onChange: handleChange,
                  onBlur: handleBlur,
                  name: "role",
                }}
                errorText={touched.role && errors.role}
                value={values.role}
                styles={{ gridColumn: "span 2" }}
                options={numberOfEmployeesOptions}
              />

            <Element
                eletype={inputType.input}
                label="Contact Number"
                placeholder="Please enter Contact Number"
                inputProps={{
                  onChange: handleChange,
                  onBlur: handleBlur,
                  name: "phone",
                }}
                errorText={touched.phone && errors.phone}
                value={values.phone}
                styles={{ gridColumn: "span 2" }}
              />


            <Element
                eletype={inputType.dropzone}
                label="thumbnail"
                placeholder="Please enter thumbnail"
                inputProps={{
                  onChange: handleChange,
                  onBlur: handleBlur,
                  name: "thumbnail",
                }}
                errorText={touched.thumbnail && errors.thumbnail}
                value={values.thumbnail}
                styles={{ gridColumn: "span 2" }}
              />

          

            </Box>
      </CardContent>
      <CardActions  sx={{display:"flex", justifyContent:"end"}}>
      <Button variant="contained"
       sx={{
        backgroundColor: colors.redAccent[500]
      }}
      onClick={()=>{navigate({
         pathname: "/dashboard/team",
         })}}
      > 
                Cancel
              </Button>
              <Button type="submit" onClick={handleSubmit}
                sx={{
                    backgroundColor: colors.greenAccent[500]
                  }}
              variant="contained">
                Create New Staff
              </Button>
      </CardActions>
    </Card>
    </Box>
  );
};

export default AddTeam;
