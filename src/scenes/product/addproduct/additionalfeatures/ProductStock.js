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
import { ProductStockSchema } from "../../../../utils/validation.js";
import { ddlListingStatusOptions } from "../../FakeProductDb.js";

function ProductStock({ handleErrorCount, item }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const initialValues = {
    sellerskuid: "",
    listingstatus: "",
    fullfillmentby: "",
    procurementtype: "",
    procurementsla: "",
    stock: "",
    shippingprovider: "",
    ldc: "",
    zdc: "",
    ndc: "",
    length: "",
    breadth: "",
    height: "",
    weight: "",
    hsn: "",
    luxurycess: "",
    taxcode: "",
    countryoforigin: "",
    manufactdetails: "",
    packerdetails: "",
    importerdetails: "",
  };

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      validateOnChange: false,
      validateOnBlur: false,
      initialValues,
      onSubmit: onSubmit,
      validationSchema: ProductStockSchema,
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
        Listing Details
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
          label="*Seller SKU ID"
          placeholder="*Please enter Seller SKU ID"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "sellerskuid",
          }}
          errorText={touched.sellerskuid && errors.sellerskuid}
          value={values.sellerskuid}
          styles={{ gridColumn: "span 2" }}
        />

        <Element
          eletype={inputType.select}
          label="*Listing Status"
          placeholder="*Please select a Listing Status"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "listingstatus",
          }}
          errorText={touched.listingstatus && errors.listingstatus}
          value={values.rollistingstatuse}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />
      </Box>

      {/* //------------Inventory Details */}
      <Typography variant="h5" sx={{ fontSize:{xs:"13px",sm:"14px",md:"16px",lg:"16px"},fontWeight: 600, marginTop: ".5rem" }}>
        Inventory Details
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
          label="*Fullfillment By"
          placeholder="*Please select a Fullfillment By"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "fullfillmentby",
          }}
          errorText={touched.fullfillmentby && errors.fullfillmentby}
          value={values.fullfillmentby}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.select}
          label="*Procurement Type"
          placeholder="*Please select a Procurement Type"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "procurementtype",
          }}
          errorText={touched.procurementtype && errors.procurementtype}
          value={values.procurementtype}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.select}
          label="*Procurement SLA"
          placeholder="*Please select a Procurement SLA"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "procurementsla",
          }}
          errorText={touched.procurementtype && errors.procurementsla}
          value={values.procurementsla}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.number}
          label="*Stock"
          placeholder="*Please enter Stock"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "stock",
          }}
          errorText={touched.stock && errors.stock}
          value={values.stock}
          styles={{ gridColumn: "span 2" }}
        />
      </Box>

      {/* //-------- Shipping provider */}
      <Typography variant="h5" sx={{ fontSize:{xs:"13px",sm:"14px",md:"16px",lg:"16px"}, fontWeight: 600, marginTop: ".5rem" }}>
        Shipping Provider
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
          label="Shipping Provider"
          placeholder="Please select a Shipping Provider"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "shippingprovider",
          }}
          errorText={touched.shippingprovider && errors.shippingprovider}
          value={values.shippingprovider}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />
      </Box>

      {/* //-------- Delivery Charge to  Customer */}
      <Typography variant="h5" sx={{ fontSize:{xs:"13px",sm:"14px",md:"16px",lg:"16px"},fontWeight: 600, marginTop: ".5rem" }}>
        Delivery Charge to Customer
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
          label="Local delivery charge"
          placeholder="Please enter Local delivery charge"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "ldc",
          }}
          errorText={touched.ldc && errors.ldc}
          value={values.ldc}
          styles={{ gridColumn: "span 2" }}
        />

        <Element
          eletype={inputType.number}
          label="Zonal delivery charge"
          placeholder="Please enter Zonal delivery charge"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "zdc",
          }}
          errorText={touched.zdc && errors.zdc}
          value={values.zdc}
          styles={{ gridColumn: "span 2" }}
        />

        <Element
          eletype={inputType.number}
          label="National delivery charge"
          placeholder="Please enter National delivery charge"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "ndc",
          }}
          errorText={touched.ndc && errors.ndc}
          value={values.ndc}
          styles={{ gridColumn: "span 2" }}
        />
      </Box>

      {/* //-------- Package Details */}
      <Typography variant="h5" sx={{fontSize:{xs:"13px",sm:"14px",md:"16px",lg:"16px"}, fontWeight: 600, marginTop: ".5rem" }}>
        Package Details
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
          label="*Length"
          placeholder="*Please enter Length"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "length",
          }}
          errorText={touched.length && errors.length}
          value={values.length}
          styles={{ gridColumn: "span 2" }}
        />

        <Element
          eletype={inputType.number}
          label="*Breadth"
          placeholder="*Please enter Breadth"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "breadth",
          }}
          errorText={touched.breadth && errors.breadth}
          value={values.breadth}
          styles={{ gridColumn: "span 2" }}
        />

        <Element
          eletype={inputType.number}
          label="*Height"
          placeholder="*Please enter Height"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "height",
          }}
          errorText={touched.height && errors.height}
          value={values.height}
          styles={{ gridColumn: "span 2" }}
        />

        <Element
          eletype={inputType.number}
          label="*Weight"
          placeholder="*Please enter Weigth"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "weight",
          }}
          errorText={touched.weight && errors.weight}
          value={values.weight}
          styles={{ gridColumn: "span 2" }}
        />
      </Box>

      {/* //-------- Tax Details */}
      <Typography variant="h5" sx={{fontSize:{xs:"13px",sm:"14px",md:"16px",lg:"16px"}, fontWeight: 600, marginTop: ".5rem" }}>
        Listing Details
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
          label="*HSN"
          placeholder="*Please enter HSN"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "hsn",
          }}
          errorText={touched.hsn && errors.hsn}
          value={values.hsn}
          styles={{ gridColumn: "span 2" }}
        />

        <Element
          eletype={inputType.number}
          label="Luxury Cess"
          placeholder="Please Luxury Cess"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "luxurycess",
          }}
          errorText={touched.luxurycess && errors.luxurycess}
          value={values.luxurycess}
          styles={{ gridColumn: "span 2" }}
        />

        <Element
          eletype={inputType.select}
          label="*Tax Code "
          placeholder="*Please select a Tax Code "
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "taxcode",
          }}
          errorText={touched.taxcode && errors.taxcode}
          value={values.taxcode}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />
      </Box>

      {/* //-------- Manufacturing Details */}
      <Typography variant="h5" sx={{fontSize:{xs:"13px",sm:"14px",md:"16px",lg:"16px"}, fontWeight: 600, marginTop: ".5rem" }}>
        Manufacturing Details
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
          label="*Country Of Origin "
          placeholder="*Please select a Country Of Origin "
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "countryoforigin",
          }}
          errorText={touched.countryoforigin && errors.countryoforigin}
          value={values.countryoforigin}
          styles={{ gridColumn: "span 2" }}
          options={ddlListingStatusOptions}
        />

        <Element
          eletype={inputType.input}
          label="Manufacturer Details "
          placeholder="Please enter Manufacturer Details "
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "manufactdetails",
          }}
          errorText={touched.manufactdetails && errors.manufactdetails}
          value={values.manufactdetails}
          styles={{ gridColumn: "span 2" }}
        />

        <Element
          eletype={inputType.input}
          label="Packer Details"
          placeholder="Please enter Packer Details"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "packerdetails",
          }}
          errorText={touched.packerdetails && errors.packerdetails}
          value={values.packerdetails}
          styles={{ gridColumn: "span 2" }}
        />

        <Element
          eletype={inputType.input}
          label="Importer Details"
          placeholder="Please enter Importer Details"
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
            name: "importerdetails",
          }}
          errorText={touched.importerdetails && errors.importerdetails}
          value={values.importerdetails}
          styles={{ gridColumn: "span 2" }}
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

export default ProductStock;
