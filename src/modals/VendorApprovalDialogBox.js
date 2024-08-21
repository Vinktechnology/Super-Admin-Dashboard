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
import { ReasonSchema } from "../utils/validation.js";

export default function VendorApprovalDialogBox({
  title,
  body,
  cancel,
  confirm,
  fncHandleDialog,
  isopen,
}) {
  const theme = useTheme();
  const [initialValues, setInitialValues] = React.useState({
    reason: "",
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: (values, { setSubmitting }) => {
      handleSubmitVendor(true);
      setSubmitting(false);
    },
    validationSchema: ReasonSchema,
  });

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    formik;

  async function handleSubmitVendor(data) {

    const reData = {
      reason: values.reason,
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
              eletype={inputType.textarea}
              label="Please Enter the Rejection Reason"
              placeholder="Please enter reason"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "reason",
              }}
              errorText={touched.reason && errors.reason}
              value={values.reason}
              styles={{ gridColumn: "span 12" }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() =>
              fncHandleDialog({
                reason: "",
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
