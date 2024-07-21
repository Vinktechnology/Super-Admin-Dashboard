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

function ProductDescription({ handleErrorCount, item }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const initialValues = {
    size: "",
    occasion: "",
    stylecode: "",
    fabric: "",
    occasion: "",
    pattern: "",
    type: "",
    saripurity: "",
    color: "",
    brandcolor: "",
    idealfor: "",
    packof: "",
    blousepiecetype: "",
    fabriccare: "",
    sarilength: "",
    blousepiecelength: "",
    saristyle: "",
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
        Product Description
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
          eletype={inputType.select}
          label="*Size"
          placeholder="*Please select a Size"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "size",
          }}
          errorText={touched.size && errors.size}
          value={values.size}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.input}
          label="*Style Code"
          placeholder="*Please enter Style Code"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "stylecode",
          }}
          errorText={touched.stylecode && errors.stylecode}
          value={values.stylecode}
          styles={{ gridColumn: "span 2" }}
        />

        <Element
          eletype={inputType.multiselect}
          label="*Occasion"
          placeholder="*Please select a Occasion"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "occasion",
          }}
          errorText={touched.occasion && errors.occasion}
          value={values.occasion}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.multiselect}
          label="*Fabric"
          placeholder="*Please select a Fabric"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "fabric",
          }}
          errorText={touched.fabric && errors.fabric}
          value={values.fabric}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.multiselect}
          label="*Pattern"
          placeholder="*Please select a Pattern"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "pattern",
          }}
          errorText={touched.pattern && errors.pattern}
          value={values.pattern}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.select}
          label="*Type"
          placeholder="*Please select a Type"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "type",
          }}
          errorText={touched.type && errors.type}
          value={values.type}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.select}
          label="*Sari Purity"
          placeholder="*Please select a Sari Purity"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "saripurity",
          }}
          errorText={touched.saripurity && errors.saripurity}
          value={values.saripurity}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.multiselect}
          label="*Color"
          placeholder="*Please select a Color"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "color",
          }}
          errorText={touched.color && errors.color}
          value={values.color}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.multiselect}
          label="*Brand Color"
          placeholder="*Please select a Brand Color"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "brandcolor",
          }}
          errorText={touched.brandcolor && errors.brandcolor}
          value={values.brandcolor}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.select}
          label="*Ideal For"
          placeholder="*Please select a Ideal For"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "idealfor",
          }}
          errorText={touched.idealfor && errors.idealfor}
          value={values.idealfor}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.select}
          label="*Pack Of"
          placeholder="*Please select a Pack Of"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "packof",
          }}
          errorText={touched.packof && errors.packof}
          value={values.packof}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.select}
          label="*Blouse Piece Type"
          placeholder="*Please select a Blouse Piece Type"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "blousepiecetype",
          }}
          errorText={touched.blousepiecetype && errors.blousepiecetype}
          value={values.blousepiecetype}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.multiselect}
          label="*Fabric Care "
          placeholder="*Please select a Fabric Care "
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "fabriccare",
          }}
          errorText={touched.fabriccare && errors.fabriccare}
          value={values.fabriccare}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.select}
          label="*Sari Length "
          placeholder="*Please select a Sari Length "
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "sarilength",
          }}
          errorText={touched.sarilength && errors.sarilength}
          value={values.sarilength}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.number}
          label="*Blouse Piece Length"
          placeholder="*Please enter Blouse Piece Length"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "blousepiecelength",
          }}
          errorText={touched.blousepiecelength && errors.blousepiecelength}
          value={values.blousepiecelength}
          styles={{ gridColumn: "span 2" }}
        />

        <Element
          eletype={inputType.select}
          label="*Sari Style "
          placeholder="*Please select a Sari Style "
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "saristyle",
          }}
          errorText={touched.saristyle && errors.saristyle}
          value={values.saristyle}
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

export default ProductDescription;
