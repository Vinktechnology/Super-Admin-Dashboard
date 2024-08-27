import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme.js";
import { Link as RouterLink, useNavigate,useParams } from "react-router-dom";
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
import { addNewCategoryThunk , getCategoryByIdThunk, updateCategoryThunk} from "../../store/slices/category/category.slice.js";

const AddSectionName = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [initialValues, setInitialValues] = useState({
    sectionname: "",
    description: "",
  });

  const navigate = useNavigate();



  useEffect(()=>{
    if(params.Id)
      {
        dispatch(getCategoryByIdThunk(params.Id))
        .unwrap()
        .then((da) => {
          console.log(" data of id",da)
        
          setInitialValues({
            sectionname: da.name || "",
            description: da.description || "",
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

    console.log("data from components",data);
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
              pathname: "/dashboard/sectionname",
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
              pathname: "/dashboard/sectionname",
            });
          });
      }
   
  }


  return (
    <Box m="20px">
 
      <Header title={params.Id?"EDIT SECTION NAME":"CREATE SECTION NAME" } subtitle={params.Id?"Edit a Section Name":"Create a New Section Name" }  />
    
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
                name: "sectionname",
              }}
              errorText={touched.sectionname && errors.sectionname}
              value={values.sectionname}
              styles={{ gridColumn: "span 12" }}
            />

            <Element
              eletype={inputType.textarea}
              label="Please enter Description"
              placeholder="Please enter Description"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "description",
              }}
              errorText={touched.description && errors.description}
              value={values.description}
              styles={{ gridColumn: "span 12" }}
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
            {params.Id? "Edit":" Add"} Section Name
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default AddSectionName;
