import React from "react";
import { List, ListItem, ListItemText, Icon, makeStyles } from "@material-ui/core";

const AccountItems = () => {
  const useStyles = makeStyles({
    list: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "2vh",
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

  const handleLogOut = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <List className={classes.list}>
      <ListItem button className={classes.listItem}>
        <Icon className={classes.icon}>account_circle</Icon>
        <ListItemText primary="username" />
      </ListItem>
      <ListItem button className={classes.listItem}>
        <Icon className={classes.icon}>exit_to_app</Icon>
        <ListItemText primary="Logout" onClick={handleLogOut} />
      </ListItem>
    </List>
  );
};

export default AccountItems;
