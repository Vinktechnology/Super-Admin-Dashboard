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
import { useDispatch } from "react-redux";
import { getAllCategoriesGlobalApi, getAllGenericMasterNamesGlobalApi } from "../../utils/global/user.global.js";
import { addNewFilterThunk, getFilterByIdThunk, updateFilterThunk } from "../../store/slices/filter/filter.slice.js";
import { fncBindMultiSelectdata, fncBindMultiSelectdataForEdit } from "../../utils/utilityfunction.js";

const ddlBothData =[{
  value:"yes",
  label:"Yes"
},
{
  value:"no",
  label:"No"
}]

const AddFilterMaster = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [ddlGenericMasterData, setGenericMasterData] = useState([]);
  const [ddlCategoryData, setDdlCategoryData] = useState([]);
  const [initialValues, setInitialValues] = useState({
    genericMaster: [],
    isFilter: "",
    categoryType:""
  });

  const navigate = useNavigate();



  useEffect(()=>{

    getAllCategoriesGlobalApi()
    .then((result) => {
      const catDDLData = result?.data?.Categories?.map((d, i) => {
        return { value: d._id, label: d.name };
      });
      catDDLData.push({
        value:0,
        label:"Both"
      })
      setDdlCategoryData(catDDLData);

      if (params.Id) {
        dispatch(getFilterByIdThunk(params.Id))
          .unwrap()
          .then((da) => {
            setInitialValues({
              genericMaster:fncBindMultiSelectdataForEdit(da?.genericMaster) ,
              isFilter: da.isFilter?"yes":"no",
              categoryType:da?.categoryType ==null? 0:da?.categoryType?._id
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
          dispatch(getFilterByIdThunk(params.Id))
            .unwrap()
            .then((da) => {
              console.log("dataaaaa",da);
              setInitialValues({
                genericMaster:fncBindMultiSelectdataForEdit(da?.genericMaster) ,
                isFilter: da.isFilter?"yes":"no",
                categoryType:da?.categoryType ==null? 0:da?.categoryType?._id
              });
            });
        }
      })
      .catch((e) => {});
  },[params.Id])

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues,
      onSubmit: onSubmit,
      // validationSchema: CatgorySchema,
    });

  async function onSubmit(data) {
    if(params.Id)
      {
        dispatch(
          updateFilterThunk({
            ...data,id:params.Id,
            isFilter:data.isFilter==="yes"?true:false,
            categoryType:data.categoryType==0?null:data.categoryType
          })
        )
          .unwrap()
          .then(() => {
            navigate({
              pathname: "/dashboard/filter",
            });
          });
      }
      else
      {
        dispatch(
          addNewFilterThunk({
            ...data,isFilter:data.isFilter==="yes"?true:false,
            categoryType:data.categoryType==0?null:data.categoryType
          })
        )
          .unwrap()
          .then(() => {
            navigate({
              pathname: "/dashboard/filter",
            });
          });
      }
   
  }


  return (
    <Box m="20px">
 
      <Header title={params.Id?"EDIT FILTER":"CREATE FILTER" } subtitle={params.Id?"Edit a Filter":"Create a New Filter" }  />
    
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
              eletype={inputType.select}
              label="*Please select a Category"
              placeholder="*Please select a Category"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "categoryType",
              }}
              errorText={touched.categoryType && errors.categoryType}
              value={values.categoryType}
              styles={{ gridColumn: "span 2" }}
              options={ddlCategoryData}
            />
              <Element
              eletype={inputType.select}
              label="*Please select a Filter"
              placeholder="*Please select a Filter"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "isFilter",
              }}
              errorText={touched.isFilter && errors.isFilter}
              value={values.isFilter}
              styles={{ gridColumn: "span 2" }}
              options={ddlBothData}
            />
           
        <Element
              eletype={inputType.multiselect}
              label="*Please select a Master"
              placeholder="*Please select a Master"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "genericMaster",
              }}
              errorText={touched.genericMaster && errors.genericMaster}
              value={values.genericMaster}
              styles={{ gridColumn: "span 2" }}
              options={ddlGenericMasterData}
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
                pathname: "/dashboard/filter",
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
            {params.Id? "Edit":" Add"} Filter
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default AddFilterMaster;
