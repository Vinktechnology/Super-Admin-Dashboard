import React, { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { resetToastState } from "../../store/slices/toast/toast.slice";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Toast() {
  const { showSuccessToast, showFailureToast, message, veritcal, horizontal } =
    useSelector(({ toast }) => toast);
  const [serverity, setServerity] = useState(null);
  const [isToastVisible, setToastVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showSuccessToast) {
      setServerity("success");
      setToastVisible(true);
    }
  }, [showSuccessToast]);

  useEffect(() => {
    if (showFailureToast) {
      setServerity("error");
      setToastVisible(true);
    }
  }, [showFailureToast]);

  useEffect(() => {
    if (isToastVisible) {
      setTimeout(() => {
        setToastVisible(false);
        dispatch(resetToastState());
      }, 2000);
    }
  }, [isToastVisible]);

  function handleClose() {
    setToastVisible(false);
  }

  return isToastVisible ? (
    <Snackbar
      open={true}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: veritcal, horizontal: horizontal }}
    >
      <Alert severity={serverity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  ) : null;
}

export default Toast;
