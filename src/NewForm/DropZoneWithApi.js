import React, { useEffect, useState } from "react";
import { Dropzone, FileMosaic } from "@files-ui/react";
import { formErrorStyle } from "../utils/constant";
import { Box } from "@mui/material";
import { productFileUploadGlobalApi } from "../utils/global/user.global";

function DropZoneWithApi({
  label,
  onChange,
  onBlur,
  name,
  value = "",
  errorText,
  url,
  styles,
  extraArguments = {},
  multiple = false,
  accept,
}) {
  const [files, setFiles] = useState([]);

  // Effect to set initial value when value prop changes
  useEffect(() => {
    if (value && typeof value === "object" && value.length > 0) {
      setFiles(value);
    } else if (value && typeof value === "string") {
      setFiles([{ id: value, name: value }]);
    }
  }, [value]);

  const updateFiles = (incommingFiles) => {

    setFiles(incommingFiles);
 

    const file = incommingFiles[0].file;
 

    const formData = new FormData();
    formData.append("file", file);

    productFileUploadGlobalApi(formData)
      .then((result) => {
        if (result.data) {
          onChange({
            target: {
              name,
              value: result.data,
            },
          });
        }
      })
      .catch((e) => {});
  };

  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };

  return (
    <Box style={styles}>
      <Dropzone
        onChange={updateFiles}
        value={files}
        accept="image/*"
        footer={true}
        header={true}
        label={label}
        style={{ height: "40px", minHeight: "113px" }}
      >
        {files.map((file) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
      </Dropzone>
      {errorText && <span style={formErrorStyle}>{errorText}</span>}
    </Box>
  );
}

export default DropZoneWithApi;
