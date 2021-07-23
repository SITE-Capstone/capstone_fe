import { makeStyles, Typography, Button } from "@material-ui/core";
import { useContext } from "react";
import { Link } from "react-router-dom";
import apiClient from "../Services/apiClient";
import UserContext from "../../hooks/userContext";

const CoinTutorial = ({ videoUrl, name, desc, tutorialId }) => {
  const user = useContext(UserContext);

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
    link: {
      textDecoration: "none",
      color: "white",
    },
    btn: {
      position: "absolute",
      bottom: "0%",
      right: "5%",
      marginTop: 20,
      marginBottom: 50,
      borderRadius: "25px",
      boxShadow: "0px 2px 4px rgba(85, 35, 221, 0.4)",
      height: "64px",
      width: "189px",
      background: "linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)",
      color: "white",
      fontSize: "24px",
      fontWeight: "bold",
    },
  });

  const classes = useStyles();

  const completeTutorial = async () => {
    await apiClient.markTutorialAsCompleted(user.id, tutorialId, 1);
  };

  return (
    <div>
      <Link className={classes.link} to="/tutorial" onClick={completeTutorial}>
        <Button className={classes.btn}>Finish</Button>
      </Link>
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
