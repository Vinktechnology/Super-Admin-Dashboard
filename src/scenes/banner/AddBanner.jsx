import React, { useEffect, useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { tokens } from "../../../src/theme.js";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Grid,
  IconButton,
  Typography,
  Box,
  CardContent,
  useTheme,
  Card,
  CardActions,
} from "@mui/material";
import {
  RemoveCircleOutline,
  AddCircleOutline,
  MinimizeTwoTone,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  addNewCategoryThunk,
  getCategoryByIdThunk,
  updateCategoryThunk,
} from "../../store/slices/category/category.slice.js";
import Header from "../../components/Header.jsx";
import { inputType } from "../../utils/enum";
import Element from "../../Form/Element";

// ['', 'Advertisement'],- marketing type
const ddlScrollingType = [
  {
    value: "Carousel",
    label: "Carousel",
  },
  {
    value: "Single",
    label: "Single Image",
  },
];

const ddlOnScreenDisplay = [
  {
    value: "Home",
    label: "Home",
  },
  {
    value: "PDP",
    label: "PDP",
  },
  {
    value: "PLP",
    label: "PLP",
  },
  {
    value: "CART",
    label: "CART",
  },
  {
    value: "WISHLIST",
    label: "WISHLIST",
  },
  {
    value: "Checkout",
    label: "Checkout",
  },
];

