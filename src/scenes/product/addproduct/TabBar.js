import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

const tabBarData = [
  {
    name: "Select Category",
    id: 0,
    url: "productcategory",
    step: 1,
    isSelected: true,
  },
  {
    name: "Select Brand",
    id: 1,
    url: "productbrand",
    step: 2,
    isSelected: true,
  },
  {
    name: "Product Features",
    id: 2,
    url: "productfeatures",
    step: 3,
    isSelected: false,
  },
];

function TabBar({locat}) {
  const [selected, setSelected] = useState(0);


  const catData = useSelector(({staticProduct})=> staticProduct.category);
  const brandData = useSelector(({staticProduct})=> staticProduct.brand);

  useEffect(()=>{
    const position = locat.split("/")
    setSelected(position[position.length-1])
  },[locat])

  const handleSelect = (url) => {
    setSelected(url);
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          justifyContent: "center",
        }}
      >
        {tabBarData?.map((item, index) => (
          <Box
        //  onClick={()=>handleSelect(item.url)} 
            sx={{
              textDecoration: "none",
              fontWeight: "600",
              color: "black",
              borderRadius: "20px",
              padding: ".8rem",
              margin: ".5rem",
              width:{xs:"280px", sm:"280px", md:"330px", lg:"330px", xl:"330px"},
              borderRadius: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              background: selected===item.url ?"#9ccc65":"white"
            }}
            // to={item?.url}
          >
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <Box sx={{ minWidth: "70%" }}>
                <span style={{padding:".4rem"}}>{item.step}</span>
            
                <span style={{padding:".4rem", fontWeight:700,}}>{item.name}</span>
                
              </Box>
              <Box sx={{ minWidth: "30%" }}>
              {
                catData?.tabStep===item.step &&   <span style={{padding:".4rem", background: "rgb(229, 245, 238)",
                  color: "rgb(39, 172, 112)",borderRadius:"20px", fontWeight:700}}>{catData.name}</span>
              }

              {
                brandData?.tabStep===item.step &&   <span style={{padding:".4rem", background: "rgb(229, 245, 238)",
                  color: "rgb(39, 172, 112)",borderRadius:"20px", fontWeight:700}}>{brandData.name.length>10? `${brandData.name.substring(0,10)}...`: brandData.name}</span>
              }
            

              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default TabBar;
