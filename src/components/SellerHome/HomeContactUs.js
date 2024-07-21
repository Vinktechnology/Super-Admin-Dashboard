import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../src/theme.js";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { IconButton, Paper } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { inputType } from "../../utils/enum";
import Element from "../../Form/Element";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useFormik } from "formik";
import { HomeContactUsSchema } from "../../utils/validation.js";
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

const HomeContactUs = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const navigate = useNavigate();
  const initialValues = {
    username: "",
    email: "",
    phone: "",
    // role: "",
    description: "",
  };

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues,
      onSubmit: onSubmit,
      validationSchema: HomeContactUsSchema,
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

  console.log("errors", errors);
  return (
    <Box mt="20px">
      <Card
        sx={{
          maxWidth: "100%",
          pt: 5,
          pb: 2,
          color: colors.grey[100],
          borderRadius: 2,
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
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
              label="Username"
              placeholder="Please enter Username"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "username",
              }}
              errorText={touched.username && errors.username}
              value={values.username}
              styles={{ gridColumn: "span 4" }}
            />

            <Element
              eletype={inputType.input}
              label="phone"
              placeholder="Please enter Mobile"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "phone",
              }}
              errorText={touched.phone && errors.phone}
              value={values.phone}
              styles={{ gridColumn: "span 4" }}
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
              styles={{ gridColumn: "span 4" }}
            />

            {/* <Element
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
              styles={{ gridColumn: "span 4" }}
              options={numberOfEmployeesOptions}
            /> */}

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
        <CardActions sx={{ display: "flex", justifyContent: "end" }}>
          <Button
            type="submit"
            onClick={handleSubmit}
            sx={{
              backgroundColor: "rgb(2, 124, 213)",
              fontWeight: 600,
              fontSize: "16px",
              borderRadius: "7%",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
            }}
            variant="contained"
          >
            send query
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default HomeContactUs;