const AddBanner = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const params = useParams();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    title: "",
    onScreenToBeDisplayed: "",
    scrollingType: "",
    image: [
      {
        imageUrl: "",
        navigationUrl: "",
        timeSlots: {
          from: "",
          to: "",
        },
        startDate: "",
        endDate: "",
        companiesname: "",
        typeOfMarketing: "",
      },
    ],
  });

  useEffect(() => {
    if (params.Id) {
      dispatch(getCategoryByIdThunk(params.Id))
        .unwrap()
        .then((da) => {
          console.log(" data of id", da);

          // setInitialValues({
          //   category: da.name || "",
          //   slug: da.slug || "",
          //   description: da.description || "",
          //   thumbnail: da.imageLink || "",
          //   sampleimages: da.sampleimages || [],
          // });
        });
    }
  }, [params.Id]);

  // Validation Schema
  const validationSchema = Yup.object({
    title: Yup.string().required("Banner Name is required."),
    onScreenToBeDisplayed: Yup.mixed()
      .oneOf(
        ["Home", "PDP", "PLP", "CART", "WISHLIST", "Checkout"],
        "Please select an option"
      )
      .required("Please select an option"),
    scrollingType: Yup.mixed()
      .oneOf(["Carousel", "Single"], "Please select an option")
      .required("Please select an option"),
    image: Yup.array()
      .of(
        Yup.object().shape({
          imageUrl: Yup.string().url("Invalid URL").required("Required"),
          navigationUrl: Yup.string().url("Invalid URL").required("Required"),
          timeSlots: Yup.object().shape({
            from: Yup.string().required("Required"),
            to: Yup.string().required("Required"),
          }),
          startDate: Yup.date().required("Required"),
          endDate: Yup.date().required("Required"),
          companiesname: Yup.string().required("Required"),
          typeOfMarketing: Yup.string().required("Required"),
        })
      )
      .required("At least one image is required"),
  });

  async function onSubmit(data) {
    console.log("data from components", data);
    if (params.Id) {
      dispatch(
        updateCategoryThunk({
          ...data,
          id: params.Id,
        })
      )
        .unwrap()
        .then(() => {
          navigate({
            pathname: "/dashboard/category",
          });
        });
    } else {
      dispatch(
        addNewCategoryThunk({
          ...data,
        })
      )
        .unwrap()
        .then(() => {
          navigate({
            pathname: "/dashboard/category",
          });
        });
    }
  }

  return (
    <Box m="20px">
      <Header
        title={params.Id ? "EDIT BANNER" : "CREATE BANNER"}
        subtitle={params.Id ? "Edit a Banner" : "Create a New Banner"}
      />

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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, handleChange, handleBlur, touched, errors }) => (
              <Form>
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
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Element
                          eletype={inputType.input}
                          label="*Please enter Banners Name"
                          placeholder="Please enter Banners Name"
                          inputProps={{
                            onChange: handleChange,
                            onBlur: handleBlur,
                            name: "title",
                          }}
                          errorText={touched.title && errors.title}
                          value={values.title}
                          styles={{ gridColumn: "span 2" }}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Element
                          eletype={inputType.select}
                          label="*Please select Display Type"
                          placeholder="*Please select a Display Type"
                          inputProps={{
                            onChange: handleChange,
                            onBlur: handleBlur,
                            name: "onScreenToBeDisplayed",
                          }}
                          errorText={
                            touched.onScreenToBeDisplayed &&
                            errors.onScreenToBeDisplayed
                          }
                          value={values.onScreenToBeDisplayed}
                          styles={{ minWidth: "100%" }}
                          options={ddlOnScreenDisplay}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Element
                          eletype={inputType.select}
                          label="*Please select Scrolling Type"
                          placeholder="*Please select a Scrolling Type"
                          inputProps={{
                            onChange: handleChange,
                            onBlur: handleBlur,
                            name: "scrollingType",
                          }}
                          errorText={
                            touched.scrollingType && errors.scrollingType
                          }
                          value={values.scrollingType}
                          styles={{ minWidth: "100%" }}
                          options={ddlScrollingType}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>

                <FieldArray name="image">
                  {({ push, remove }) => (
                    <>
                      {values.image.map((_, index) => (
                        <Card
                          sx={{
                            maxWidth: "100%",
                            pt: 5,
                            pb: 2,
                            mt: 2,
                            backgroundColor: colors.primary[400],
                            color: colors.grey[100],
                            borderRadius: 2,
                            boxShadow: 4,
                          }}
                        >
                          <CardContent>
                            <Box key={index} mt={2} mb={2}>
                              {index == 0 &&
                                values.scrollingType == "Carousel" && (
                                  <Box
                                    sx={{
                                      display: "flex",
                                      justifyContent: "end",
                                      mb: 2,
                                    }}
                                  >
                                    <Button
                                      variant="contained"
                                      color="primary"
                                      onClick={() =>
                                        push({
                                          imageUrl: "",
                                          navigationUrl: "",
                                          timeSlots: { from: "", to: "" },
                                          startDate: "",
                                          endDate: "",
                                          companiesname: "",
                                          typeOfMarketing: "",
                                        })
                                      }
                                      startIcon={<AddCircleOutline />}
                                    >
                                      Add Image
                                    </Button>
                                  </Box>
                                )}

                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Typography variant="h6">
                                  Image {index + 1}
                                </Typography>
                                <Grid item xs={12}>
                                  {index != 0 && (
                                    <IconButton
                                      onClick={() => remove(index)}
                                      color="secondary"
                                    >
                                      <RemoveCircleOutline />
                                    </IconButton>
                                  )}
                                </Grid>
                              </Box>
                              <Grid container spacing={2} alignItems="center">
                                {/* <Grid item xs={6}>
                                  <Element
                                    eletype={inputType.input}
                                    label="*Please enter Image Url"
                                    placeholder="Please enter Image Url"
                                    inputProps={{
                                      onChange: handleChange,
                                      onBlur: handleBlur,
                                      name: `image[${index}].imageUrl`,
                                    }}
                                    errorText={
                                      touched.image?.[index]?.imageUrl &&
                                      errors.image?.[index]?.imageUrl
                                    }
                                    value={values.image[index].imageUrl}
                                    styles={{ gridColumn: "span 2" }}
                                  />
                                </Grid> */}

                                <Grid item xs={6}>
                                  <Element
                                    eletype={inputType.input}
                                    label="*Please enter Navigation Url"
                                    placeholder="Please enter Image Url"
                                    inputProps={{
                                      onChange: handleChange,
                                      onBlur: handleBlur,
                                      name: `image[${index}].navigationUrl`,
                                    }}
                                    errorText={
                                      touched.image?.[index]?.navigationUrl  &&
                                      errors.image?.[index]?.navigationUrl
                                    }
                                    value={values.image[index].navigationUrl}
                                    styles={{ gridColumn: "span 2" }}
                                  />
                                </Grid>

                                <Grid item xs={6}>
                                  <TextField
                                    fullWidth
                                    label="Time Slot From"
                                    name={`image[${index}].timeSlots.from`}
                                    value={values.image[index].timeSlots.from}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={
                                      touched.image?.[index]?.timeSlots?.from &&
                                      Boolean(
                                        errors.image?.[index]?.timeSlots?.from
                                      )
                                    }
                                    helperText={
                                      touched.image?.[index]?.timeSlots?.from &&
                                      errors.image?.[index]?.timeSlots?.from
                                    }
                                  />
                                </Grid>

                                <Grid item xs={6}>
                                  <TextField
                                    fullWidth
                                    label="Time Slot To"
                                    name={`image[${index}].timeSlots.to`}
                                    value={values.image[index].timeSlots.to}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={
                                      touched.image?.[index]?.timeSlots?.to &&
                                      Boolean(
                                        errors.image?.[index]?.timeSlots?.to
                                      )
                                    }
                                    helperText={
                                      touched.image?.[index]?.timeSlots?.to &&
                                      errors.image?.[index]?.timeSlots?.to
                                    }
                                  />
                                </Grid>

                                <Grid item xs={6}>
                                  <TextField
                                    fullWidth
                                    label="Start Date"
                                    name={`image[${index}].startDate`}
                                    type="date"
                                    InputLabelProps={{ shrink: true }}
                                    value={values.image[index].startDate}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={
                                      touched.image?.[index]?.startDate &&
                                      Boolean(errors.image?.[index]?.startDate)
                                    }
                                    helperText={
                                      touched.image?.[index]?.startDate &&
                                      errors.image?.[index]?.startDate
                                    }
                                  />
                                </Grid>

                                <Grid item xs={6}>
                                  <TextField
                                    fullWidth
                                    label="End Date"
                                    name={`image[${index}].endDate`}
                                    type="date"
                                    InputLabelProps={{ shrink: true }}
                                    value={values.image[index].endDate}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={
                                      touched.image?.[index]?.endDate &&
                                      Boolean(errors.image?.[index]?.endDate)
                                    }
                                    helperText={
                                      touched.image?.[index]?.endDate &&
                                      errors.image?.[index]?.endDate
                                    }
                                  />
                                </Grid>

                                <Grid item xs={12}>
                                  <TextField
                                    fullWidth
                                    label="Company Name"
                                    name={`image[${index}].companiesname`}
                                    value={values.image[index].companiesname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={
                                      touched.image?.[index]?.companiesname &&
                                      Boolean(
                                        errors.image?.[index]?.companiesname
                                      )
                                    }
                                    helperText={
                                      touched.image?.[index]?.companiesname &&
                                      errors.image?.[index]?.companiesname
                                    }
                                  />
                                </Grid>

                                <Grid item xs={12}>
                                  <TextField
                                    fullWidth
                                    label="Type of Marketing"
                                    name={`image[${index}].typeOfMarketing`}
                                    value={values.image[index].typeOfMarketing}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={
                                      touched.image?.[index]?.typeOfMarketing &&
                                      Boolean(
                                        errors.image?.[index]?.typeOfMarketing
                                      )
                                    }
                                    helperText={
                                      touched.image?.[index]?.typeOfMarketing &&
                                      errors.image?.[index]?.typeOfMarketing
                                    }
                                  />
                                </Grid>
                              </Grid>
                            </Box>
                          </CardContent>
                        </Card>
                      ))}
                    </>
                  )}
                </FieldArray>
                <Card
                  sx={{
                    maxWidth: "100%",
                    pt: 5,
                    pb: 2,
                    backgroundColor: colors.primary[400],
                    color: colors.grey[100],
                    borderRadius: 2,
                    boxShadow: 4,
                    mt: 2,
                  }}
                >
                  <CardActions sx={{ display: "flex", justifyContent: "end" }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: colors.redAccent[500],
                      }}
                      onClick={() => {
                        navigate({
                          pathname: "/dashboard/banner",
                        });
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      sx={{
                        backgroundColor: colors.greenAccent[500],
                      }}
                      variant="contained"
                    >
                      {params.Id ? "Edit" : " Add"} Banner
                    </Button>
                  </CardActions>
                </Card>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AddBanner;
