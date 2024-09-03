import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { inputType } from "../utils/enum";
import Element from "../Form/Element";
import { useFormik } from "formik";
import { useTheme } from "@mui/material/styles";
import { PositionSchema } from "../utils/validation.js";

export default function ModalSectionPosition({
  title,
  body,
  cancel,
  confirm,
  fncHandleDialog,
  isopen,
  pos
}) {
  const theme = useTheme();
  const [initialValues, setInitialValues] = React.useState({
    position: "",
  });

  React.useEffect(()=>{
    if(pos!=null)
      {
        setInitialValues({...initialValues,position:pos})
      }
   
  },[pos])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: (values, { setSubmitting }) => {
      handleSubmitVendor(true);
      setSubmitting(false);
    },
    validationSchema: PositionSchema,
  });

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    formik;

  async function handleSubmitVendor(data) {

    const reData = {
      position: values.position,
      isSubmit: data,
    };
    fncHandleDialog(reData)
  }

  return (
    <React.Fragment>
      <Dialog
        open={isopen}
        onClose={() =>
          fncHandleDialog({
            reason: "",
            isSubmit: false,
          })
        }
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="md"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Element
              eletype={inputType.number}
              label="Please enter the section position"
              placeholder="Please enter the section position"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "position",
              }}
              errorText={touched.position && errors.position}
              value={values.position}
              styles={{ gridColumn: "span 12" }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() =>
              fncHandleDialog({
                position: "",
                isSubmit: false,
              })
            }
          >
            {cancel}
          </Button>
          <Button onClick={() => handleSubmit(true)} autoFocus>
            {confirm}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
