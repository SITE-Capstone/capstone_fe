import { useEffect, useState } from "react";
import "./About.css";
import apiClient from "../Services/apiClient";
import { Link } from "react-router-dom";
import { Typography, makeStyles, Button } from "@material-ui/core";

function About({ symbol, name }) {
  const [about, setAbout] = useState({
    symbol: symbol,
    name: name,
    description: "",
  });

  useEffect(() => {
    apiClient.getCoinDescription(name).then((res) => {
      let description = res.data.description.en.split(".");
      description = description.slice(0, 3);
      description = description.join(". ");
      let coinName = name.charAt(0).toUpperCase() + name.slice(1);
      setAbout({
        symbol: symbol,
        name: coinName,
        description: description,
      });
    });
  }, []);

  const useStyles = makeStyles({
    about: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "4rem",
    },
    section: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "80%",
      marginTop: "2rem",
      marginBottom: "4rem",
    },
    desc: {
      width: "80%",
      fontSize: "18px",
    },
    tutorialLinks: {
      width: "80%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    learn: {
      fontSize: "20px",
    },
    btn: {
      width: 150,
      height: 48,
      background: "linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)",
      fontWeight: "bold",
      fontSize: "18px",
      color: "white",
      marginTop: "1rem",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.about}>
      <Typography style={{ alignSelf: "flex-start" }} variant="h3">
        {about.name}
      </Typography>
      <div className={classes.section}>
        <div className={classes.col}>
          <Typography variant="body1" className={classes.desc}>
            {about.description}
          </Typography>
        </div>
        <div className={classes.tutorialLinks}>
          <Typography variant="body1" className={classes.learn}>
            Learn more about {about.name}
          </Typography>
          <Button className={classes.btn}>Start Lesson</Button>
        </div>
      </div>
    </div>
  );
}

export default About;
