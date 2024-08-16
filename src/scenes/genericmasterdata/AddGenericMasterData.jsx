import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../src/theme.js";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { inputType } from "../../utils/enum";
import Element from "../../Form/Element";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useFormik } from "formik";
import { CatgorySchema } from "../../utils/validation.js";
import { useDispatch } from "react-redux";
import { getAllCategoriesGlobalApi,getAllGenericMasterNamesGlobalApi } from "../../utils/global/user.global.js";
import {
  addNewGenericMasterDaDataThunk,
  getGenericMasterByIdDaDataThunk,
  updateGenericMasterDaDataThunk,
} from "../../store/slices/genericmasterdata/genericmasterdata.slice.js";

const AddGenericMasterData = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [ddlCategoryData, setDdlCategoryData] = useState([]);
  const [ddlGenericMasterData, setGenericMasterData] = useState([]);
  const [initialValues, setInitialValues] = useState({
    categoryId: "",
    slug: "",
    description: "",
    type: "",
    name: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    getAllCategoriesGlobalApi()
      .then((result) => {
        const catDDLData = result?.data?.Categories?.map((d, i) => {
          return { value: d._id, label: d.name };
        });
        setDdlCategoryData(catDDLData);

        if (params.Id) {
          dispatch(getGenericMasterByIdDaDataThunk(params.Id))
            .unwrap()
            .then((da) => {
              setInitialValues({
                name: da.name || "",
                categoryId: da.categoryId?._id || "",
                slug: da.slug || "",
                description: da.description || "",
                type: da?.type?._id || "",
              });
            });
        }
      })
      .catch((e) => {});

      getAllGenericMasterNamesGlobalApi()
      .then((result) => {
        const genericddl = result?.data?.genericProductMasters?.map((d, i) => {
          return { value: d._id, label: d.masterName };
        });
        setGenericMasterData(genericddl);

        if (params.Id) {
          dispatch(getGenericMasterByIdDaDataThunk(params.Id))
            .unwrap()
            .then((da) => {
              setInitialValues({
                name: da.name || "",
                categoryId: da.categoryId?._id || "",
                slug: da.slug || "",
                description: da.description || "",
                type: da?.type || "",
              });
            });
        }
      })
      .catch((e) => {});
  }, [params.Id]);

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues,
      onSubmit: onSubmit,
      // validationSchema: CatgorySchema,
    });

  async function onSubmit(data) {
    console.log("data from components", data);
    if (params.Id) {
      dispatch(
        updateGenericMasterDaDataThunk({
          ...data,
          id: params.Id,
        })
      )
        .unwrap()
        .then(() => {
          navigate({
            pathname: "/dashboard/genericmasterdata",
          });
        });
    } else {
      dispatch(
        addNewGenericMasterDaDataThunk({
          ...data,
        })
      )
        .unwrap()
        .then(() => {
          navigate({
            pathname: "/dashboard/genericmasterdata",
          });
        });
    }
  }

  return (
    <Box m="20px">
      <Header
        title={
          params.Id ? "EDIT GENERIC MASTER DATA" : "CREATE GENERIC MASTER DATA"
        }
        subtitle={
          params.Id
            ? "Edit a Generic Master Data"
            : "Create a New Generic Master Data"
        }
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
              label="Name"
              placeholder="Please enter Name"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "name",
              }}
              errorText={touched.name && errors.name}
              value={values.name}
              styles={{ gridColumn: "span 2" }}
            />

            <Element
              eletype={inputType.input}
              label="Slug"
              placeholder="Please enter Slug"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "slug",
              }}
              errorText={touched.slug && errors.slug}
              value={values.slug}
              styles={{ gridColumn: "span 2" }}
            />

          <Element
              eletype={inputType.select}
              label="*Please select a Master"
              placeholder="*Please select a Master"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "type",
              }}
              errorText={touched.type && errors.type}
              value={values.type}
              styles={{ gridColumn: "span 2" }}
              options={ddlGenericMasterData}
            />
            <Element
              eletype={inputType.select}
              label="*Please Select a Category"
              placeholder="*Please select a Category"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "categoryId",
              }}
              errorText={touched.categoryId && errors.categoryId}
              value={values.categoryId}
              styles={{ gridColumn: "span 2" }}
              options={ddlCategoryData}
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
              styles={{ gridColumn: "span 2" }}
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
                pathname: "/dashboard/genericmasterdata",
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
            {params.Id ? "Edit" : " Add"} MASTER DATA
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default AddGenericMasterData;
