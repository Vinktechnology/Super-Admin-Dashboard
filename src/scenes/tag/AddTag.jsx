import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../src/theme.js";
import { Link as RouterLink, useNavigate,useParams } from "react-router-dom";
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
import { addNewCategoryThunk , getCategoryByIdThunk, updateCategoryThunk} from "../../store/slices/category/category.slice.js";
import { getAllCategoriesGlobalApi, getAllSubCategoriesGlobalApi } from "../../utils/global/user.global.js";

const AddTag = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [initialValues, setInitialValues] = useState({
    category: "",
    slug: "",
    description: "",
    thumbnail: "",
    sampleimages: [],
  });

  const navigate = useNavigate();



  useEffect(()=>{


    getAllCategoriesGlobalApi()
    .then((result) => {
     console.log(result);
    })
    .catch((e) => {
    
    });

    getAllSubCategoriesGlobalApi()
    .then((result) => {
      console.log(result);
    })
    .catch((e) => {
    
    });

    if(params.Id)
      {
        dispatch(getCategoryByIdThunk(params.Id))
        .unwrap()
        .then((da) => {
          setInitialValues({
            category: da.name || "",
            slug: da.slug || "",
            description: da.description || "",
            thumbnail: da.imageLink || "",
            sampleimages: da.sampleimages || [],
          });
        });
      }
  },[params.Id])

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues,
      onSubmit: onSubmit,
      validationSchema: CatgorySchema,
    });

  async function onSubmit(data) {

    if(params.Id)
      {
        dispatch(
          updateCategoryThunk({
            ...data,id:params.Id
          })
        )
          .unwrap()
          .then(() => {
            navigate({
              pathname: "/dashboard/tag",
            });
          });
      }
      else
      {
        dispatch(
          addNewCategoryThunk({
            ...data,
          })
        )
          .unwrap()
          .then(() => {
            navigate({
              pathname: "/dashboard/tag",
            });
          });
      }
   
  }


  return (
    <Box m="20px">
 
      <Header title={params.Id?"EDIT TAG":"CREATE TAG" } subtitle={params.Id?"Edit a Tag":"Create a New Tag" }  />
    
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
              label="Category"
              placeholder="Please enter Category"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "category",
              }}
              errorText={touched.category && errors.category}
              value={values.category}
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

            <Element
              eletype={inputType.dropzone}
              label="Please choose Thumbnail of Category"
              placeholder="Please enter thumbnail"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "thumbnail",
              }}
              errorText={touched.thumbnail && errors.thumbnail}
              value={values.thumbnail}
              styles={{
                gridColumn: "span 2",
                backgroundColor: "rgba(0, 0, 0, 0.06)",
              }}
            />

            <Element
              eletype={inputType.dropzone}
              label="Please choose Sample Images of Category"
              placeholder="Please enter Sample Images"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "sampleimages",
              }}
              errorText={touched.sampleimages && errors.sampleimages}
              value={values.sampleimages}
              styles={{
                gridColumn: "span 2",
                backgroundColor: "rgba(0, 0, 0, 0.06)",
              }}
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
                pathname: "/dashboard/tag",
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
            {params.Id? "Edit":" Add"} Tag
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default AddTag;
