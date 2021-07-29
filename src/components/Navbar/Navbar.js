import { Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import { Icon } from "@material-ui/core";
import { useState, useEffect } from "react";
import AccountItems from "./AccountItems";
import LoginItems from "./LoginItems";
import UserItems from "./UserItems";

const Navbar = () => {
  const CustomColor = withStyles({
    root: {
      fontSize: 24,
      background: "-webkit-linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  })(Typography);

  const useStyles = makeStyles({
    navbar: {
      position: "fixed",
      width: "190px",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      left: "0px",
      top: "0px",
      background: "linear-gradient(180.28deg, #1c0f54 -9.12%, rgba(28, 15, 84, 0) 105.86%)",
      filter: "drop-shadow(0px -5px 25px rgba(0, 3, 32, 0.5))",
      textAlign: "center",
    },
    accountItems: {
      display: "flex",
      justifyContent: "center",
      marginTop: "auto",
    },
    noAccountItems: {
      display: "flex",
      justifyContent: "center",
      marginTop: "auto",
      marginBottom: "20vh",
    },
    title: {
      marginTop: 20,
      fontWeight: 800,
      letterSpacing: "0.05em",
      fontFamily: "Roboto",
    },
    container: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    divider: {
      backgroundColor: "#1288E8",
      height: 2,
      width: "70%",
      marginTop: 10,
      marginBottom: 10,
    },
    dividerUser: {
      backgroundColor: "#1288E8",
      height: 2,
      width: "70%",
    },
    listItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 60,
      color: "#616A8B",
    },
    icon: {
      marginRight: 16,
      height: "25.5px",
      width: "25.5px",
    },
  });

  const classes = useStyles();

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("kurios_token")) {
      setLoggedIn(!loggedIn);
    }
  }, []);

  return (
    <div className={classes.navbar}>
      <div className="sidebar-items">
        <CustomColor className={classes.title} variant="h5">
          Kurios
        </CustomColor>
        <div className={classes.container}>
          <Divider className={classes.divider} />
        </div>
        {!loggedIn ? <LoginItems /> : <UserItems />}
      </div>
      <div className={loggedIn ? classes.accountItems : classes.noAccountItems}>
        <Divider className={classes.dividerUser} />
      </div>
      {loggedIn && <AccountItems />}
    </div>
  );
};

export default Navbar;
