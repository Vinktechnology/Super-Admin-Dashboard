import {
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
  Grid,
} from "@mui/material";
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
import { useDispatch, useSelector } from "react-redux";
import { addUsefulLinksGlobalApi } from "../../utils/global/user.global.js";
import { showFailureToast, showSuccessToast } from "../../store/slices/toast/toast.slice.js";



const UtilityPhone = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const {utility} = useSelector(({ utilityrender }) => utilityrender?.utitlitydata);
  const [initialValues, setInitialValues] = useState({
    phone: "",
  });

  useEffect(() => {
    if (utility) {
          setInitialValues({
            phone: utility?.phone || "",
          });
    }
  }, [utility]);


  const navigate = useNavigate();

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues,
      onSubmit: onSubmit,
      // validationSchema: CatgorySchema,
    });

  async function onSubmit(data) {
    const dd ={
      value:data.phone,
      type:"phone"
    }
    addUsefulLinksGlobalApi(dd)
    .then((result) => {
      console.log("result", result);
      if (result.data && result?.status) {
        dispatch(showSuccessToast({
          message: result?.message,
          vertical: "top",
          horizontal: "right",
        }))
      }
    })
    .catch((err) => {
      dispatch(showFailureToast({
        message: err,
        vertical: "top",
        horizontal: "right",
      }))
    });
  }

  return (
    <Box>
      <Card
        sx={{
          maxWidth: "100%",
          pt: 5,
          backgroundColor: colors.primary[400],
          color: colors.grey[100],
          borderRadius: 2,
          boxShadow: 4,
          m:2
        }}
      >
        <CardContent
          sx={{
            maxWidth: "100%",
            m:{xs:"5px",sm:"5px",md:"20px",lg:"20px", xl:"20px"},
            backgroundColor: colors.primary[400],
            color: colors.grey[100],
            borderRadius: 2,
            boxShadow: 4,
          }}
        >
          <Header title="" subtitle="Manage Website Mobile Number" />
          <Grid container>
            <Grid xs={9} sm={8} md={8} lg={8} xl={8} sx={{ p: 1 }}>
              <Element
                eletype={inputType.number}
                label="Please enter website Mobile Number"
                placeholder="Please enter website Mobile Number"
                inputProps={{
                  onChange: handleChange,
                  onBlur: handleBlur,
                  name: "phone",
                }}
                errorText={touched.phone && errors.phone}
                value={values.phone}
                styles={{ gridColumn: "span 2" }}
              />
            </Grid>
            <Grid
              xs={3}
              sm={4}
              md={4}
              lg={4}
              xl={4}
              container // Add container here to use flex properties
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                type="submit"
                onClick={handleSubmit}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  width: "70%",
                }}
                variant="contained"
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Box>
  );
};

export default UtilityPhone;
