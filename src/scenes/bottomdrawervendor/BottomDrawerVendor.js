import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";
import { inputType } from "../../utils/enum";
import Element from "../../Form/Element";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useFormik } from "formik";
import { CatgorySchema } from "../../utils/validation.js";
import { useDispatch } from "react-redux";
import {
  addNewCategoryThunk,
  getCategoryByIdThunk,
  updateCategoryThunk,
} from "../../store/slices/category/category.slice.js";
import { tokens } from "../../../src/theme.js";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { getAllCategoriesGlobalApi, getAllSubCategoriesGlobalApi, getAllTagsGlobalApi } from "../../utils/global/user.global.js";
import { getAllProductsThunk } from "../../store/slices/product/product.slice.js";

export default function BottomDrawerVendor({ isBottomDrawer, toggleBottomDrawer }) {
  const dispatch = useDispatch();
  const params = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [ddlCategoryData, setDdlCategoryData] = React.useState([]);
  const [ddlSubCategoryData, setDdlSubCategoryData] = React.useState([]);
  const [ddlStatusData, setDdlStatusData] = React.useState([
    {
    value:"all",
    label:"All"
  },
  {
    value:"pending",
    label:"Pending"
  },
  {
    value:"approved",
    label:"Approved"
  },
  {
    value:"rejected",
    label:"Rejected"
  },
]);
  const [ddlTagsData, setDdlTagsData] = React.useState([]);
  
  const [initialValues, setInitialValues] = React.useState({
    fullName: "",
    mobile: "",
    email:"",
    status:"",
    city:"",
    state:""
  });

  const navigate = useNavigate();

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues,
      onSubmit: onSubmit,
    });

  async function onSubmit(data) {
    const statusDt = values.status=="all"?"":values.status;
    navigate(`/dashboard/vendors?status=${statusDt}&fullName=${values.fullName}&mobile=${values.mobile}&email=${values.email}&city=${values.city}&state=${values.state}`);

  }



  React.useEffect(() => {
    getAllCategoriesGlobalApi()
      .then((result) => {
        const catDDLData = result?.data?.Categories?.map((d, i) => {
          return { value: d._id, label: d.name };
        });
        setDdlCategoryData(catDDLData);
      })
      .catch((e) => {});

      getAllTagsGlobalApi()
      .then((result) => {
        const tagDDLData = result?.data?.tags?.map((d, i) => {
          return { value: d._id, label: d.name };
        });
        setDdlTagsData(tagDDLData);
      })
      .catch((e) => {});

  }, []);

  React.useEffect(() => {
 
      getAllSubCategoriesGlobalApi(values.category)
      .then((result) => {
        const subcatDDLData = result?.data?.SubCategories?.map((d, i) => {
          return { value: d._id, label: d.name };
        });
        setDdlSubCategoryData(subcatDDLData);
      })
      .catch((e) => {});
  }, [values.category]);


  const list = (anchor) => (
    <Box
      role="presentation"
      //   onClick={toggleBottomDrawer}
      //   onKeyDown={toggleBottomDrawer}
    >
      <Card
        sx={{
          maxWidth: "100%",
          width: "100%",
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
              "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
            }}
          >
          

            <Element
              eletype={inputType.select}
              label="*Please Select a Status"
              placeholder="*Please select a Status"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "status",
              }}
              errorText={touched.status && errors.status}
              value={values.status}
              styles={{ gridColumn: "span 2" }}
              options={ddlStatusData}
            />
           

           <Element
              eletype={inputType.input}
              label="Please enter Full Name"
              placeholder="Please enter Full Name"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "fullName",
              }}
              errorText={touched.fullName && errors.fullName}
              value={values.fullName}
              styles={{ gridColumn: "span 2" }}
            />
              <Element
              eletype={inputType.input}
              label="Please enter city"
              placeholder="Please enter city"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "city",
              }}
              errorText={touched.city && errors.city}
              value={values.city}
              styles={{ gridColumn: "span 2" }}
            />
              <Element
              eletype={inputType.input}
              label="Please enter state"
              placeholder="Please enter state"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "state",
              }}
              errorText={touched.state && errors.state}
              value={values.state}
              styles={{ gridColumn: "span 2" }}
            />
              <Element
              eletype={inputType.input}
              label="Please enter Mobile Number"
              placeholder="Please enter Mobile Number"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "mobile",
              }}
              errorText={touched.mobile && errors.mobile}
              value={values.mobile}
              styles={{ gridColumn: "span 2" }}
            />
             <Element
              eletype={inputType.input}
              label="Please enter Email"
              placeholder="Please enter Email"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "email",
              }}
              errorText={touched.email && errors.email}
              value={values.email}
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
            onClick={toggleBottomDrawer}
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
           Filter
          </Button>
        </CardActions>
      </Card>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor="bottom"
          open={isBottomDrawer}
          onClose={toggleBottomDrawer}
          sx={{
            "& .MuiPaper-root": {
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
            },
          }}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
