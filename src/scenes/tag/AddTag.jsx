import React, { useEffect, useState } from "react";
import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../../src/theme.js";
import { useNavigate, useParams } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {
  getAllCategoriesGlobalApi,
  getAllSubCategoriesGlobalApi,
} from "../../utils/global/user.global.js";
import {
  addNewTagThunk,
  getTagByIdThunk,
  updateTagThunk,
} from "../../store/slices/tags/tags.slice.js";
import Header from "../../components/Header";
import Element from "../../Form/Element";
import { inputType } from "../../utils/enum";
import { TagSchema } from "../../utils/validation.js";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const AddTag = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [initialValues, setInitialValues] = useState({
    tag: "",
    slug: "",
    description: "",
    thumbnail: "",
  });

  const navigate = useNavigate();

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues,
      onSubmit: onSubmit,
      validationSchema: TagSchema,
    });

  useEffect(() => {
    if (params.Id) {
      // Fetch existing tag details
      dispatch(getTagByIdThunk(params.Id))
        .unwrap()
        .then((da) => {
          
          setInitialValues({
            tag: da.name || "",
            slug: da.slug || "",
            description: da.description || "",
            thumbnail: da.imageLink || "",
          });
        });
    }
  }, [params.Id]);

  

  async function onSubmit(data) {
    if (params.Id) {
      dispatch(
        updateTagThunk({
          ...data,
          id: params.Id,
        })
      )
        .unwrap()
        .then(() => {
          navigate({
            pathname: "/dashboard/tag",
          });
        });
    } else {
      dispatch(
        addNewTagThunk({
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
      <Header
        title={params.Id ? "EDIT TAG" : "CREATE TAG"}
        subtitle={params.Id ? "Edit a Tag" : "Create a New Tag"}
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
              label="*Tag"
              placeholder="Please enter Tag"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "tag",
              }}
              errorText={touched.tag && errors.tag}
              value={values.tag}
              styles={{ gridColumn: "span 2" }}
            />

            <Element
              eletype={inputType.input}
              label="*Slug"
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
              label="*Description"
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
              label="Please choose Thumbnail of Tag"
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
            {params.Id ? "Edit" : " Add"} Tag
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default AddTag;
