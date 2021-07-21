import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const CoinTutorial = ({ videoUrl, name, desc }) => {
  const useStyles = makeStyles({
    container: {
      display: "flex",
      height: "80vh",
      width: "80vw",
      alignItems: "center",
      justifyContent: "space-between",
    },
    desc: {
      width: "32rem",
    },
    title: {
      width: "200px",
      marginTop: "2rem",
      marginBottom: "4rem",
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Link to="/tutorial">Back</Link>
      <div className={classes.container}>
        <div className="text">
          <Typography variant="h3" className={classes.title}>
            {name}
          </Typography>
          <Typography varaint="body1" className={classes.desc}>
            {desc}
          </Typography>
        </div>
        <div className="video">
          <iframe
            width="840"
            height="473"
            src={videoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CoinTutorial;
