import { Divider, Typography, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import UserContext from "../../hooks/userContext";
import Confirmation from "./Confirmation";

const UserInfo = () => {
  const user = useContext(UserContext);
  console.log(user);

  const useStyles = makeStyles({
    divider: {
      height: "1.5px",
      background: "#1288E8",
      marginBottom: "2rem",
    },
    container: {
      height: "80vh",
      width: "60vw",
      // background: "grey",
      display: "flex",
      flexDirection: "column",
    },
    heading: {
      marginTop: "3rem",
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    text: {
      marginBottom: 24,
      marginTop: 4,
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h4">Account Information</Typography>
      <Divider className={classes.divider} />
      <div className={classes.wrapper}>
        <Typography variant="body1" className={classes.text}>
          Username:
        </Typography>
        <Typography variant="body1" className={classes.text}>
          {user.username}
        </Typography>
      </div>
      <div className={classes.wrapper}>
        <Typography variant="body1" className={classes.text}>
          Account Created On:
        </Typography>
        <Typography variant="body1" className={classes.text}>
          {new Date(user.createdAt).toLocaleString()}
        </Typography>
      </div>
      <Typography className={classes.heading} variant="h4">
        Reset Wallet
      </Typography>
      <Divider className={classes.divider} />
      <div className={classes.wrapper}>
        <Typography variant="body1">Reset wallet back to initial amount?</Typography>
        <Confirmation />
      </div>
    </div>
  );
};

export default UserInfo;
