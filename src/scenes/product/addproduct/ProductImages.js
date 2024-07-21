import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ProductImages = ({ field, form, index }) => {
    
  const handleImageChange = (event) => {

    const files = event.target.files;
    const fileArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    // Set image validation errors
    if (files.length > 5) {
      form.setFieldError(field.name, "You can upload a maximum of 5 images");
    } else {
      form.setFieldValue(field.name, fileArray);
    }
  };

  return (
    <div>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        onChange={handleImageChange}
      >
        Upload file
        <VisuallyHiddenInput multiple={true} type="file" />
      </Button>
      <div>
        {field.value &&
          field.value.map((image, imgIndex) => (
            <img
              key={imgIndex}
              src={image}
              alt={`product-${index}-${imgIndex}`}
              style={{ width: "50px", height: "50px", margin: "5px" }}
            />
          ))}
      </div>
      {form.errors[field.name] && form.touched[field.name] && (
        <div className="error">{form.errors[field.name]}</div>
      )}
    </div>
  );
};

export default ProductImages;
