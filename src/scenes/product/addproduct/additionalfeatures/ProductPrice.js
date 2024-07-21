import Element from "../../../../Form/Element";
import { inputType } from "../../../../utils/enum";
import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../../../../src/theme.js";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IconButton, Paper } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useFormik } from "formik";
import { ProductPriceSchema } from "../../../../utils/validation.js";
import { ddlListingStatusOptions } from "../../FakeProductDb.js";

function ProductPrice({handleErrorCount, item}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const initialValues = {
        mrp: "",
        yoursellingprice: "",
        minorderquantity: "",
      };
    
      const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
        useFormik({
          enableReinitialize: true,
          validateOnChange: false,
          validateOnBlur: false,
          initialValues,
          onSubmit: onSubmit,
          validationSchema: ProductPriceSchema,
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
      <Typography variant="h5" sx={{ fontSize:{xs:"13px",sm:"14px",md:"16px",lg:"16px"}, fontWeight: 600, marginTop: ".5rem" }}>
        Pricing Details
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
          label="*MRP"
          placeholder="*Please enter MRP"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "mrp",
          }}
          errorText={touched.mrp && errors.mrp}
          value={values.mrp}
          styles={{ gridColumn: "span 2" }}
        />

<Element
          eletype={inputType.number}
          label="*Your selling price"
          placeholder="*Please enter Your selling price"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "yoursellingprice",
          }}
          errorText={touched.yoursellingprice && errors.yoursellingprice}
          value={values.yoursellingprice}
          styles={{ gridColumn: "span 2" }}
        />



        <Element
          eletype={inputType.select}
          label="*Minimum Order Quantity"
          placeholder="*Please select a Minimum Order Quantity"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "minorderquantity",
          }}
          errorText={touched.minorderquantity && errors.minorderquantity}
          value={values.minorderquantity}
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
    )
}

export default ProductPrice
