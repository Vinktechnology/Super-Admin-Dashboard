import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../store/slices/staticproduct/staticproduct.slice";

const categoryData=[
  {
    name: "Saree",
    id: "1",
  },
  {
    name: "Suit",
    id: "2",
  },
]

function ProductCategory() {
  const navigate = useNavigate();
  const caData = useSelector(({staticProduct})=> staticProduct.category);
  const [catData, setCatData] = useState(caData?.tabStep?caData?.selectedCategory:"0");
  const dispatch = useDispatch();


 const handleSelectBox = (id) => { 
  const catname=categoryData?.find((item)=> item.id===id)
  const data ={
    name: catname.name,
    selectedCategory: id,
    tabStep:1
  }
  dispatch(setCategory(data));
  setCatData(id);
  };

  const handlebtnClick=()=>
    {

      navigate(`/dashboard/product/addproduct/productbrand?prodcategory=${catData}`)
    }

  return (
    <Container sx={{boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",padding:"2rem"}}>
   

    
      <Typography  sx={{
              margin: "1rem",
              fontWeight:600,
            }} variant="h4">Please select a product category:</Typography>

      <Box sx={{display:"flex",justifyContent:"space-between", flexDirection:{xs:"column", sm:"column", md:"row", lg:"row", xl:"row"}, alignItems:"center"}}>
      <Box sx={{ display: "flex"}}>
        {categoryData.map((item, id) => (
          <Box
            key={item?.id}
            onClick={()=>handleSelectBox(item?.id)}
            id={item?.id}
            sx={{
            cursor:"pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: {xs:"6rem", sm:"8rem", md:"8rem", lg:"8rem"},
              minWidth:{xs:"6rem", sm:"8rem", md:"10rem", lg:"10rem"},
              margin: "1rem",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
              backgroundColor: catData==item?.id ? "green" : "",
            }}
          >
            {item?.name}
          </Box>
        ))}
      </Box>
      <Box>
          <Button variant="contained" onClick={handlebtnClick}>Brand Selection</Button>
      </Box>
      </Box>
    </Container>
  );
}

export default ProductCategory;
