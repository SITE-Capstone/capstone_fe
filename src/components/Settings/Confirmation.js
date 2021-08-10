import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Typography, makeStyles } from "@material-ui/core";
import apiClient from "../Services/apiClient";
import Success from "./Success";

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const useStyles = makeStyles({
    btn: {
      color: "white",
      background: "#5FB2FF",
      marginBottom: 16,
      marginTop: 16,
      "&:hover": {
        background: "#018FFF !important",
      },
    },
    btn2: {
      color: "white",
      background: "#140739",
      marginBottom: 16,
      marginTop: 16,
      "&:hover": {
        background: "rgb(20, 7, 57,0.7) !important",
      },
    },
    dialog: {
      backgroundColor: "#018FFF",
      color: "white",
    },
    text: {
      color: "white",
    },
  });

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const reset = async () => {
    await apiClient.dropWallet();
    handleClose();
    setSuccess(true);
  };

  return (
    <div>
      <Button className={classes.btn} variant="outlined" color="primary" onClick={handleClickOpen}>
        Reset
      </Button>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle className={classes.dialog} id="responsive-dialog-title">
          {"Are you sure you want to reset your wallet?"}
        </DialogTitle>
        <DialogContent className={classes.dialog}>
          <DialogContentText className={classes.dialog}>
            <Typography variant="body1">
              This will set all your cryptocurrency assets back to zero and start you off with a new $10,000. This
              action can not be undone.
            </Typography>
            <Typography variant="body1">Do you wish to reset?</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.dialog}>
          <Button className={classes.btn2} autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button className={classes.btn2} onClick={reset} color="primary" autoFocus>
            Reset
          </Button>
        </DialogActions>
      </Dialog>
      <Success success={success} setSuccess={setSuccess} />
    </div>
  );
}
