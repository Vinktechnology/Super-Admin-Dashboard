import {
  Box,
  Typography,
  useTheme,
  Container,
  Chip,
  Divider,
  Button,
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
import ConfirmDialogBox from "../../../components/ConfirmDialogBox/ConfirmDialogBox";

function Index() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const params = useParams();
  const dispatch = useDispatch();
  const [viewdata, setViewData] = useState(null);
  const [open, setOpen] = useState(false);

  const handleRejection = () => {
    alert("Rejected the vendor");
  };

  const handleApproval = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (params.Id) {
      dispatch(getVendorByIdThunk(params.Id))
        .unwrap()
        .then((da) => {
          console.log("da", da);
          setViewData(da);
        });
    }
  }, [params.Id]);

  const fncHandleDialog = (isConfirmed) => {
    const apprData = {
      approveStatus: isConfirmed ? "approved" : "rejected",
      reason: "",
      id: params.Id,
    };

    if (isConfirmed) {
      dispatch(approveVendorDataThunk(apprData));
    }
    setOpen(false);
  };

  return (
    <Container>
      <ConfirmDialogBox
        title="Are you sure you want to approve the vendor?"
        body="If you Approved the vendor, then a mail will be sent to the vendor about the approval and he will be able to login into the vendor dashboard."
        cancel="Cancel"
        confirm="Confirm"
        fncHandleDialog={fncHandleDialog}
        isopen={open}
      />

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Vendor Profile" subtitle="Manage Vendor Profile" />

        <Box>
          {viewdata?.approvalStatus == "approved" ? (
            <Chip
              label={viewdata?.approvalStatus}
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
              label={viewdata?.approvalStatus}
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
              Mobile & Email Verification
            </Typography>
            <Typography>Vendors Mobile and Email Verification</Typography>
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
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Mobile
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.mobile}
            </Typography>
          </Box>
          <Box sx={{ marginTop: ".6rem" }}>
            <Chip
              label="Verified"
              sx={{
                fontWeight: "600",
                background: "rgb(229, 245, 238)",
                color: "rgb(39, 172, 112)",
              }}
            />
          </Box>
        </Box>
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
              Email
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.email}
            </Typography>
          </Box>
          <Box sx={{ marginTop: ".6rem" }}>
            <Chip
              label="Verified"
              sx={{
                fontWeight: "600",
                background: "rgb(229, 245, 238)",
                color: "rgb(39, 172, 112)",
              }}
            />
          </Box>
        </Box>
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
              GST Details
            </Typography>
            <Typography>Vendors GST Verification Details</Typography>
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
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              GST NO
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.gstNumber}
            </Typography>
          </Box>
          <Box sx={{ marginTop: ".6rem" }}>
            <Chip
              label="Verified"
              sx={{
                fontWeight: "600",
                background: "rgb(229, 245, 238)",
                color: "rgb(39, 172, 112)",
              }}
            />
          </Box>
        </Box>
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
              GST Registeration Details
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              VINK Technology Private Limited <br />
              AAJCV0146L <br />
              Private Limited Company <br />
              3rd Floor, WZ-1370, Nangal raya, New Delhi, South West Delhi, NEW
              DELHI, DELHI, 110046
            </Typography>
          </Box>
          <Box sx={{ marginTop: ".6rem" }}>
            <Chip
              label="Verified"
              sx={{
                fontWeight: "600",
                background: "rgb(229, 245, 238)",
                color: "rgb(39, 172, 112)",
              }}
            />
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
              Store
            </Typography>
            <Typography>Vendors Store Verification Details</Typography>
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
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Full Name
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.fullName}
            </Typography>
          </Box>
          <Box sx={{ marginTop: ".6rem" }}>
            <Chip
              label="Verified"
              sx={{
                fontWeight: "600",
                background: "rgb(229, 245, 238)",
                color: "rgb(39, 172, 112)",
              }}
            />
          </Box>
        </Box>
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
              Display Name
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.displayName}
            </Typography>
          </Box>
          <Box sx={{ marginTop: ".6rem" }}>
            <Chip
              label="Verified"
              sx={{
                fontWeight: "600",
                background: "rgb(229, 245, 238)",
                color: "rgb(39, 172, 112)",
              }}
            />
          </Box>
        </Box>
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
              Store Description
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Digital Products
            </Typography>
          </Box>
          <Box sx={{ marginTop: ".6rem" }}>
            <Chip
              label="Verified"
              sx={{
                fontWeight: "600",
                background: "rgb(229, 245, 238)",
                color: "rgb(39, 172, 112)",
              }}
            />
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
              Pick up Details
            </Typography>
            <Typography>Vendors Pick up Verification Details</Typography>
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
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Pincode
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.pickUpAddress?.[0]?.pinCode}
            </Typography>
          </Box>
          <Box sx={{ marginTop: ".6rem" }}>
            <Chip
              label="Serviceable"
              sx={{
                fontWeight: "600",
                background: "rgb(229, 245, 238)",
                color: "rgb(39, 172, 112)",
              }}
            />
          </Box>
        </Box>
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
              Address
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.pickUpAddress?.[0]?.addressLine1} ,
              {viewdata?.pickUpAddress?.[0]?.addressLine2} <br />
              {viewdata?.pickUpAddress?.[0]?.city} <br />
              {viewdata?.pickUpAddress?.[0]?.state} <br />
              {viewdata?.pickUpAddress?.[0]?.pinCode}
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
              Bank Account Information
            </Typography>
            <Typography>Vendors Bank Account Verification Details</Typography>
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
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Account Number
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.bankDetails?.accountNumber}
            </Typography>
          </Box>
          <Box sx={{ marginTop: ".6rem" }}>
            <Chip
              label="Verified"
              sx={{
                fontWeight: "600",
                background: "rgb(229, 245, 238)",
                color: "rgb(39, 172, 112)",
              }}
            />
          </Box>
        </Box>
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
              IFSC Code
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.bankDetails?.ifscCode}
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
        >
          <Box>
            <Typography
              sx={{
                color: colors.grey[700],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Account Holder's Name
            </Typography>
            <Typography
              sx={{
                color: colors.grey[400],
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {viewdata?.fullName}
            </Typography>
          </Box>
          <Box sx={{ marginTop: ".6rem" }}>
            {/* <Chip
              label="Verified"
              sx={{
                fontWeight: "600",
                background: "rgb(229, 245, 238)",
                color: "rgb(39, 172, 112)",
              }}
            /> */}

            <Chip
              label="Verification Failed"
              sx={{
                fontWeight: "600",
                background: "rgb(255, 236, 236)",
                color: "rgb(232, 92, 92)",
              }}
            />
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
              Approve/Reject Vendor
            </Typography>
            <Typography>Vendors Approval or Rejection Window</Typography>
          </Box>
        </Box>
        <Divider sx={{ marginBottom: "1rem" }} />
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
      </Box>
      {/* /////////////////////------------------------- PICKUP DETAILS----------------------------/////////////////////////////// */}
    </Container>
  );
}

export default Index;
