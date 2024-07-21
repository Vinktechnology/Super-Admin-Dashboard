import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Box, Typography } from '@mui/material';
import { formErrorStyle } from '../utils/constant';

const MyEditor = ({
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
    accept
}) => {
  const [editorData, setEditorData] = useState('');
  
  const editorOnChange=(event, editor) => {
    const data = editor.getData();
    setEditorData(data);

     onChange({
        target: {
          name,
          value: data,
        },
      });
    
  }

  return (
    <Box sx={styles}>
    <Typography sx={{mb:1, p:1}} > {label}:</Typography>
    <CKEditor
      editor={ClassicEditor}
      data={editorData}
      onChange={editorOnChange}
      config={{
        toolbar: [
          'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote',
          'insertTable', 'mediaEmbed', 'undo', 'redo', '|', 'style'
        ],
        style:{
            color:'red'
        }
      }}
      
    />

{errorText && <span style={formErrorStyle}>{errorText}</span>}
    </Box>
  );
};

export default MyEditor;
