import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ConfirmDialogBox({title,body, cancel, confirm, fncHandleDialog,isopen}) {
  

  return (
    <React.Fragment>
      <Dialog
        open={isopen}
        onClose={() => fncHandleDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>fncHandleDialog(false)}>{cancel}</Button>
          <Button onClick={()=>fncHandleDialog(true)} autoFocus>
            {confirm}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
