import { Container, Box, Typography, Grid, useTheme ,IconButton,Divider} from "@mui/material";
import Header from "../../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import { tokens } from "../../../theme";
import ModalProfileAccountDisplay from "../../../modals/ModalProfileAccountDisplay";
import DeleteIcon from '@mui/icons-material/Delete';


function Index() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
      

    const printerSettings=({item})=>
        {
            return  (<Box
                sx={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                  minHeight: { xs: "40vh", sm: "40vh", md: "40vh", lg: "40vh" },
                  margin: "15px",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <Box
                  sx={{
                    paddingLeft: "1rem",
                    paddingRight:"1rem",
                    paddingTop:"1rem",
                    paddingBottom:".5rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ width: "90%" }}>
                    <Typography
                      sx={{
                        color: colors.grey[100],
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      {item?.heading}
                    </Typography>
                    <Typography>{item?.subheading}</Typography>
                  </Box>
                  <Box sx={{ width: "10%", textAlign: "center" }}>
                    <IconButton onClick={handleClickOpen} sx={{fontSize:"10px"}}>{item?.icon}</IconButton>
                  </Box>
                </Box>
                <Divider  />
                <Box sx={{paddingLeft:"1rem", marginTop:"1rem", display:"flex", justifyContent:"space-between"}}>
                  <Box>
                    <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}} >Enable Thermal Printing</Typography>
                    <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>Disabled</Typography>
                  </Box>
                  <Box sx={{paddingRight:"1rem",paddingTop:".5rem"}}>
                    <EditIcon fontSize="medium" style={{ fill: "rgb(2, 124, 213)" }}/>
                  </Box>
                 
                </Box>
                <Box sx={{paddingLeft:"1rem", marginTop:"1rem", display:"flex", justifyContent:"space-between"}}>
                  <Box>
                    <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}} >Seller Barcode Printing</Typography>
                    <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>Disabled</Typography>
                  </Box>
                  <Box sx={{paddingRight:"1rem",paddingTop:".5rem"}}>
                    <EditIcon fontSize="medium" style={{ fill: "rgb(2, 124, 213)" }}/>
                  </Box>
                </Box>
                <Box sx={{paddingLeft:"1rem", marginTop:"1rem", display:"flex", justifyContent:"space-between"}}>
                  <Box>
                    <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}} >Barcode Printer</Typography>
                    <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>No Printer Selected</Typography>
                  </Box>
                  <Box sx={{paddingRight:"1rem",paddingTop:".5rem"}}>
                    <EditIcon fontSize="medium" style={{ fill: "rgb(2, 124, 213)" }}/>
                  </Box>
                </Box>
              </Box>)
        }
    
        const fAssuredSetting=({item})=>
            {
                return  (<Box
                    sx={{
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                      minHeight: { xs: "40vh", sm: "40vh", md: "40vh", lg: "40vh" },
                      margin: "15px",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        paddingLeft: "1rem",
                        paddingRight:"1rem",
                        paddingTop:"1rem",
                        paddingBottom:".5rem",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box sx={{ width: "90%" }}>
                        <Typography
                          sx={{
                            color: colors.grey[100],
                            fontWeight: "bold",
                            fontSize: "20px",
                          }}
                        >
                          {item?.heading}
                        </Typography>
                        <Typography>{item?.subheading}</Typography>
                      </Box>
                      <Box sx={{ width: "10%", textAlign: "center" }}>
                        <IconButton onClick={handleClickOpen} sx={{fontSize:"10px"}}>{item?.icon}</IconButton>
                      </Box>
                    </Box>
                    <Divider  />
                    <Box sx={{paddingLeft:"1rem", marginTop:"1rem", display:"flex", justifyContent:"space-between"}}>
                      <Box>
                        <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}} >Automatically add eligible listings to FAssured</Typography>
                        <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>Added</Typography>
                      </Box>
                      <Box sx={{paddingRight:"1rem",paddingTop:".5rem"}}>
                      <EditIcon fontSize="medium" style={{ fill: "rgb(2, 124, 213)" }}/>
                      </Box>
                     
                    </Box>
                    <Box sx={{paddingLeft:"1rem", marginTop:"1rem"}}>
                      <Box>
                        <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}} >
                            Selecting this option will always add all the eligible listings to F-Assured automatically
                            </Typography>
                      </Box>
                    </Box>
                  </Box>)
            }
            const fbfInvoiceSetting=({item})=>
                {
                    return  (<Box
                        sx={{
                          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                          minHeight: { xs: "40vh", sm: "40vh", md: "40vh", lg: "40vh" },
                          margin: "15px",
                          "&:hover": {
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            paddingLeft: "1rem",
                            paddingRight:"1rem",
                            paddingTop:"1rem",
                            paddingBottom:".5rem",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box sx={{ width: "90%" }}>
                            <Typography
                              sx={{
                                color: colors.grey[100],
                                fontWeight: "bold",
                                fontSize: "20px",
                              }}
                            >
                              {item?.heading}
                            </Typography>
                            <Typography>{item?.subheading}</Typography>
                          </Box>
                          <Box sx={{ width: "10%", textAlign: "center" }}>
                            <IconButton onClick={handleClickOpen} sx={{fontSize:"10px"}}>{item?.icon}</IconButton>
                          </Box>
                        </Box>
                        <Divider  />
                        <Box sx={{paddingLeft:"1rem", marginTop:"1rem", display:"flex", justifyContent:"space-between"}}>
                          <Box>
                            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}} >Enable e-invoicing for FBF</Typography>
                            <Typography sx={{   color: colors.grey[400],fontSize:"14px",  fontWeight: "600",}}>Disabled</Typography>
                          </Box>
                          <Box sx={{paddingRight:"1rem",paddingTop:".5rem"}}>
                          <EditIcon fontSize="medium" style={{ fill: "rgb(2, 124, 213)" }}/>
                          </Box>
                         
                        </Box>
                        <Box sx={{paddingLeft:"1rem", marginTop:"1rem"}}>
                          <Box>
                            <Typography sx={{   color: colors.grey[700],fontSize:"14px",  fontWeight: "600",}} >GSTIN has notified that from 1st January 2023 any business who have an aggregate turnover of over Rs 5 crores in any of the financial years from 2017-18 must issue e-invoices for all B2B transactions. To support eligible sellers to comply with GoI's e-Invoicing compliance, Flipkart has a feature E-Invoice Onboarding in Seller Portal through which for all consignments and recalls you can opt for generating e-Invoices and authorise Flipkart to generate e-Invoices on your behalf for B2B transactions.</Typography>
                          </Box>
                       
                         
                        </Box>
                      </Box>)
                }

                const accountData = [
                    {
                      heading: "Printer settings",
                      subheading: "",
                      link: "account",
                      btntext:"Add Holiday",
                      comp:printerSettings,
                      // icon: <EditIcon fontSize="medium" style={{ fill: "rgb(2, 124, 213)" }} />,
                    },
                    {
                      heading: "F-Assured Settings",
                      subheading: "",
                      btntext:"",
                      link: "address",
                      comp:fAssuredSetting,
                    //   icon: <EditIcon fontSize="medium" style={{ fill: "rgb(2, 124, 213)" }} />,
                    },
                    {
                      heading: "FBF invoice setting",
                      subheading: "",
                      btntext:"",
                      link: "bankdetails",
                      comp:fbfInvoiceSetting
                    //   icon: <EditIcon fontSize="medium" style={{ fill: "rgb(2, 124, 213)" }} />,
                    },
                  ];
        
  
  return (
    <Container>
      <Header title="Calendar Details" subtitle="Manage Calendar" />
      <Grid container>
        {accountData?.map((item, index) => {
          const Component = item?.comp;
            return <Grid item key={index} xs={12} sm={12} md={6} lg={6}> <Component item={item} /></Grid> 
          
        })}
      </Grid>
    </Container>
  );
}

export default Index;
