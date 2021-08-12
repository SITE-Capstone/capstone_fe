import React from "react";
import { makeStyles, Typography, Divider } from "@material-ui/core";

function Article(props) {
  const useStyles = makeStyles({
    article: {
      width: "67vw",
      display: "flex",
      justifyContent: "space-between",
      marginTop: "2rem",
      textDecoration: "none",
      color: "white",
    },
    subhead: {
      display: "flex",
      width: "25rem",
      justifyContent: "space-between",
      marginBottom: "2rem",
      color: "rgba(255,255,255,0.5)",
    },
    headline: {
      height: "75%",
      fontSize: "18px",
      display: "flex",
      alignItems: "center",
    },
    newsImage: {
      height: "220px",
      width: "270px",
    },
    divider: {
      height: "1.5px",
      background: "rgba(255,255,255,0.5)",
      marginTop: "1rem",
      marginBottom: "1rem",
    },
  });

  const classes = useStyles();

  return (
    <div>
      <a href={props.url} target="_blank" rel="noreferrer" className={classes.article}>
        <div className={classes.text}>
          <div className={classes.subhead}>
            <Typography variant="h5" className="source">
              {props.source}
            </Typography>
            <Typography variant="h5" className="time">
              {timeSince(new Date(props.publishedAt))} ago
            </Typography>
          </div>
          <Typography variant="body1" className={classes.headline}>
            {props.headline}
          </Typography>
        </div>
        <img className={classes.newsImage} src={props.urlToImage} alt={props.headline} />
      </a>
      <Divider className={classes.divider} />
    </div>
  );
}

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    let years = Math.floor(interval);

    if (years === 1) {
      return years + " year";
    } else {
      return years + " years";
    }
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    let months = Math.floor(interval);

    if (months === 1) {
      return months + " month";
    } else {
      return months + " months";
    }
  }
  interval = seconds / 86400;
  if (interval > 1) {
    let days = Math.floor(interval);

    if (days === 1) {
      return days + " day";
    } else {
      return days + " days";
    }
  }
  interval = seconds / 3600;
  if (interval > 1) {
    let hours = Math.floor(interval);

    if (hours === 1) {
      return hours + " hour";
    } else {
      return hours + " hours";
    }
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

export default Article;
