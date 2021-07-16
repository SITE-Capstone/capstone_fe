import React from "react";
import { List, ListItem, makeStyles, ListItemText, Icon } from "@material-ui/core";

const LoginItems = () => {
  const useStyles = makeStyles({
    activeListItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 60,
      borderBottom: "2px solid #1288E8",
      backgroundColor: "#32395E",
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

  return (
    <List component="nav">
      <ListItem button className={classes.listItem}>
        <Icon className={classes.icon}>home</Icon>
        <ListItemText primary="Back to Home" />
      </ListItem>
      <ListItem button className={classes.activeListItem}>
        <Icon className={classes.icon}>input</Icon>
        <ListItemText primary="Login" />
      </ListItem>
      <ListItem button className={classes.listItem}>
        <Icon className={classes.icon}>account_circle</Icon>
        <ListItemText primary="Register" />
      </ListItem>
    </List>
  );
};

export default LoginItems;
