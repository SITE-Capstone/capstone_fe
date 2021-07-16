import React from "react";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const TutorialCard = ({ name, description, color }) => {
  const useStyles = makeStyles({
    card: {
      background: color,
      boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.08)",
      width: "343px",
      height: "160px",
      borderRadius: "12px",
    },
    name: {
      textAlign: "left",
      marginLeft: "1em",
      fontFamily: "Roboto",
      fontWeight: 900,
      fontSize: "16px",
      marginBottom: "2em",
    },
    desc: {
      textAlign: "left",
      marginLeft: "1em",
      width: "240px",
    },
  });
  const classes = useStyles();

  return (
    <div className="TutorialCard">
      <Box className={classes.card}>
        <Typography variant="h5" className={classes.name}>
          {name}
        </Typography>
        <Typography variant="body1" className={classes.desc}>
          {description}
        </Typography>
      </Box>
    </div>
  );
};

export default TutorialCard;
