import React, { useCallback, useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { tokens } from "../../../../src/theme.js";
import { useFormik } from "formik";
import { CatgorySchema } from "../../../utils/validation.js";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { inputType } from "../../../utils/enum.js";
import Element from "../../../Form/Element";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { debounce } from "../../../utils/global/global.js";
import { useDispatch, useSelector } from "react-redux";
import { formErrorStyle, formSuccessStyle } from "../../../utils/constant.js";
import { setBrand } from "../../../store/slices/staticproduct/staticproduct.slice.js";
import { FakeColors, BlousePieceType } from "../FakeProductDb.js";
import CombinationForm from "./Combinations.js";
import SariSingleProduct from "./SariSingleProduct.js";

function SariVariants({ dataCheck }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const brandData = useSelector(({ staticProduct }) => staticProduct.brand);
  const { search } = useLocation();

  const query = new URLSearchParams(search);
  const prodcategory = query.get("prodcategory");

  const [isAlreadyBrand, setIsAlreadyBrand] = useState(false);
  const [isCombinationVisible, setIsCombinationVisible] = useState(false);
  
  const [isAlreadyBrandError, setIsAlreadyBrandError] = useState("");

  const navigate = useNavigate();
  const initialValues = {
    color: {},
    blouse: {},
  };

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues,
      onSubmit: onSubmit,
      // validationSchema: CatgorySchema,
    });

  async function onSubmit(data) {
   debugger;
   setIsCombinationVisible(true)
    // navigate(
    //   `/dashboard/product/addproduct/productfeatures?prodcategory=${prodcategory}&prodbrand=${values.brandname}`
    // );
    // dispatch(
    //   loginByEmailAsyncThunk({
    //     ...values,
    //   })
    // )
    //   .unwrap()
    //   .then(() => {
    //     navigate({
    //       pathname: "/",
    //     });
    //   });
    //    navigate({
    //   pathname: "/dashboard",
    // });
  }

  // Debounced function
  const fetchData = useCallback(
    debounce(async (searchQuery) => {
      if (searchQuery) {
        // const response = await fetch(`https://api.example.com/search?q=${searchQuery}`);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        ); // replace with axio and redux-toolkit
        const data = await response.json();

        setIsAlreadyBrand(true);
        setIsAlreadyBrandError("");
      }
    }, 1000),
    [] // Dependencies for useCallback, empty means it only initializes once
  );



  return (
    <Container
      sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", padding: { xs: ".5rem", sm: ".7rem", md: "1rem", lg: "1rem" } }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: { xs: ".5rem", sm: ".7rem", md: "1rem", lg: "1rem" },
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
        }}
      >
        <Box sx={{ minWidth: "30%" }}>
          <Element
            eletype={inputType.multiselect}
            label="*Color"
            placeholder="*Please select a Color"
            inputProps={{
              onChange: handleChange,
              onBlur: handleBlur,
              name: "color",
            }}
            errorText={touched.color && errors.color}
            value={values.color}
            options={FakeColors}
          />
        </Box>

        <Box sx={{ minWidth: "30%" }}>
          <Element
            eletype={inputType.multiselect}
            label="*Blouse Type"
            placeholder="*Please select a Blouse Type"
            inputProps={{
              onChange: handleChange,
              onBlur: handleBlur,
              name: "blouse",
            }}
            errorText={touched.blouse && errors.blouse}
            value={values.blouse}
            options={BlousePieceType}
          />
        </Box>

        <Box sx={{ minWidth: "20%", padding: "1rem" }}>
          <Button
            type="submit"
              onClick={handleSubmit}
            sx={{
              backgroundColor: colors.greenAccent[500],
            }}
            variant="contained"
          >
            Create Variants
          </Button>
        </Box>
      </Box>
      <SariSingleProduct />
      {
        isCombinationVisible && <CombinationForm  colorOptions={values.color} blouseOptions={values.blouse}/>
      }
     
    </Container>
  );
}

export default SariVariants;
