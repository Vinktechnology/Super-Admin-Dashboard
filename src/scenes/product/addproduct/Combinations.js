import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import ProductImages from "./ProductImages"; // Import the ProductImages component
import { Box, Button, TextField, Typography } from "@mui/material";
import { formErrorStyle } from "../../../utils/constant";

const validationSchema = Yup.object().shape({
  combinations: Yup.array().of(
    Yup.object().shape({
      SKUID: Yup.string().required("SKUID is required"),
      mrp: Yup.number()
        .required("MRP is required")
        .positive("MRP must be positive")
        .integer("MRP must be an integer"),
      sellingprice: Yup.number()
        .required("Selling Price is required")
        .positive("Selling Price must be positive")
        .integer("Selling Price must be an integer"),
      stock: Yup.number()
        .required("Stock is required")
        .positive("Stock must be positive")
        .integer("Stock must be an integer"),
      length: Yup.number()
        .required("Length is required")
        .positive("Length must be positive"),
      breadth: Yup.number()
        .required("Breadth is required")
        .positive("Breadth must be positive"),
      height: Yup.number()
        .required("Height is required")
        .positive("Height must be positive"),
      width: Yup.number()
        .required("Width is required")
        .positive("Width must be positive"),
      images: Yup.array()
        .of(Yup.string())
        .max(5, "You can upload a maximum of 5 images"), // Validate images as an array of strings (URLs)
    })
  ),
});

