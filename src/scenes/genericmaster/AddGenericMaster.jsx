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
import { GenericMasterSchema } from "../../utils/validation.js";
import { useDispatch } from "react-redux";
import { addNewGenericMasterThunk, getGenericMasterByIdThunk, updateGenericMasterThunk } from "../../store/slices/genericmaster/genericmaster.slice.js";

const ddlCategoryData=[{
  label:"Yes",
  value:"yes",
  id:1
},
{
  label:"No",
  value:"no",
  id:2
}
]

const AddGenericMaster = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [initialValues, setInitialValues] = useState({
    masterName: "",
    masterSlug: "",
    isCategoryInvolved: "no",
    description: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (params.Id) {
      dispatch(getGenericMasterByIdThunk(params.Id))
        .unwrap()
        .then((da) => {
          const cat =  da.isCategoryInvolved==true?"yes":"no"

          setInitialValues({
            masterName: da.masterName || "",
            masterSlug: da.masterSlug || "",
            isCategoryInvolved: cat || "no",
            description: da.description,
          });
        });
    }
  }, [params.Id]);

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues,
      onSubmit: onSubmit,
      validationSchema: GenericMasterSchema,
    });

  async function onSubmit(data) {

   
    const isCategoryInvolved = data.isCategoryInvolved=="yes"?true:false
    if (params.Id) {
      dispatch(
        updateGenericMasterThunk({
          ...data,isCategoryInvolved,
          id: params.Id,
        })
      )
        .unwrap()
        .then(() => {
          navigate({
            pathname: "/dashboard/genericmaster",
          });
        });
    } else {
      dispatch(
        addNewGenericMasterThunk({
          ...data,isCategoryInvolved,
        })
      )
        .unwrap()
        .then(() => {
          navigate({
            pathname: "/dashboard/genericmaster",
          });
        });
    }
  }

  return (
    <Box m="20px">
      <Header
        title={params.Id ? "EDIT GENERIC MASTER" : "CREATE GENERIC MASTER"}
        subtitle={params.Id ? "Edit a Generic Master" : "Create a New Generic Master"}
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
              label="*Master Name"
              placeholder="Please enter Master Name"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "masterName",
              }}
              errorText={touched.masterName && errors.masterName}
              value={values.masterName}
              styles={{ gridColumn: "span 2" }}
            />

            <Element
              eletype={inputType.input}
              label="*Slug"
              placeholder="Please enter Slug"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "masterSlug",
              }}
              errorText={touched.masterSlug && errors.masterSlug}
              value={values.masterSlug}
              styles={{ gridColumn: "span 2" }}
            />

<Element
              eletype={inputType.select}
              label="*Is Category Involved"
              placeholder="*Please select a Category"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "isCategoryInvolved",
              }}
              errorText={
                touched.isCategoryInvolved && errors.isCategoryInvolved
              }
              value={values.isCategoryInvolved}
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
                pathname: "/dashboard/genericmaster",
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
            {params.Id ? "Edit" : " Add"} Generic Master
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default AddGenericMaster;
