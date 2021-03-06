import React from "react";
import { List, ListItem, makeStyles, ListItemText, Icon } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

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
      "&:hover": {
        background: "rgba(0,0,0,0.2) !important",
      },
    },
    icon: {
      marginRight: 16,
      height: "25.5px",
      width: "25.5px",
    },
    links: {
      color: "inherit",
      textDecoration: "none",
    },
  });

  const classes = useStyles();

  const location = useLocation();
  console.log(location.pathname);

  return (
    <List component="nav">
      <Link to="/dashboard" className={classes.links}>
        <ListItem button className={location.pathname === "/dashboard" ? classes.activeListItem : classes.listItem}>
          <Icon className={classes.icon}>space_dashboard</Icon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>
      <Link to="/tutorial" className={classes.links}>
        <ListItem button className={location.pathname === "/tutorial" ? classes.activeListItem : classes.listItem}>
          <Icon className={classes.icon}>auto_stories</Icon>
          <ListItemText primary="Tutorials" />
        </ListItem>
      </Link>
      {/* <ListItem button className={location.pathname === "/portfolio" ? classes.activeListItem : classes.listItem}>
        <Icon className={classes.icon}>payments</Icon>
        <ListItemText primary="Portfolio" />
      </ListItem> */}
    </List>
  );
};

export default LoginItems;
