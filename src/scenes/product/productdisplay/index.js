import {
  Box,
  Typography,
  useTheme,
  Container,
  Chip,
  Divider,
  Button,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { tokens } from "../../../theme";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header";
import { useDispatch } from "react-redux";
import {
  approveVendorDataThunk,
  getVendorByIdThunk,
} from "../../../store/slices/vendor/vendor.slice";
import ConfirmDialogBox from "../../../components/ConfirmDialogBox/ConfirmDialogBox.js";
import {
  approveProductDataThunk,
  getProductsIdThunk,
} from "../../../store/slices/product/product.slice.js";
import { renderArrayColumns } from "../../../utils/utilityfunction.js";
import ImageSlider from "../../../components/ImageSlider/ImageSlider.js";
import ProductApprovalDialogBox from "../../../modals/ProductApprovalDialogBox.js";

function Index() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const params = useParams();
  const dispatch = useDispatch();
  const [viewdata, setViewData] = useState(null);
  const [open, setOpen] = useState(false);
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);

  const handleRejection = () => {
    setIsProductDialogOpen(true);
  };

  const handleApproval = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (params.Id) {
      dispatch(getProductsIdThunk(params.Id))
        .unwrap()
        .then((da) => {
          console.log("da", da);
          setViewData(da);
        });
    }
  }, [params.Id]);

  const fncHandleDialog = (isConfirmed) => {

    console.log("isConfirmed",isConfirmed)
    const apprData = {
      approveStatus: isConfirmed ? "approved":"rejected",
      reason: "",
      id: params.Id,
    };
    console.log("apprData",apprData)

    if (isConfirmed) {
      dispatch(approveProductDataThunk(apprData))
      .unwrap()
      .then((da) => {
        window.location.reload();
      });
    }
    setOpen(false);
  };

  const fncRejectionHandleDialog = (isConfirmed) => {


    const conObject = isConfirmed?.section?.reduce((acc, obj) => {
      acc[obj.value] =true;
      return acc;
    }, {});

    const apprData = {
      approveStatus: isConfirmed?.isSubmit && "rejected",
      reason: isConfirmed.reason,
      rejectedSections: {
        stockAndShippingInformation: conObject?.stockAndShippingInformation ==undefined?false:conObject?.stockAndShippingInformation,
        priceInfo: conObject?.priceInfo==undefined?false:conObject?.priceInfo,
        productDescription: conObject?.productDescription==undefined?false:conObject?.productDescription,
        additionalDescription: conObject?.additionalDescription==undefined?false:conObject?.additionalDescription,
        productImages:conObject?.productImages==undefined?false:conObject?.productImages,
      },
      id: params.Id,
    };


    if (isConfirmed?.isSubmit) {
      dispatch(approveProductDataThunk(apprData))
        .unwrap()
        .then((da) => {
          window.location.reload();
        });
    }
    setIsProductDialogOpen(false);
  };

  const [openImage, setOpenImage] = useState(false);
  const handleClickOpen = (index) => {
    setOpenImage(true);
  };

  const handleClose = () => {
    setOpenImage(false);
  };

  const fncRenderApprovalSection = () => {
    if (viewdata?.status == "QCPending") {
      return (
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Box sx={{ margin: ".6rem" }}>
            <Chip
              label="Reject"
              onClick={handleRejection}
              sx={{
                fontWeight: "600",
                fontSize: {
                  xs: "1rem",
                  sm: "1rem",
                  md: "1.4rem",
                  lg: "1.4rem",
                  xl: "1.4rem",
                },
                padding: {
                  xs: "1.5rem",
                  sm: "1.5rem",
                  md: "1.5rem",
                  lg: "1.5rem",
                  xl: "1.5rem",
                },
                background: "rgb(255, 236, 236)",
                color: "rgb(232, 92, 92)",
              }}
            />
          </Box>

          <Box sx={{ marginTop: ".6rem" }}>
            <Chip
              label="Approve"
              onClick={handleApproval}
              sx={{
                fontWeight: "600",
                fontSize: {
                  xs: "1rem",
                  sm: "1rem",
                  md: "1.4rem",
                  lg: "1.4rem",
                  xl: "1.4rem",
                },
                padding: {
                  xs: "1.5rem",
                  sm: "1.5rem",
                  md: "1.5rem",
                  lg: "1.5rem",
                  xl: "1.5rem",
                },
                background: "rgb(229, 245, 238)",
                color: "rgb(39, 172, 112)",
              }}
            />
          </Box>
        </Box>
      );
    } else if (viewdata?.status == "rejected") {
      return (
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Rejection Reason
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              QC Rejected the Product
            </Typography>
          </Box>
        </Box>
      );
    } else if (viewdata?.status == "draft") {
      return (
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {/* Draft Reason */}
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Product is in Draft Mode
            </Typography>
          </Box>
        </Box>
      );
    }
  };

  return (
    <Container>
      <ConfirmDialogBox
        title="Are you sure you want to approve the Product?"
        body="If you Approved the product, then a mail will be sent to the vendor about the approval and he will be able to see this product on our platform."
        cancel="Cancel"
        confirm="Confirm"
        fncHandleDialog={fncHandleDialog}
        isopen={open}
      />

      <ProductApprovalDialogBox
        title="Are you sure you want to reject the Product?"
        body="If you reject the product, then a mail will be sent to the vendor about the rejection of the product."
        cancel="Cancel"
        confirm="Confirm"
        fncHandleDialog={fncRejectionHandleDialog}
        isopen={isProductDialogOpen}
      />

      <ImageSlider
        title="Product Images"
        sampleImages={viewdata?.productImages}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={openImage}
      />

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Product" subtitle="Manage Product" />

        <Box>
          {viewdata?.status == "approved" ? (
            <Chip
              label={viewdata?.status}
              sx={{
                fontWeight: "600",
                background: "rgb(229, 245, 238)",
                color: "rgb(39, 172, 112)",
                fontSize: "2rem",
                height: "auto",
                width: "auto",
              }}
            />
          ) : (
            <Chip
              label={viewdata?.status}
              sx={{
                fontWeight: "600",
                background: "rgb(255, 236, 236)",
                color: "rgb(232, 92, 92)",
                fontSize: "2rem",
                height: "auto",
                width: "auto",
              }}
            />
          )}
        </Box>
      </Box>

      {/* /////////////////////-------------------------Vendor information---------------------------/////////////////////////////// */}

      <Box
        sx={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          minHeight: { xs: "30vh", sm: "30vh", md: "30vh", lg: "30vh" },
          margin: "15px",
          paddingBottom: "3rem",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "1rem",
            paddingBottom: ".5rem",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                color: colors.grey[100],
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Vendor Basic Information
            </Typography>
            <Typography>Vendor Details Verification</Typography>
          </Box>
        </Box>
        <Divider sx={{ marginBottom: "1rem" }} />
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
        >
          <Box sx={{ flex: 1, mb: 2, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Vendor Name
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.vendorId?.fullName}
            </Typography>
          </Box>

          <Box sx={{ flex: 1, mb: 2, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Email
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.vendorId?.email}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Mobile No
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.vendorId?.mobile}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
        >
          <Box sx={{ flex: 1, mb: 2, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              GST No
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.vendorId?.gstNumber}
            </Typography>
          </Box>

          <Box sx={{ flex: 1, mb: 2, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Company Name
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.gstData?.legalName}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Pan Number
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.gstData?.panNumber}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
        >
          <Box sx={{ flex: 1, mb: 2, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              TAN NO
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.gstData?.gstIn}
            </Typography>
          </Box>

          <Box sx={{ flex: 1, mb: 2, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              GST Registered Mobile
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.gstData?.mobile}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              GST Registered Email
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.gstData?.email}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* /////////////////////-------------------------Mobile and Email Verification Ends----------------------------/////////////////////////////// */}
      {/* /////////////////////-------------------------Mobile and Email Verification Starts----------------------------/////////////////////////////// */}

      <Box
        sx={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          minHeight: { xs: "30vh", sm: "30vh", md: "30vh", lg: "30vh" },
          margin: "15px",
          paddingBottom: "3rem",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "1rem",
            paddingBottom: ".5rem",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                color: colors.grey[100],
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Product Category And Brand
            </Typography>
            <Typography>Product Category And Brand Verification</Typography>
          </Box>
        </Box>
        <Divider sx={{ marginBottom: "1rem" }} />
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
        >
          <Box sx={{ flex: 1, mb: 2, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Category
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.categoryId?.name}
            </Typography>
          </Box>

          <Box sx={{ flex: 1, mb: 2, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Sub Category
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.productDescription?.subCategory?.name}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Brand
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.brandId?.brandName}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        ></Box>
      </Box>

      {/* /////////////////////-------------------------Mobile and Email Verification Ends----------------------------/////////////////////////////// */}
      {/* /////////////////////-------------------------GST DETAILS STARTS----------------------------/////////////////////////////// */}

      <Box
        sx={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          minHeight: { xs: "30vh", sm: "30vh", md: "30vh", lg: "30vh" },
          margin: "15px",
          paddingBottom: "3rem",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "1rem",
            paddingBottom: ".5rem",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                color: colors.grey[100],
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Stock And Shipping Info
            </Typography>
            <Typography>
              Stock And Shipping Info Verification Details
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ marginBottom: "1rem" }} />
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
        >
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Seller SKU Id
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.stockAndShippingInformation?.skuId}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Listing Status
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.stockAndShippingInformation?.listingStatus?.name}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Procurement Type
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.stockAndShippingInformation?.procurementType?.name}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
        >
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Procurement SLA
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.stockAndShippingInformation?.procurementSLA}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Stock
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.stockAndShippingInformation?.stock}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Manufacturer Details
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.stockAndShippingInformation?.manufacturerDetails}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
        >
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Length
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.stockAndShippingInformation?.dimensions?.length}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Breadth
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.stockAndShippingInformation?.dimensions?.breadth}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Height
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.stockAndShippingInformation?.dimensions?.height}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
        >
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Weight
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.stockAndShippingInformation?.dimensions?.weight}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              HSN Code
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.stockAndShippingInformation?.hsn?.name}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              GST Tax Code
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.stockAndShippingInformation?.taxCode?.name}
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* /////////////////////-------------------------GST DETAILS ENDS----------------------------/////////////////////////////// */}

      {/* /////////////////////-------------------------STORE DETAILS----------------------------/////////////////////////////// */}

      <Box
        sx={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          minHeight: { xs: "30vh", sm: "30vh", md: "30vh", lg: "30vh" },
          margin: "15px",
          paddingBottom: "3rem",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "1rem",
            paddingBottom: ".5rem",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                color: colors.grey[100],
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Price Info
            </Typography>
            <Typography>Price Info Verification Details</Typography>
          </Box>
        </Box>
        <Divider sx={{ marginBottom: "1rem" }} />
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
        >
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              MRP
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.priceInfo?.mrp}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Selling Price
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.priceInfo?.sellingPrice}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Minimum Order Quantity
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.priceInfo?.packOf?.name}
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* /////////////////////-------------------------STORE AND PICKUP DETAILS----------------------------/////////////////////////////// */}

      {/* /////////////////////-------------------------PICKUP DETAILS----------------------------/////////////////////////////// */}

      <Box
        sx={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          minHeight: { xs: "30vh", sm: "30vh", md: "30vh", lg: "30vh" },
          margin: "15px",
          paddingBottom: "3rem",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "1rem",
            paddingBottom: ".5rem",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                color: colors.grey[100],
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Product Description
            </Typography>
            <Typography>Product Description Verification Details</Typography>
          </Box>
        </Box>
        <Divider sx={{ marginBottom: "1rem" }} />
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
        >
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Size
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.productDescription?.size?.name}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Style Code
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.productDescription?.styleCode}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Ocassion
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {renderArrayColumns(viewdata?.productDescription?.occasion)}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
        >
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Fabric
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {renderArrayColumns(viewdata?.productDescription?.fabric)}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Pattern
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {renderArrayColumns(viewdata?.productDescription?.pattern)}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Sub-Category
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.productDescription?.type?.name}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
        >
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Tags
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {renderArrayColumns(viewdata?.productDescription?.tags)}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Sari Purity
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.productDescription?.purity?.name}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Color
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {renderArrayColumns(viewdata?.productDescription?.color)}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
        >
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Ideal For
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.productDescription?.idealFor?.name}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Blouse Piece Type
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.productDescription?.blousePieceType?.name}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Fabric Care
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {renderArrayColumns(viewdata?.productDescription?.fabricCare)}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
        >
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Sari Length
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.productDescription?.sariLength?.name}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Blouse Piece Length
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.productDescription?.blousePieceLength}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Sari Style
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.productDescription?.sariStyle?.name}
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* /////////////////////------------------------- PICKUP DETAILS----------------------------/////////////////////////////// */}

      {/* /////////////////////-------------------------Bank DETAILS starts----------------------------/////////////////////////////// */}

      <Box
        sx={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          minHeight: { xs: "30vh", sm: "30vh", md: "30vh", lg: "30vh" },
          margin: "15px",
          paddingBottom: "3rem",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "1rem",
            paddingBottom: ".5rem",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                color: colors.grey[100],
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Additional Information
            </Typography>
            <Typography>Additional Information Verification Details</Typography>
          </Box>
        </Box>
        <Divider sx={{ marginBottom: "1rem" }} />
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
        >
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Product Title
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.additionalDescription?.productTitle}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Product Description
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.additionalDescription?.description}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Handloom Product
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.additionalDescription?.handloomProduct?.name}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
        >
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Hand Embroidery
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.additionalDescription?.handEmbroidery?.name}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Type of Embroidery
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.additionalDescription?.typeOfEmbroidery?.name}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Embroidery Method
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.additionalDescription?.embroideryMethod?.name}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
        >
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Trend
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {renderArrayColumns(viewdata?.additionalDescription?.trend)}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Pattern/Print Type
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {renderArrayColumns(
                viewdata?.additionalDescription?.patternPrintType
              )}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Border Details
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {renderArrayColumns(
                viewdata?.additionalDescription?.borderDetails
              )}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
        >
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Blouse Pattern
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {renderArrayColumns(
                viewdata?.additionalDescription?.blousePattern
              )}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Decorative Material
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {renderArrayColumns(
                viewdata?.additionalDescription?.decorativeMaterial
              )}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Blouse Fabric
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {renderArrayColumns(
                viewdata?.additionalDescription?.blouseFabric
              )}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
        >
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Single Sari Weight
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.additionalDescription?.singleSariWeight}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Border Length
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.additionalDescription?.borderLength?.name}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mb: 2 }}></Box>
        </Box>
      </Box>
      {/* /////////////////////------------------------- BANK DETAILS STARTS----------------------------/////////////////////////////// */}

      {/* /////////////////////-------------------------Bank DETAILS starts----------------------------/////////////////////////////// */}

      <Box
        sx={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          minHeight: { xs: "30vh", sm: "30vh", md: "30vh", lg: "30vh" },
          margin: "15px",
          paddingBottom: "3rem",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "1rem",
            paddingBottom: ".5rem",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                color: colors.grey[100],
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Product Images
            </Typography>
            <Typography>Product Images Verification Details</Typography>
          </Box>
        </Box>
        <Divider sx={{ marginBottom: "1rem" }} />
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Grid container spacing={0}>
              {viewdata?.productImages?.map((da, i) => (
                <Grid
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{ padding: "10px" }}
                  onClick={() => handleClickOpen()}
                >
                  <img src={da} style={{ width: "100%", maxHeight: "100%" }} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
      {/* /////////////////////------------------------- BANK DETAILS STARTS----------------------------/////////////////////////////// */}

      {/* /////////////////////-------------------------Approved or Rejected DETAILS----------------------------/////////////////////////////// */}

      <Box
        sx={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          minHeight: { xs: "20vh", sm: "15vh", md: "15vh", lg: "15vh" },
          margin: "15px",
          marginBottom: "5rem",
          paddingBottom: "3rem",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Box
          sx={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "1rem",
            paddingBottom: ".5rem",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                color: colors.grey[100],
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Approve/Reject Product
            </Typography>
            <Typography>Product Approval or Rejection Window</Typography>
          </Box>
        </Box>
        <Divider sx={{ marginBottom: "1rem" }} />

        {fncRenderApprovalSection()}
      </Box>
      {/* /////////////////////------------------------- PICKUP DETAILS----------------------------/////////////////////////////// */}
    </Container>
  );
}

export default Index;
