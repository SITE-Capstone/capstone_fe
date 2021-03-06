import { useEffect, useState } from "react";
import apiClient from "../Services/apiClient";
import { Link } from "react-router-dom";
import { Typography, makeStyles, Button, Divider, CircularProgress } from "@material-ui/core";

function About({ symbol, name, setTutorialId }) {
  const [about, setAbout] = useState({
    symbol: symbol,
    name: name,
    description: "",
  });

  const ids = {
    BTC: 4,
    ETH: 5,
    ADA: 6,
    DOGE: 7,
    DOT: 8,
    XMR: 9,
  };

  useEffect(() => {
    apiClient.getCoinDescription(name.toLowerCase()).then((res) => {
      let html = res;

      let div = document.createElement("div");
      div.innerHTML = html;
      let description = div.textContent || div.innerText || "";
      description = description.split(".");

      description = description.slice(0, 3);
      description = description.join(". ") + ".";
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
      marginBottom: "2rem",
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
    header: {
      alignSelf: "flex-start",
      color: "rgba(255,255,255,0.8)",
      fontSize: "2.5rem",
    },
    divider: {
      height: "1.5px",
      width: "80%",
      background: "rgba(255,255,255,0.5)",
      marginBottom: "3rem",
    },
    link: {
      textDecoration: "none",
      color: "white",
    },
    progress: {
      color: "#5FB2FF",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.about}>
      <Typography className={classes.header} variant="h3">
        {about.name}
      </Typography>
      {about.description ? (
        <div className={classes.about}>
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
              <Link
                className={classes.link}
                to={"/tutorial/" + about.symbol.toLowerCase()}
                onClick={() => {
                  setTutorialId(ids[about.symbol]);
                }}
              >
                <Button className={classes.btn}>Start Lesson</Button>
              </Link>
            </div>
          </div>
          <Divider className={classes.divider} />
        </div>
      ) : (
        <CircularProgress className={classes.progress} />
      )}
    </div>
  );
}

export default About;
