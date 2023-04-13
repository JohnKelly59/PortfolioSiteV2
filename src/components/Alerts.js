import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SuccessAlert = (props) => {
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={4000}
      onClose={props.handleClose}
    >
      <Alert severity="success" onClose={props.handleClose}>
        Successfully Sent!
      </Alert>
    </Snackbar>
  );
};

const FailureAlert = (props) => {
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={4000}
      onClose={props.handleClose}
    >
      <Alert severity="error" onClose={props.handleClose}>
        Failure to Send!
      </Alert>
    </Snackbar>
  );
};

export { SuccessAlert, FailureAlert };
