import React from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../../src/theme.js";
import { useFormik } from "formik";
import { CatgorySchema } from "../../../utils/validation.js";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { inputType } from "../../../utils/enum.js";
import Element from "../../../Form/Element";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const categoryData = [
  {
    id: 1,
    label: "Saree",
    value: "Saree",
  },
  {
    id: 2,
    label: "Suit",
    value: "Suit",
  },
];

const productStatusData = [
  {
    id: 1,
    label: "In Stock",
    value: "instock",
  },
  {
    id: 2,
    label: "Out of Stock",
    value: "outofstock",
  },
];
const subCategoryData = [
  {
    id: 1,
    label: "Kanjivaram",
    value: "Kanjivaram",
  },
  {
    id: 2,
    label: "Banarasi",
    value: "Banarasi",
  },
  {
    id: 3,
    label: "Chikankari",
    value: "Chikankari",
  },
  {
    id: 4,
    label: "Bandhani",
    value: "Bandhani",
  },
  {
    id: 5,
    label: "Nauvari",
    value: "Nauvari",
  },
  {
    id: 6,
    label: "Bomkai",
    value: "Bomkai",
  },
  {
    id: 7,
    label: "Chanderi",
    value: "Chanderi",
  },
  {
    id: 8,
    label: "Kasavu",
    value: "Kasavu",
  },
  {
    id: 9,
    label: "Phulkari",
    value: "Phulkari",
  },
];

const names = [
  {
    id: 1,
    label: "Latest Product",
    value: "latestproduct",
  },
  {
    id: 2,
    label: "Trending Product",
    value: "trendingproduct",
  },
  {
    id: 3,
    label: "Discounted Product",
    value: "discountedproduct",
  },
  {
    id: 4,
    label: "Updated Product",
    value: "updatedproduct",
  },
  {
    id: 5,
    label: "Newly Launched Product",
    value: "newlylaunchedproduct",
  },
];

function TabContent1({ dataCheck }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const navigate = useNavigate();
  const initialValues = {
    productname: "",
    shortdescription: "",
    productimages: "",
    category: "",
    subcategory: "",
  };

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues,
      onSubmit: onSubmit,
      validationSchema: CatgorySchema,
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

  return (
    <>
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
              label="Product Name"
              placeholder="Please enter Product Name"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "productname",
              }}
              errorText={touched.productname && errors.productname}
              value={values.productname}
              styles={{ gridColumn: "span 4" }}
            />

            <Element
              eletype={inputType.editor}
              label="Short Description"
              placeholder="Please enter Product Short Description"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "shortdescription",
              }}
              errorText={touched.shortdescription && errors.shortdescription}
              value={values.shortdescription}
              styles={{ gridColumn: "span 4" }}
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
              styles={{ gridColumn: "span 4" }}
            />
            <Element
              eletype={inputType.select}
              label="Category"
              placeholder="Please select a Category"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "category",
              }}
              errorText={touched.category && errors.category}
              value={values.category}
              styles={{ gridColumn: "span 2" }}
              options={categoryData}
            />

            <Element
              eletype={inputType.select}
              label="Sub-Category"
              placeholder="Please select a Sub-Category"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "subcategory",
              }}
              errorText={touched.subcategory && errors.subcategory}
              value={values.subcategory}
              styles={{ gridColumn: "span 2" }}
              options={subCategoryData}
            />

            <Element
              eletype={inputType.input}
              label="Regular Price"
              placeholder="Please enter Regular Price"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "regularprice",
              }}
              errorText={touched.regularprice && errors.regularprice}
              value={values.regularprice}
              styles={{ gridColumn: "span 2" }}
            />

            <Element
              eletype={inputType.input}
              label="Sales Price"
              placeholder="Please enter Sales Price"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "salesprice",
              }}
              errorText={touched.salesprice && errors.salesprice}
              value={values.salesprice}
              styles={{ gridColumn: "span 2" }}
            />

            <Element
              eletype={inputType.input}
              label="Product Quantity"
              placeholder="Please enter Product Quantity"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "productquantity",
              }}
              errorText={touched.productquantity && errors.productquantity}
              value={values.productquantity}
              styles={{ gridColumn: "span 2" }}
            />

            <Element
              eletype={inputType.input}
              label="Product Slug"
              placeholder="Please enter Product Slug"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "productslug",
              }}
              errorText={touched.productslug && errors.productslug}
              value={values.productslug}
              styles={{ gridColumn: "span 2" }}
            />
            <Element
              eletype={inputType.multiselect}
              label="Tag"
              placeholder="Please select a Tag"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "tag",
              }}
              errorText={touched.tag && errors.tag}
              value={values.tag}
              styles={{ gridColumn: "span 2" }}
              options={names}
            />
            <Element
              eletype={inputType.editor}
              label="Long Description"
              placeholder="Please enter Product Long Description"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "longdescription",
              }}
              errorText={touched.longdescription && errors.longdescription}
              value={values.longdescription}
              styles={{ gridColumn: "span 4" }}
            />
            <Element
              eletype={inputType.input}
              label="Product SKU"
              placeholder="Please enter Product SKU"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "productsku",
              }}
              errorText={touched.productsku && errors.productsku}
              value={values.productsku}
              styles={{ gridColumn: "span 2" }}
            />

            <Element
              eletype={inputType.select}
              label="Product Status"
              placeholder="Please select a Product Status"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "productstatus",
              }}
              errorText={touched.productstatus && errors.productstatus}
              value={values.productstatus}
              styles={{ gridColumn: "span 2" }}
              options={productStatusData}
            />

            <Element
              eletype={inputType.autocompletewithsearch}
              label="UpSell"
              placeholder="Please select a Product for Upsell"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "productupsell",
              }}
              errorText={touched.productupsell && errors.productupsell}
              value={values.productupsell}
              styles={{ gridColumn: "span 2" }}
            />

            <Element
              eletype={inputType.autocompletewithsearch}
              label="CrossSell"
              placeholder="Please select a Product for CrossSell"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "productcrosssell",
              }}
              errorText={touched.productcrosssell && errors.productcrosssell}
              value={values.productcrosssell}
              styles={{ gridColumn: "span 2" }}
            />

          <Element
              eletype={inputType.input}
              label="Weight"
              placeholder="Please enter weight"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "weight",
              }}
              errorText={touched.weight && errors.weight}
              value={values.weight}
              styles={{ gridColumn: "span 1" }}
            />
            <Element
              eletype={inputType.input}
              label="Length"
              placeholder="Please enter length"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "length",
              }}
              errorText={touched.length && errors.length}
              value={values.length}
              styles={{ gridColumn: "span 1" }}
            />
            <Element
              eletype={inputType.input}
              label="Width"
              placeholder="Please enter width"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "width",
              }}
              errorText={touched.width && errors.width}
              value={values.width}
              styles={{ gridColumn: "span 1" }}
            />
            <Element
              eletype={inputType.input}
              label="Height"
              placeholder="Please enter height"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "height",
              }}
              errorText={touched.height && errors.height}
              value={values.height}
              styles={{ gridColumn: "span 1" }}
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
                pathname: "/dashboard/product",
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
            Add Product
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default TabContent1;
