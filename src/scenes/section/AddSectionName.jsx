import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme.js";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header.jsx";
import { inputType } from "../../utils/enum.js";
import Element from "../../Form/Element.js";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useFormik } from "formik";
import { CatgorySchema } from "../../utils/validation.js";
import { useDispatch } from "react-redux";
import { getAllCategoriesGlobalApi, getAllSubCategoriesGlobalApi, getAllTagsGlobalApi } from "../../utils/global/user.global.js";
import { addNewHomeSectionhunk, getHomeSectionByIdThunk, updateHomeSectionThunk } from "../../store/slices/homesection/homesection.slice.js";
import { fncBindMultiSelectdata, fncBindMultiSelectdataForEdit } from "../../utils/utilityfunction.js";

const DdlBrandOptions= [{
  label:"Yes",
  value:"yes"
},
{
  label:"No",
  value:"no"
}
]

const AddSectionName = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [ddlCategoryData, setDdlCategoryData] = useState([]);
  const [ddlTagData, setDdlTagata] = useState([]);
  // const [ddlTagData, setDdlTagata] = useState([]);
  const [ddlSubCategoryData, setDdlSubCategoryData] = useState([]);
  const [initialValues, setInitialValues] = useState({
    category: "",
    subCategory: [],
    sectionName:"",
    sectionHeading:"",
    sectionSubHeading:"",
    tag:"",
    brand:"",
    sectionDescription:"",
  });
  const navigate = useNavigate();
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, setFieldValue } =
    useFormik({
      enableReinitialize: true,
      initialValues,
      onSubmit: onSubmit,
      // validationSchema: CatgorySchema,
    });

  useEffect(() => {
    getAllCategoriesGlobalApi()
      .then((result) => {
        const catDDLData = result?.data?.Categories?.map((d, i) => {
          return { value: d._id, label: d.name };
        });
        setDdlCategoryData(catDDLData);

        if (params.Id) {
          dispatch(getHomeSectionByIdThunk(params.Id))
        .unwrap()
        .then((da) => {
          console.log(" data of id first", da);

          setInitialValues({
            category: da?.category?._id || "",
            subCategory:[],
            sectionHeading:da?.sectionHeading || "",
            sectionSubHeading:da?.sectionSubHeading || "",
            tag:da?.tag?._id || "",
            brand:da.brand===false?"no":"yes" || "",
            sectionDescription:da?.sectionDescription || "",
            sectionName:da?.sectionName || ""
          });
        });
        }
      })
      .catch((e) => {});

      getAllTagsGlobalApi()
      .then((result) => {
        const tagDDLData = result?.data?.tags?.map((d, i) => {
          return { value: d._id, label: d.name };
        });
        setDdlTagata(tagDDLData);

        if (params.Id) {
          dispatch(getHomeSectionByIdThunk(params.Id))
        .unwrap()
        .then((da) => {
          console.log(" data of id second", da);

          setInitialValues({
            category: da?.category?._id || "",
            subCategory: [],
            sectionHeading:da?.sectionHeading || "",
            sectionSubHeading:da?.sectionSubHeading || "",
            tag:da?.tag?._id || "",
            brand:da?.brand===false?"no":"yes" || "",
            sectionDescription:da?.sectionDescription || "",
            sectionName:da?.sectionName || ""
          });
        });
        }
      })
      .catch((e) => {});

      
  }, [params.Id]);


  useEffect(() => {
    setFieldValue("subCategory", [])
    getAllSubCategoriesGlobalApi(values.category)
      .then((result) => {
        const subcatDDLData = result?.data?.SubCategories?.map((d, i) => {
          return { value: d._id, label: d.name };
        });
        setDdlSubCategoryData(subcatDDLData);

        if (params.Id) {
          dispatch(getHomeSectionByIdThunk(params.Id))
        .unwrap()
        .then((da) => {
          console.log(" data of id", da);

          setInitialValues({
            category: da?.category?._id || "",
            subCategory: fncBindMultiSelectdataForEdit(da?.subCategory) || [],
            sectionHeading:da?.sectionHeading || "",
            sectionSubHeading:da?.sectionSubHeading || "",
            tag:da?.tag?._id || "",
            brand:da?.brand===false?"no":"yes" || "",
            sectionDescription:da?.sectionDescription || "",
            sectionName:da?.sectionName || ""
          });
        });
        }
      })
      .catch((e) => {});
  }, [values.category]);

  


  

  async function onSubmit(data) {
    console.log("data from components", data);

    var datasubCategory = []
    if(data?.subCategory?.length>0)
      {
        datasubCategory= data?.subCategory?.map((dd,ii)=> {
          
          if(dd?.value)
            {
              return   dd.value 
            }
            else{
             return dd
            }
        
      })
      }

      console.log("datasubCategory",datasubCategory)
    if (params.Id) {
      dispatch(
        updateHomeSectionThunk({
          ...data,
          id: params.Id,
          subCategory : datasubCategory,
          brand:data?.brand==="yes"?true:false
        })
      )
        .unwrap()
        .then(() => {
          navigate({
            pathname: "/dashboard/section",
          });
        });
    } else {
      dispatch(
        addNewHomeSectionhunk({
          ...data,
          subCategory : datasubCategory,
          brand:data?.brand==="yes"?true:false
        })
      )
        .unwrap()
        .then(() => {
          navigate({
            pathname: "/dashboard/section",
          });
        });
    }
  }

  return (
    <Box m="20px">
      <Header
        title={params.Id ? "EDIT SECTION" : "CREATE SECTION"}
        subtitle={
          params.Id ? "Edit a Section" : "Create a New Section"
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
              label="Please enter the Section Name"
              placeholder="Please enter Section Name"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "sectionName",
              }}
              errorText={touched.sectionName && errors.sectionName}
              value={values.sectionName}
              styles={{ gridColumn: "span 2" }}
            />
            <Element
              eletype={inputType.input}
              label="Please enter the Section Heading"
              placeholder="Please enter Section Heading"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "sectionHeading",
              }}
              errorText={touched.sectionHeading && errors.sectionHeading}
              value={values.sectionHeading}
              styles={{ gridColumn: "span 2" }}
            />
            <Element
              eletype={inputType.input}
              label="Please enter the Sub-Section Heading"
              placeholder="Please enter Sub-Section Heading"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "sectionSubHeading",
              }}
              errorText={touched.sectionSubHeading && errors.sectionSubHeading}
              value={values.sectionSubHeading}
              styles={{ gridColumn: "span 2" }}
            />
            <Element
              eletype={inputType.select}
              label="Please select a Tag"
              placeholder="Please select a Tag"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "tag",
              }}
              errorText={touched.tag && errors.tag}
              value={values.tag}
              styles={{ gridColumn: "span 2" }}
              options={ddlTagData}
            />

            <Element
              eletype={inputType.select}
              label="Please select a Category"
              placeholder="Please select a Category"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "category",
              }}
              errorText={touched.category && errors.category}
              value={values.category}
              styles={{ gridColumn: "span 2" }}
              options={ddlCategoryData}
            />

            <Element
              eletype={inputType.multiselect}
              label="Please select a Sub Category"
              placeholder="Please select a Sub Category"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "subCategory",
              }}
              errorText={touched.subCategory && errors.subCategory}
              value={values.subCategory}
              styles={{ gridColumn: "span 2" }}
              options={ddlSubCategoryData}
            />

            <Element
              eletype={inputType.select}
              label="Please select a Brand"
              placeholder="Please select a Brand"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "brand",
              }}
              errorText={touched.brand && errors.brand}
              value={values.brand}
              styles={{ gridColumn: "span 2" }}
              options={DdlBrandOptions}
            />

            <Element
              eletype={inputType.textarea}
              label="Please enter Description"
              placeholder="Please enter Description"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "sectionDescription",
              }}
              errorText={
                touched.sectionDescription && errors.sectionDescription
              }
              value={values.sectionDescription}
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
                pathname: "/dashboard/section",
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
            {params.Id ? "Edit" : " Add"} Section
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default AddSectionName;
