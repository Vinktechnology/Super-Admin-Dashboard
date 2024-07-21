import Element from "../../../Form/Element";
import { inputType } from "../../../utils/enum";
import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../../../src/theme.js";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IconButton, Paper } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useFormik } from "formik";
import { ProductDescriptionSareeSchema } from "../../../utils/validation.js";
import { ddlListingStatusOptions } from "../FakeProductDb.js";

function AdditionalDescription({ handleErrorCount, item }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const initialValues = {
    description: "",
    producttitle: "",
    trend: "",
    constructiontype: "",
    handloomproduct: "",
    handembroidery: "",
    patternprinttype: "",
    borderdetails: "",
    blousepattern: "",
    decorativematerial: "",
    blousefabric: "",
    typeofembroidery: "",
    embroiderymethod: "",
    secondarycolor: "",
    weight:"",
    borderlength:"",
  };

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      validateOnChange: false,
      validateOnBlur: false,
      initialValues,
      onSubmit: onSubmit,
      validationSchema: ProductDescriptionSareeSchema,
    });

  useEffect(() => {
    const err = {
      isError: Object.keys(errors).length === 0 ? false : true,
      errorCount:
        Object.keys(errors).length === 0 ? "" : Object.keys(errors).length,
      id: item?.id,
    };
    handleErrorCount(err);
  }, [errors]);

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
  return (
    <Box>
      {/* //-------- Listing information */}
      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: "13px", sm: "14px", md: "16px", lg: "16px" },
          fontWeight: 600,
          marginTop: ".5rem",
        }}
      >
        General Description
      </Typography>
      <Divider />
      <Box
        display="grid"
        gap="30px"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        sx={{
          padding: { xs: ".5rem", sm: ".8rem", md: "2rem", lg: "2rem" },
          "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
        }}
      >
        <Element
          eletype={inputType.input}
          label="Product Title"
          placeholder="Please enter Product Title"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "producttitle",
          }}
          errorText={touched.producttitle && errors.producttitle}
          value={values.producttitle}
          styles={{ gridColumn: "span 2" }}
        />
        <Element
          eletype={inputType.input}
          label="Construction Type"
          placeholder="Please enter Construction Type"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "constructiontype",
          }}
          errorText={touched.constructiontype && errors.constructiontype}
          value={values.constructiontype}
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

        <Element
          eletype={inputType.select}
          label="Handloom Product"
          placeholder="Please select a Handloom Product"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "handloomproduct",
          }}
          errorText={touched.handloomproduct && errors.handloomproduct}
          value={values.handloomproduct}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.select}
          label="Hand Embroidery"
          placeholder="Please select a Hand Embroidery"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "handembroidery",
          }}
          errorText={touched.handembroidery && errors.handembroidery}
          value={values.handembroidery}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.select}
          label="Type of Embroidery"
          placeholder="Please select a Type of Embroidery"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "typeofembroidery",
          }}
          errorText={touched.typeofembroidery && errors.typeofembroidery}
          value={values.typeofembroidery}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.select}
          label="Embroidery Method"
          placeholder="*Please select a Embroidery Method"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "embroiderymethod",
          }}
          errorText={touched.embroiderymethod && errors.embroiderymethod}
          value={values.embroiderymethod}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.multiselect}
          label="Trend"
          placeholder="Please select a Trend"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "trend",
          }}
          errorText={touched.trend && errors.trend}
          value={values.trend}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.multiselect}
          label="Secondary Color"
          placeholder="*Please select a Secondary Color"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "secondarycolor",
          }}
          errorText={touched.secondarycolor && errors.secondarycolor}
          value={values.secondarycolor}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.multiselect}
          label="Pattern/Print Type"
          placeholder="Please select a Pattern/Print Type"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "patternprinttype",
          }}
          errorText={touched.patternprinttype && errors.patternprinttype}
          value={values.patternprinttype}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.multiselect}
          label="Border Details"
          placeholder="Please select a Border Details"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "borderdetails",
          }}
          errorText={touched.borderdetails && errors.borderdetails}
          value={values.borderdetails}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.multiselect}
          label="Blouse Pattern"
          placeholder="*Please select a Blouse Pattern"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "blousepattern",
          }}
          errorText={touched.blousepattern && errors.blousepattern}
          value={values.blousepattern}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.multiselect}
          label="Decorative Material"
          placeholder="*Please select a Decorative Material"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "decorativematerial",
          }}
          errorText={touched.decorativematerial && errors.decorativematerial}
          value={values.decorativematerial}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.multiselect}
          label="Blouse Fabric"
          placeholder="*Please select a Blouse Fabric"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "blousefabric",
          }}
          errorText={touched.blousefabric && errors.blousefabric}
          value={values.blousefabric}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />
      </Box>

        {/* //-------- Sari Details */}
        <Typography
        variant="h5"
        sx={{
          fontSize: { xs: "13px", sm: "14px", md: "16px", lg: "16px" },
          fontWeight: 600,
          marginTop: ".5rem",
        }}
      >
        Sari Details
      </Typography>
      <Divider />
      <Box
        display="grid"
        gap="30px"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        sx={{
          padding: { xs: ".5rem", sm: ".8rem", md: "2rem", lg: "2rem" },
          "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
        }}
      >
        <Element
          eletype={inputType.number}
          label="Weight"
          placeholder="Please enter Weight"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "weight",
          }}
          errorText={touched.weight && errors.weight}
          value={values.weight}
          styles={{ gridColumn: "span 2" }}
        />

<Element
          eletype={inputType.select}
          label="Border Length"
          placeholder="Please select a Border Length"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "borderlength",
          }}
          errorText={touched.borderlength && errors.borderlength}
          value={values.borderlength}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

      </Box>

      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          sx={{
            padding: ".5rem 3rem .5rem 3rem",
            margin: ".5rem",
            background: "red",
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            padding: ".5rem 3rem .5rem 3rem",
            margin: ".5rem",
            background: "green",
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default AdditionalDescription;
