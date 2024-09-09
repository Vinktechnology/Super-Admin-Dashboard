import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../../src/theme.js";
import { Link as RouterLink, useLocation, useNavigate, useParams } from "react-router-dom";
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
import {
  addNewCategoryThunk,
  getCategoryByIdThunk,
  updateCategoryThunk,
} from "../../store/slices/category/category.slice.js";
import ImageSlider from "../../components/ImageSlider/ImageSlider.js";
import { globalFormatDate } from "../../utils/formatTime.js";
import { getBannerByIdThunk } from "../../store/slices/banner/banner.slice.js";

const ViewBanner = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [viewdata, setViewData] = useState(null);
  const navigate = useNavigate();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const comesFrom = query.get('comesFrom');


  const [open, setOpen] = useState(false);
  const handleClickOpen = (index) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (params.Id) {
      dispatch(getBannerByIdThunk(params.Id))
        .unwrap()
        .then((da) => {
          console.log("viewdata", da);
          setViewData(da);
        });
    }
  }, [params.Id]);

  return (
    <Box m="20px">
      <ImageSlider
        title="Carousel Images"
        sampleImages={viewdata?.image}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
        isCarousel={true}
      />

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="BANNER DATA" subtitle="View a Banner" />

        <Box>
          {
            comesFrom==="home"?    <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={() => navigate("/dashboard/home")}
          >
            Back to Home
          </Button>:   <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={() => navigate("/dashboard/banner")}
          >
            Back to Banner
          </Button>
          }
       
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
                {viewdata?.title}
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <img
                src={viewdata?.image?.[0]?.imageUrl}
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
                  Name
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  {viewdata?.title}
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
                  Screen To Be Displayed On
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  {viewdata?.onScreenToBeDisplayed}
                </Typography>
              </Box>
            </Box>

            <Grid container sx={{ padding: "1rem" }}>
              <Grid item xs={6}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Scrolling Type
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  {viewdata?.scrollingType}
                </Typography>
              </Grid>
              {viewdata?.scrollingType=="Single" && viewdata?.image?.map((da) => (
                <>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: colors.grey[700],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Company Name
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.grey[400],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      {da?.companiesname}
                    </Typography>
                  </Grid>

                  <Grid item xs={6} sx={{ mt: "2rem" }}>
                    <Typography
                      sx={{
                        color: colors.grey[700],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Type Of Marketing
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.grey[400],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      {da?.typeOfMarketing}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sx={{ mt: "2rem" }}>
                    <Typography
                      sx={{
                        color: colors.grey[700],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Navigation Url
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.grey[400],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      {da?.navigationUrl}
                    </Typography>
                  </Grid>

                  <Grid item xs={6} sx={{ mt: "2rem" }}>
                    <Typography
                      sx={{
                        color: colors.grey[700],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Start Date
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.grey[400],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      {globalFormatDate(da?.startDate)}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sx={{ mt: "2rem" }}>
                    <Typography
                      sx={{
                        color: colors.grey[700],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      End Date
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.grey[400],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      {globalFormatDate(da?.endDate)}
                    </Typography>
                  </Grid>

                  <Grid item xs={6} sx={{ mt: "2rem" }}>
                    <Typography
                      sx={{
                        color: colors.grey[700],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Time From
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.grey[400],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      {da?.timeSlots?.from}
                    </Typography>
                  </Grid>

                  <Grid item xs={6} sx={{ mt: "2rem" }}>
                    <Typography
                      sx={{
                        color: colors.grey[700],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Time To
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.grey[400],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      {da?.timeSlots?.to}
                    </Typography>
                  </Grid>
                </>
              ))}
            </Grid>

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
              <Box sx={{ width: "50%" }}>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {/* Is Active */}
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[400],
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {/* {viewdata?.isActive?"Active":"In-Active"} */}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {viewdata?.scrollingType == "Carousel" && (
          <Box sx={{ marginTop: "1rem" }}>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "1.3rem",
                padding: "0px 0px 0px .8rem",
                fontWeight: "600",
              }}
            >
              Carousel Images
            </Typography>
            <hr />
            <Grid container spacing={0}>
              {viewdata?.image?.map((da, i) => (
                <Grid
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{ padding: "10px" }}
                  onClick={() => handleClickOpen()}
                >
                  <Box sx={{height:"500px"}}>
                  <img
                    src={da?.imageUrl}
                    style={{ width: "100%", maxHeight: "100%" }}
                  />
                  </Box>
                  <Box sx={{mt:2, border:"1px  grey"}}>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: colors.grey[700],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Company Name
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.grey[400],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      {da?.companiesname}
                    </Typography>
                  </Grid>
                  <Divider />

                  <Grid item xs={6} sx={{ mt: "2rem" }}>
                    <Typography
                      sx={{
                        color: colors.grey[700],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Type Of Marketing
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.grey[400],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      {da?.typeOfMarketing}
                    </Typography>
                  </Grid>
                  <Divider />
                  <Grid item xs={6} sx={{ mt: "2rem" }}>
                    <Typography
                      sx={{
                        color: colors.grey[700],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Navigation Url
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.grey[400],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      {da?.navigationUrl}
                    </Typography>
                  </Grid>
                  <Divider />
                  <Grid item xs={6} sx={{ mt: "2rem" }}>
                    <Typography
                      sx={{
                        color: colors.grey[700],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Start Date
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.grey[400],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      {globalFormatDate(da?.startDate)}
                    </Typography>
                  </Grid>
                  <Divider />
                  <Grid item xs={6} sx={{ mt: "2rem" }}>
                    <Typography
                      sx={{
                        color: colors.grey[700],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      End Date
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.grey[400],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      {globalFormatDate(da?.endDate)}
                    </Typography>
                  </Grid>
                  <Divider />
                  <Grid item xs={6} sx={{ mt: "2rem" }}>
                    <Typography
                      sx={{
                        color: colors.grey[700],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Time From
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.grey[400],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      {da?.timeSlots?.from}
                    </Typography>
                  </Grid>
                  <Divider />
                  <Grid item xs={6} sx={{ mt: "2rem" }}>
                    <Typography
                      sx={{
                        color: colors.grey[700],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Time To
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.grey[400],
                        fontSize: "14px",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      {da?.timeSlots?.to}
                    </Typography>
                  </Grid>
                  <Divider />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ViewBanner;
