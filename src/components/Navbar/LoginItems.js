import { List, ListItem, makeStyles, ListItemText, Icon } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
      <ListItem button className={location.pathname === "/" ? classes.activeListItem : classes.listItem}>
        <Icon className={classes.icon}>home</Icon>
        <ListItemText primary="Back to Home" />
      </ListItem>
      <Link to="/login" className={classes.links}>
        <ListItem button className={location.pathname === "/login" ? classes.activeListItem : classes.listItem}>
          <Icon className={classes.icon}>input</Icon>
          <ListItemText primary="Login" />
        </ListItem>
      </Link>
      <Link to="/register" className={classes.links}>
        <ListItem button className={location.pathname === "/register" ? classes.activeListItem : classes.listItem}>
          <Icon className={classes.icon}>account_circle</Icon>
          <ListItemText primary="Register" />
        </ListItem>
      </Link>
    </List>
  );
};

export default LoginItems;
