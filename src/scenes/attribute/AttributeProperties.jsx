// src/FieldArrayForm.jsx
import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
  TextField,
  useTheme
} from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import Box from '@mui/material/Box';
import { tokens } from "../../../src/theme.js";

const FieldArraySchema = Yup.object().shape({
  items: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Name is required'),
      slug: Yup.string().required('Slug is required'),
      description: Yup.string().required('Description is required'),
    })
  ),
});


const FieldArrayForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Formik
      initialValues={{
        items: [
          {
            name: '',
            slug: '',
            description: '',
          },
        ],
      }}
      validationSchema={FieldArraySchema}
      onSubmit={(values) => {
        console.log('Form values', values);
      }}
    >
      {({ values, errors, touched, handleBlur, handleChange, setFieldTouched, setFieldValue }) => (
        <Form>
          <FieldArray
            name="items"
            render={(arrayHelpers) => (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="end" m={2}>
                    <Button
                      type="button"
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        arrayHelpers.push({
                          name: '',
                          slug: '',
                          description: '',
                        })
                      }
                      startIcon={<Add />}
                    >
                      Add Attribute Property
                    </Button>
                  </Box>
                </Grid>

                {values.items.map((item, index) => (
                  <Grid item xs={12} key={index}>
                    <Card  
                     sx={{
                      maxWidth: "100%" ,
                      p:2,
                      ml:5,
                      mr:5,
                      backgroundColor: colors.primary[400],
                      color: colors.grey[100],
                      borderRadius: 2,
                      boxShadow: 4,
                    }}
                    >
                      <CardHeader
                        action={
                          values.items.length > 1 && (
                            <IconButton
                              onClick={() => arrayHelpers.remove(index)}
                              aria-label="delete"
                            >
                              <Delete />
                            </IconButton>
                          )
                        }
                        title={`Property ${index + 1}`}
                      />
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={4}>
                            <Field
                              name={`items.${index}.name`}
                              component={TextField}
                              label="Name"
                              variant="filled" 
                              fullWidth
                              error={touched?.items?.[index]?.name && !!errors?.items?.[index]?.name}
                              helperText={touched?.items?.[index]?.name && errors?.items?.[index]?.name}
                              onBlur={(e) => {
                                handleBlur(e);
                                setFieldTouched(`items.${index}.name`, true, true);
                              }}
                              onChange={(e) => {
                                handleChange(e);
                                setFieldTouched(`items.${index}.name`, true, true); // Ensure error is updated after change
                                setFieldValue(`items.${index}.name`, e.target.value); // Update value
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <Field
                              name={`items.${index}.slug`}
                              component={TextField}
                              label="Slug"
                              variant="filled" 
                              fullWidth
                              error={touched?.items?.[index]?.slug && !!errors?.items?.[index]?.slug}
                              helperText={touched?.items?.[index]?.slug && errors?.items?.[index]?.slug}
                              onBlur={(e) => {
                                handleBlur(e);
                                setFieldTouched(`items.${index}.slug`, true, true);
                              }}
                              onChange={(e) => {
                                handleChange(e);
                                setFieldTouched(`items.${index}.slug`, true, true); // Ensure error is updated after change
                                setFieldValue(`items.${index}.slug`, e.target.value); // Update value
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <Field
                              name={`items.${index}.description`}
                              component={TextField}
                              label="Description"
                              variant="filled" 
                              fullWidth
                              error={touched?.items?.[index]?.description && !!errors?.items?.[index]?.description}
                              helperText={touched?.items?.[index]?.description && errors?.items?.[index]?.description}
                              onBlur={(e) => {
                                handleBlur(e);
                                setFieldTouched(`items.${index}.description`, true, true);
                              }}
                              onChange={(e) => {
                                handleChange(e);
                                setFieldTouched(`items.${index}.description`, true, true); // Ensure error is updated after change
                                setFieldValue(`items.${index}.description`, e.target.value); // Update value
                              }}
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}

                <Grid item xs={12}>
                  <Box display="flex" justifyContent="end" m={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                  >
                    Submit 
                  </Button>
                  </Box>
                </Grid>
                
                
              </Grid>
            )}
          />
        </Form>
      )}
    </Formik>
  );
};

export default FieldArrayForm;
