import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Divider, Typography, makeStyles } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ buyingId, totalPrice, time, amount }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    dialog: {
      backgroundColor: "#018FFF",
      color: "white",
    },
    text: {
      color: "white",
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Button className={classes.btn} onClick={handleClickOpen}>
        View More
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className={classes.dialog} id="alert-dialog-slide-title">
          {"Purchased " + buyingId.toUpperCase()}
        </DialogTitle>
        <DialogContent className={classes.dialog}>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography variant="body1" className={classes.text}>
              {"Date purchased: " + new Date(time).toLocaleString()}
            </Typography>
            <Typography variant="body1" className={classes.text}>
              {"Total amount purchased: " + parseFloat(amount).toFixed(2)}
            </Typography>
            <Typography variant="body1" className={classes.text}>
              {"Cost per " + buyingId.toUpperCase() + ": $" + parseFloat(totalPrice / amount).toFixed(4)}
            </Typography>
            <Divider style={{ marginTop: 8, marginBottom: 8, backgroundColor: "white" }} />
            <Typography variant="body1" className={classes.text} style={{ textAlign: "right" }}>
              {"Total: $" + parseFloat(totalPrice).toFixed(2)}
            </Typography>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
