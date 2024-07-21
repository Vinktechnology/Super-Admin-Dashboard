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

export default function SariSingleProduct() {
  const [expanded, setExpanded] = React.useState(false);
  const [accordianData, setAccordianData] = React.useState([
    {
      name: "Stock & Shipping Info",
      description: "",
      isError: false,
      errorCount: "",
      comp: ProductStock,
      id: 1,
    },
    {
      name: "Price",
      description: "",
      isError: false,
      errorCount: "",
      comp: ProductPrice,
      id: 2,
    },
    {
      name: "Product Description",
      description: "",
      isError: false,
      errorCount: "",
      comp: ProductDescriptionNavigation,
      id: 3,
    },
    {
      name: "Additional Description",
      description: "",
      isError: false,
      errorCount: "",
      comp: ProductAdditionalInformationNavigation,
      id: 4,
    },
  ]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleErrorCount = (errors) => {
    const data = [...accordianData];
    const findData = data.find((item, indx) => item.id === errors.id);
    findData.errorCount = errors.errorCount;
    findData.isError = errors.isError;
    setAccordianData(data);
  };

  return (
    <div>
      {accordianData.map((item, i) => (
        <Accordion
          disableGutters={true}
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
          sx={{
            background: "none",
            boxShadow: "none",
            margin: ".4rem",
            "&:before": {
              backgroundColor: "transparent",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id={item.id}
            sx={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",

              borderRadius: "20px",
              padding: ".2rem 1rem .2rem 1rem",
            }}
          >
            <Typography sx={{ width: "66%", flexShrink: 0 }}>
              {item.name}
            </Typography>
            {item.isError && (
              <Typography
                sx={{
                  fontWeight: "600",
                  background: "rgb(255, 236, 236)",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  color: "rgb(232, 92, 92)",
                  borderRadius: "20px",
                }}
              >
                Errors : {item.errorCount}
              </Typography>
            )}
            {/* {
                item.errorCount &&
                    <CheckCircleIcon style={{ fill: "green" }} fontSize="large" />
                  
            } */}
          </AccordionSummary>
          <AccordionDetails
            sx={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
              margin: "1rem",
              borderRadius: "10px",
              height:"400px",
              overflow:"auto"
            }}
          >
            {<item.comp handleErrorCount={handleErrorCount} item={item} />}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

    