const CombinationForm = ({ colorOptions, blouseOptions }) => {
  // const colorOptions = [
  //     { id: 3, name: 'green', value: 'green', label: 'green' },
  //     { id: 1, name: 'blue', value: 'blue', label: 'blue' },
  // ];

  // const blouseOptions = [
  //     { id: 1, name: 'semi-stitched', value: 'semi stiched', label: 'semi-stitched' },
  //     { id: 2, name: 'stitched', value: 'stitched', label: 'stitched' },
  // ];

  const generateCombinations = (colors, blouses) => {
    const combinations = [];
    colors.forEach((color) => {
      blouses.forEach((blouse) => {
        combinations.push({
          color: color.value,
          blouse: blouse.value,
          SKUID: "",
          mrp: "",
          sellingprice: "",
          stock: "",
          length: "",
          breadth: "",
          height: "",
          width: "",
          images: [], // Initialize an empty array for images
        });
      });
    });
    return combinations;
  };

  const initialValues = {
    combinations: generateCombinations(colorOptions, blouseOptions),
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form values:", values);
      }}
    >
      {({ values, errors, touched }) => (
        <Form>
          <FieldArray name="combinations">
            {() => (
              <div style={{   height:"500px",
                overflow:"auto",}}>
                {values.combinations.map((combination, index) => (
                  <Box
                    key={index}
                    sx={{
                      marginBottom: "20px",
                      display: "flex",
                      flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "row",
                        lg: "row",
                        xl: "row",
                      },
                      border: "1px solid #ccc",
                      padding: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        width: {xs:"100%", sm:"100%", md:"60%", lg:"60%"},
                        display: "flex",
                        flexWrap: "wrap",
                      }}
                    >
                      <div
                        style={{
                          margin: "10px 3px 10px 3px",
                        }}
                      >
                        <label>Color:</label>
                        <br />
                        <Field
                          style={{
                            border: "none",
                            borderBottom: "2px solid grey",
                          }}
                          name={`combinations.${index}.color`}
                          readOnly
                        />
                      </div>
                      <div
                        style={{
                          margin: "10px 3px 10px 3px",
                        }}
                      >
                        <label>Blouse:</label> <br />
                        <Field
                          style={{
                            border: "none",
                            borderBottom: "2px solid grey",
                          }}
                          name={`combinations.${index}.blouse`}
                          readOnly
                        />
                      </div>
                      <div
                        style={{
                          margin: "10px 3px 10px 3px",
                        }}
                      >
                        <label>SKUID:</label>
                        <br />
                        <Field
                          style={{
                            border: "none",
                            borderBottom: "2px solid grey",
                          }}
                          name={`combinations.${index}.SKUID`}
                        />
                        {errors.combinations?.[index]?.SKUID &&
                        touched.combinations?.[index]?.SKUID ? (
                          <div style={formErrorStyle}>
                            {errors.combinations[index].SKUID}
                          </div>
                        ) : null}
                      </div>
                      <div
                        style={{
                          margin: "10px 3px 10px 3px",
                        }}
                      >
                        <label>MRP:</label>
                        <br />
                        <Field
                         type={"number"}
                          style={{
                            border: "none",
                            borderBottom: "2px solid grey",
                          }}
                          name={`combinations.${index}.mrp`}
                        />
                        {errors.combinations?.[index]?.mrp &&
                        touched.combinations?.[index]?.mrp ? (
                          <div style={formErrorStyle}>
                            {errors.combinations[index].mrp}
                          </div>
                        ) : null}
                      </div>
                      <div
                        style={{
                          margin: "10px 3px 10px 3px",
                        }}
                      >
                        <label>Selling Price:</label>
                        <br />
                        <Field
                        type={"number"}
                          style={{
                            border: "none",
                            borderBottom: "2px solid grey",
                          }}
                          name={`combinations.${index}.sellingprice`}
                        />
                        {errors.combinations?.[index]?.sellingprice &&
                        touched.combinations?.[index]?.sellingprice ? (
                          <div style={formErrorStyle}>
                            {errors.combinations[index].sellingprice}
                          </div>
                        ) : null}
                      </div>
                      <div
                        style={{
                          margin: "10px 3px 10px 3px",
                        }}
                      >
                        <label>Stock:</label>
                        <br />
                        <Field
                        type={"number"}
                          style={{
                            border: "none",
                            borderBottom: "2px solid grey",
                          }}
                          name={`combinations.${index}.stock`}
                        />
                        {errors.combinations?.[index]?.stock &&
                        touched.combinations?.[index]?.stock ? (
                          <div style={formErrorStyle}>
                            {errors.combinations[index].stock}
                          </div>
                        ) : null}
                      </div>
                      <div
                        style={{
                          margin: "10px 3px 10px 3px",
                        }}
                      >
                        <label>Length:</label>
                        <br />
                        <Field
                        type={"number"}
                          style={{
                            border: "none",
                            borderBottom: "2px solid grey",
                          }}
                          name={`combinations.${index}.length`}
                        />
                        {errors.combinations?.[index]?.length &&
                        touched.combinations?.[index]?.length ? (
                          <div style={formErrorStyle}>
                            {errors.combinations[index].length}
                          </div>
                        ) : null}
                      </div>
                      <div
                        style={{
                          margin: "10px 3px 10px 3px",
                        }}
                      >
                        <label>Breadth:</label>
                        <br />
                        <Field
                        type={"number"}
                          style={{
                            border: "none",
                            borderBottom: "2px solid grey",
                          }}
                          name={`combinations.${index}.breadth`}
                        />
                        {errors.combinations?.[index]?.breadth &&
                        touched.combinations?.[index]?.breadth ? (
                          <div style={formErrorStyle}>
                            {errors.combinations[index].breadth}
                          </div>
                        ) : null}
                      </div>
                      <div
                        style={{
                          margin: "10px 3px 10px 3px",
                        }}
                      >
                        <label>Height:</label>
                        <br />
                        <Field
                        type={"number"}
                          style={{
                            border: "none",
                            borderBottom: "2px solid grey",
                          }}
                          name={`combinations.${index}.height`}
                        />
                        {errors.combinations?.[index]?.height &&
                        touched.combinations?.[index]?.height ? (
                          <div style={formErrorStyle}>
                            {errors.combinations[index].height}
                          </div>
                        ) : null}
                      </div>
                      <div
                        style={{
                          margin: "10px 3px 10px 3px",
                        }}
                      >
                        <label>Width:</label>
                        <br />
                        <Field
                        type={"number"}
                          style={{
                            border: "none",
                            borderBottom: "2px solid grey",
                          }}
                          name={`combinations.${index}.width`}
                        />
                        {errors.combinations?.[index]?.width &&
                        touched.combinations?.[index]?.width ? (
                          <div style={formErrorStyle}>
                            {errors.combinations[index].width}
                          </div>
                        ) : null}
                      </div>
                    </Box>
                    <Box sx={{ width: {xs:"100%", sm:"100%", md:"40%", lg:"40%"}}}>
                      <div
                        style={{
                          margin: "10px 3px 10px 3px",
                        }}
                      >
                        <label>Product Images:</label>
                        <Field
                          style={{
                            border: "none",
                            borderBottom: "2px solid grey",
                          }}
                          name={`combinations.${index}.images`}
                          component={ProductImages}
                          index={index}
                        />
                        {errors.combinations?.[index]?.images &&
                        touched.combinations?.[index]?.images ? (
                          <div style={formErrorStyle}>
                            {errors.combinations[index].images}
                          </div>
                        ) : null}
                      </div>
                    </Box>
                  </Box>
                ))}
              </div>
            )}
          </FieldArray>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
           type="submit"
          sx={{
            padding: ".5rem 3rem .5rem 3rem",
            margin: ".5rem",
            background: "red",
          }}
        >
          Save and Go back
        </Button>
        <Button
          variant="contained"
          type="submit"
          sx={{
            padding: ".5rem 3rem .5rem 3rem",
            margin: ".5rem",
            background: "green",
          }}
        >
          Send To QC
        </Button>
      </Box>
        </Form>
      )}
    </Formik>
  );
};

export default CombinationForm;
