import { useContext } from "react";
import { List, ListItem, ListItemText, Icon, makeStyles } from "@material-ui/core";
import UserContext from "../../hooks/userContext";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const AccountItems = () => {
  const user = useContext(UserContext);

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
      "&:hover": {
        background: "rgba(0,0,0,0.2) !important",
      },
    },
    activeListItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 60,
      borderBottom: "2px solid #1288E8",
      backgroundColor: "#32395E",
      color: "white",
    },
    icon: {
      marginRight: 16,
      height: "25.5px",
      width: "25.5px",
    },
    link: {
      textDecoration: "none",
    },
  });

  const classes = useStyles();
  const location = useLocation();

  const handleLogOut = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <List className={classes.list}>
      <Link to="/settings" className={classes.link}>
        <ListItem button className={location.pathname === "/settings" ? classes.activeListItem : classes.listItem}>
          <Icon className={classes.icon}>account_circle</Icon>
          <ListItemText primary={user.username} />
        </ListItem>
      </Link>
      <ListItem button className={classes.listItem} onClick={handleLogOut}>
        <Icon className={classes.icon}>exit_to_app</Icon>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
  );
};

export default AccountItems;
