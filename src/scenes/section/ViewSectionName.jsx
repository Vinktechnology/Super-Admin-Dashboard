import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme.js";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header.jsx";
import { useDispatch } from "react-redux";
import ImageSlider from "../../components/ImageSlider/ImageSlider.js";
import { globalFormatDate } from "../../utils/formatTime.js";
import { getHomeSectionByIdThunk } from "../../store/slices/homesection/homesection.slice.js";
import { renderArrayColumns } from "../../utils/utilityfunction.js";

const ViewSectionName = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [viewdata, setViewData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (params.Id) {
      dispatch(getHomeSectionByIdThunk(params.Id))
        .unwrap()
        .then((da) => {
          console.log("setViewData",da)
          setViewData(da);
        });
    }
  }, [params.Id]);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="SECTION DATA" subtitle="View a Section" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={() => navigate("/dashboard/section")}
          >
            Back to Section
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          //   height: { xs: "100vh", sm: "100vh", md: "100vh", lg: "100vh" },
          margin: "15px",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Box
          sx={{
            padding: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "top",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "40%",
                lg: "40%",
                xl: "40%",
              },
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: colors.grey[400],
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  textAlign: "center",
                  margin: "0px 0px 10px 0px",
                }}
              >
                {viewdata?.sectionName}
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <img
                src={viewdata?.imageLink}
                style={{ width: "100%", maxHeight: "100%" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "60%",
                lg: "60%",
                xl: "60%",
              },
            }}
          >
            <Box
              sx={{ padding: "1rem" }}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Box sx={{ width: "50%" }}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Section Heading
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  {viewdata?.sectionHeading}
                </Typography>
              </Box>
              <Box sx={{ width: "50%" }}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Section Sub Heading
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  {viewdata?.sectionSubHeading}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{ padding: "1rem" }}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Box sx={{ width: "50%" }}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Description
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  {viewdata?.sectionDescription}
                </Typography>
              </Box>
              <Box sx={{ width: "50%" }}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Brand
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  {viewdata?.brand==true?"Yes":"No"}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{ padding: "1rem" }}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Box sx={{ width: "50%" }}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Category
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  {viewdata?.category?.name?viewdata?.category?.name :"--"}
                </Typography>
              </Box>
              <Box sx={{ width: "50%" }}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Sub Category
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                          {viewdata?.subCategory?.length>0 ?renderArrayColumns(viewdata?.subCategory):"--"}
                          
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{ padding: "1rem" }}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
            
              <Box sx={{ width: "50%" }}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                Tag
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {viewdata?.tag?.name?viewdata?.tag?.name:"--"}
                </Typography>
              </Box>
              <Box sx={{ width: "50%" }}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Is Active
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  {viewdata?.isActive ? "Active" : "In-Active"}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ padding: "1rem" }}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Box sx={{ width: "50%" }}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Created By
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  {viewdata?.createdBy?.fullName}
                </Typography>
              </Box>
              <Box sx={{ width: "50%" }}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Created On
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  {globalFormatDate(viewdata?.createdAt)}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{ padding: "1rem" }}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Box sx={{ width: "50%" }}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Updated By
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  {viewdata?.updatedBy?.fullName}
                </Typography>
              </Box>
              <Box sx={{ width: "50%" }}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Updated On
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  {globalFormatDate(viewdata?.updatedAt)}
                </Typography>
              </Box>
            </Box>

           
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewSectionName;
