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


const ddlData = [{
  id:"1",
  label :"Stock & Shipping Information",
  value:"stockAndShippingInformation"
},
{
  id:"2",
  label :"Price Info",
  value:"priceInfo"
},
{
  id:"3",
  label :"Product Description",
  value:"productDescription"
},
{
  id:"4",
  label :"Additional Description",
  value:"additionalDescription"
},
{
  id:"5",
  label :"Product Images",
  value:"productImages"
}
]

export default function ProductApprovalDialogBox({
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
    section:[]
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
      section:values.section,
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
              eletype={inputType.multiselect}
              label="*Please select a Section for Reason"
              placeholder="*Please select a Section for Reason"
              inputProps={{
                onChange: handleChange,
                onBlur: handleBlur,
                name: "section",
              }}
              errorText={touched.section && errors.section}
              value={values.section}
              styles={{ gridColumn: "span 12" }}
              options={ddlData}
            />
            <br/>
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
