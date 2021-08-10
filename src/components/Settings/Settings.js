import { Typography, Button, Icon, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Confirmation from "./Confirmation";
import UserInfo from "./UserInfo";

const Settings = () => {
  const useStyles = makeStyles({
    link: {
      textDecoration: "none",
      color: "rgba(255,255,255,0.5)",
      alignSelf: "flex-start",
      marginBottom: "4rem",
      marginTop: "2rem",
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <UserInfo />
    </div>
  );
};

export default Settings;
