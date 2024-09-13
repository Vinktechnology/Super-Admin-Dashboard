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
import { addNewHeaderAndFooterThunk, getHeaderAndFooterByIdThunk, updateHeaderAndFooterThunk } from "../../store/slices/headerfooter/headerfooter.slice.js";


const ddlScrollingType = [
  {
    value: "header",
    label: "Header",
  },
  {
    value: "footer",
    label: "Footer",
  },
];



const AddHeaderAndFooter = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const params = useParams();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    title: "",
    section: "",
    link: [
      {
        linkName: "",
        linkUrl: "",
      }
    ],
  });

  useEffect(() => {
    if (params.Id) {
      dispatch(getHeaderAndFooterByIdThunk(params.Id))
        .unwrap()
        .then((da) => {
          console.log("webLinks",da)
          const linkData = da.link?.map((dd)=>
          {
            return   {
                linkName: dd?.linkName || "",
                linkUrl: dd?.linkUrl || "",
              }
            
          })
          setInitialValues({
            title: da?.title || "",
            section: da?.section || "",
            link: linkData,
          });
        });
    }
  }, [params.Id]);

  // Validation Schema
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required."),
    section: Yup.mixed()
      .oneOf(["header", "footer"], "Please select an option")
      .required("Please select an option"),
    link: Yup.array()
      .of(
        Yup.object().shape({
          linkUrl: Yup.string().url("Invalid URL").required("Please enter the page url"),
          linkName: Yup.string().required("Please enter the Name"),
        })
      )
      .required("At least one image is required"),
  });

  async function onSubmit(data) {


    const linkdata = data?.link?.map((da) => {
      return {
        linkName: da.linkName,
        linkUrl: da.linkUrl,
      };
    });



    const dataApi = {
      title: data.title,
      section: data.section,
      link: linkdata,
    };
    if (params.Id) {
      dispatch(
        updateHeaderAndFooterThunk({
          dataApi,
          id: params.Id,
        })
      )
        .unwrap()
        .then(() => {
          navigate({
            pathname: "/dashboard/headerfooter",
          });
        });
    } else {
      dispatch(
        addNewHeaderAndFooterThunk({
          dataApi,
        })
      )
        .unwrap()
        .then(() => {
          navigate({
            pathname: "/dashboard/headerfooter",
          });
        });
    }
  }



  return (
    <Box m="20px">
      <Header
        title={params.Id ? "EDIT Header/Footer" : "CREATE Header/Footer"}
        subtitle={params.Id ? "Edit a Header/Footer" : "Create a New Header/Footer"}
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
                      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Element
                          eletype={inputType.input}
                          label="*Please enter Title"
                          placeholder="Please enter Title "
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

                      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Element
                          eletype={inputType.select}
                          label="*Please select Type"
                          placeholder="*Please select a Type"
                          inputProps={{
                            onChange: handleChange,
                            onBlur: handleBlur,
                            name: "section",
                          }}
                          errorText={
                            touched.section && errors.section
                          }
                          value={values.section}
                          styles={{ minWidth: "100%" }}
                          options={ddlScrollingType}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>

                <FieldArray name="link">
                  {({ push, remove }) => (
                    <>
                      {values.link.map((_, index) => (
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
                            {index==0 && <Box
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
                                          linkName: "",
                                          linkUrl: "",
                                        })
                                      }
                                      startIcon={<AddCircleOutline />}
                                    >
                                      Add Header/Footer
                                    </Button>
                                  </Box>}
                                  
                             

                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Typography variant="h6">
                                  Link {index + 1}
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
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                  <Element
                                    eletype={inputType.input}
                                    label="*Please enter Header/Footer Name"
                                    placeholder="Please enter  Header/Footer Name"
                                    inputProps={{
                                      onChange: handleChange,
                                      onBlur: handleBlur,
                                      name: `link[${index}].linkName`,
                                    }}
                                    errorText={
                                      touched.link?.[index]?.linkName &&
                                      errors.link?.[index]?.linkName
                                    }
                                    value={values.link[index].linkName}
                                    styles={{ gridColumn: "span 2" }}
                                  />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                  <Element
                                    eletype={inputType.input}
                                    label="*Please enter Page Url"
                                    placeholder="Please enter Page Url"
                                    inputProps={{
                                      onChange: handleChange,
                                      onBlur: handleBlur,
                                      name: `link[${index}].linkUrl`,
                                    }}
                                    errorText={
                                      touched.link?.[index]?.linkUrl &&
                                      errors.link?.[index]?.linkUrl
                                    }
                                    value={values.link[index].linkUrl}
                                    styles={{ gridColumn: "span 2" }}
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
                          pathname: "/dashboard/headerfooter",
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
                      {params.Id ? "Edit" : " Add"} Header/Footer
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

export default AddHeaderAndFooter;

  