import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ success, setSuccess }) {
  const useStyles = makeStyles({
    dialog: {
      backgroundColor: "#018FFF",
      color: "white",
    },
    text: {
      color: "white",
    },
  });

  const classes = useStyles();

  const handleClose = () => {
    setSuccess(false);
  };

  return (
    <div>
      <Dialog
        open={success}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className={classes.dialog} id="alert-dialog-slide-title">
          {"Success!"}
        </DialogTitle>
        <DialogContent className={classes.dialog}>
          <DialogContentText className={classes.text} id="alert-dialog-slide-description">
            Your wallet has been reset.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
