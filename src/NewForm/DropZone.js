import React, {useState} from 'react'
import { Dropzone, FileMosaic } from "@files-ui/react";
import { formErrorStyle } from '../utils/constant';
import { Box } from '@mui/material';

function DropZone({
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
  accept,}) {

 
    const [files, setFiles] = useState([]);

    const updateFiles = (incommingFiles) => {
    console.log("incomming files", incommingFiles);
    setFiles(incommingFiles);

    onChange({
        target: {
          name,
          value: incommingFiles,
        },
      });
    };

    const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
    };

    return (
      <Box style={styles}>
        <label>{label}:</label>
        <Dropzone
      onChange={updateFiles}
      value={files}
      accept="image/*"
      style={styles}
    >
      {files.map((file) => (
        <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
      ))}
    </Dropzone>
    {errorText && <span style={formErrorStyle}>{errorText}</span>}
    </Box>
    )
}

export default DropZone
