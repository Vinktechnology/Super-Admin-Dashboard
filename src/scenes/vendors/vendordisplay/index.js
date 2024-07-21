import {
  Box,
  Typography,
  useTheme,
  Container,
  Chip,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { tokens } from "../../../theme";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header";

function Index() {
  const { Id } = useParams();
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRejection=()=>
  {
    alert("Rejected the vendor")
  }

  const handleApproval=()=>
    {
      alert("Approved the vendor")
    }
  return (
    <Container>
      <Header title="Vendor Profile" subtitle="Manage Vendor Profile" />
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
              +919716500323
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
              vikrantitpro@gmail.com
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
              07AAJCV0146L1Z4
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
              Vikrant kaushik
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
              Vikrant2106
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
              110045
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
              RZ-26-P/4A, 3rd Floor, Gali No-31, Indra Park, Palam Village,
              South West Delhi , Sudhir Doctor Clinic, NEW DELHI, DELHI
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
              20191279082
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
              SBIN0000733
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
              Mr. VIKRANT KAUSHIK
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
          marginBottom:"5rem",
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
          <Box sx={{margin:".6rem"}}>
          <Chip
              label="Reject"
              onClick={handleRejection}
              sx={{
                fontWeight: "600",
                fontSize:{xs:"1rem", sm:"1rem", md:"1.4rem", lg:"1.4rem", xl:"1.4rem"},
                padding:{xs:"1.5rem", sm:"1.5rem", md:"1.5rem", lg:"1.5rem", xl:"1.5rem"},
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
                fontSize:{xs:"1rem", sm:"1rem", md:"1.4rem", lg:"1.4rem", xl:"1.4rem"},
                padding:{xs:"1.5rem", sm:"1.5rem", md:"1.5rem", lg:"1.5rem", xl:"1.5rem"},
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
