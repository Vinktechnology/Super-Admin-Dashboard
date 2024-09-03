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

import Header from "../../components/Header.jsx";
import { inputType } from "../../utils/enum";
import Element from "../../Form/Element";
import { fncGetDate, fncGetTime, fncMakeDateTimeAsPerDayJs } from "../../utils/utilityfunction.js";
import { addNewBannerThunk, getBannerByIdThunk, updateBannerThunk } from "../../store/slices/banner/banner.slice.js";
import dayjs from "dayjs";


// ['', ''],- marketing type

const ddlTypeOfMarketing = [
  {
    value: "Generic",
    label: "Generic",
  },
  {
    value: "Advertisement",
    label: "Advertisement",
  },
];
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
        startDate: null,
        endDate: null,
        companiesname: "",
        typeOfMarketing: "",
      },
    ],
  });

  useEffect(() => {
    if (params.Id) {
      dispatch(getBannerByIdThunk(params.Id))
        .unwrap()
        .then((da) => {
          const imageData = da.image?.map((dd)=>
          {
            return   {
                imageUrl: dd?.imageUrl || "",
                navigationUrl: dd?.navigationUrl || "",
                startDate:fncMakeDateTimeAsPerDayJs(dd?.startDate) || "",
                endDate: fncMakeDateTimeAsPerDayJs(dd?.endDate) || "",
                companiesname: dd?.companiesname || "",
                typeOfMarketing: dd?.typeOfMarketing || "",
              }
            
          })

          console.log("ImageEditing",imageData);

          setInitialValues({
            title: da?.title || "",
            onScreenToBeDisplayed: da?.onScreenToBeDisplayed || "",
            scrollingType: da?.scrollingType || "",
            image: imageData,
          });
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
          navigationUrl: Yup.string().url("Invalid URL").required("Required"),
          startDate: Yup.date().required("Required"),
          endDate: Yup.date().required("Required"),
          companiesname: Yup.string().required("Required"),
          typeOfMarketing: Yup.string().required("Required"),
        })
      )
      .required("At least one image is required"),
  });

  async function onSubmit(data) {


    const imageData = data?.image?.map((da) => {
      return {
        imageUrl: da.imageUrl,
        navigationUrl: da.navigationUrl,
        startDate: fncGetDate(da.startDate),
        endDate: fncGetDate(da.endDate),
        companiesname: da.companiesname,
        typeOfMarketing: da.typeOfMarketing,
        timeSlots: {
          from:fncGetTime(da.startDate),
          to: fncGetTime(da.endDate),
        },
      };
    });



    const dataApi = {
      title: data.title,
      onScreenToBeDisplayed: data.onScreenToBeDisplayed,
      scrollingType: data.scrollingType,
      image: imageData,
    };
    if (params.Id) {
      dispatch(
        updateBannerThunk({
          dataApi,
          id: params.Id,
        })
      )
        .unwrap()
        .then(() => {
          navigate({
            pathname: "/dashboard/banner",
          });
        });
    } else {
      dispatch(
        addNewBannerThunk({
          dataApi,
        })
      )
        .unwrap()
        .then(() => {
          navigate({
            pathname: "/dashboard/banner",
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
            enableReinitialize= {true}
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
                                      touched.image?.[index]?.navigationUrl &&
                                      errors.image?.[index]?.navigationUrl
                                    }
                                    value={values.image[index].navigationUrl}
                                    styles={{ gridColumn: "span 2" }}
                                  />
                                </Grid>

                                <Grid item xs={6}>
                                  <Element
                                    eletype={inputType.input}
                                    label="*Please enter Company Name"
                                    placeholder="Please enter Company Name"
                                    inputProps={{
                                      onChange: handleChange,
                                      onBlur: handleBlur,
                                      name: `image[${index}].companiesname`,
                                    }}
                                    errorText={
                                      touched.image?.[index]?.companiesname &&
                                      errors.image?.[index]?.companiesname
                                    }
                                    value={values.image[index].companiesname}
                                    styles={{ gridColumn: "span 2" }}
                                  />
                                </Grid>

                                <Grid item xs={6}>
                                  <Element
                                    eletype={inputType.datetime}
                                    label="*Please select Start Date Time"
                                    placeholder="Please  select Start Date Time"
                                    inputProps={{
                                      onChange: handleChange,
                                      onBlur: handleBlur,
                                      name: `image[${index}].startDate`,
                                    }}
                                    errorText={
                                      touched.image?.[index]?.startDate &&
                                      errors.image?.[index]?.startDate
                                    }
                                    value={values.image[index].startDate}
                                    styles={{ width: "100%" }}
                                  />
                                </Grid>

                                <Grid item xs={6}>
                                  <Element
                                    eletype={inputType.datetime}
                                    label="*Please select End Date Time"
                                    placeholder="Please  select End Date Time"
                                    inputProps={{
                                      onChange: handleChange,
                                      onBlur: handleBlur,
                                      name: `image[${index}].endDate`,
                                    }}
                                    errorText={
                                      touched.image?.[index]?.endDate &&
                                      errors.image?.[index]?.endDate
                                    }
                                    value={values.image[index].endDate}
                                    styles={{ width: "100%" }}
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
                                      name: `image[${index}].typeOfMarketing`,
                                    }}
                                    errorText={
                                      touched.image?.[index]?.typeOfMarketing &&
                                      errors.image?.[index]?.typeOfMarketing
                                    }
                                    value={values.image[index].typeOfMarketing}
                                    styles={{ minWidth: "100%" }}
                                    options={ddlTypeOfMarketing}
                                  />
                                </Grid>
                                <Grid item xs={6}>
                                  <Element
                                    eletype={inputType.dropzonewithapi}
                                    label="Please select a image for Banner"
                                    placeholder="Please select a image for Banner"
                                    inputProps={{
                                      onChange:handleChange,
                                      onBlur: handleBlur,
                                      name: `image[${index}].imageUrl`,
                                    }}
                                    errorText={
                                      touched.image?.[index]?.imageUrl &&
                                      errors.image?.[index]?.imageUrl
                                    }
                                    value={values.image[index].imageUrl}
                                    styles={{
                                      gridColumn: "span 2",
                                      backgroundColor: "rgba(0, 0, 0, 0.06)",
                                    }}
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
