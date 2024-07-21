import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProductAdditionalInformationNavigation from "./additionalfeatures/ProductAdditionalInformationNavigation";
import ProductDescriptionNavigation from "./additionalfeatures/ProductDescriptionNavigation";
import ProductPrice from "./additionalfeatures/ProductPrice";
import ProductStock from "./additionalfeatures/ProductStock";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SariVariants from "./SariVariants";
import SariSingleProduct from "./SariSingleProduct";
import { Box, Container } from "@mui/material";
import MuiToggle from "../../../NewForm/MuiToggle";

export default function ProductFeatures() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleChange = (data) => {
    setIsVisible(data);
  };

  return (
    <Container
      sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", padding:{ xs: "0rem", sm: ".7rem", md: "2rem", lg: "2rem" } }}
    >
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Typography
          alignContent="center"
          sx={{
            color: "red",
            fontSize: { xs: 12, sm: 15, md: 16, lg: 16, xl: 26 },
          }}
        >
          Does this product have variants?
        </Typography>
        <MuiToggle onChangeToggle={toggleChange} checkedStatus={true} />
      </Box>
      {
        isVisible?<SariVariants />:  <SariSingleProduct />
      }
    
    </Container>
  );
}
