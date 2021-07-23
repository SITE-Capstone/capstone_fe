import { useState, useEffect, useContext } from "react";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { makeStyles, Icon } from "@material-ui/core";
// import apiClient from "../Services/apiClient";
// import { useState, useEffect } from "react";
import beginner from "../../images/beginner.png";
import general from "../../images/general.png";
import investing from "../../images/investing.png";
import btc from "../../images/btc.png";
import eth from "../../images/eth.png";
import ada from "../../images/ada.png";
import doge from "../../images/doge.png";
import dot from "../../images/dot.png";
import xmr from "../../images/xmr.png";
import apiClient from "../Services/apiClient";
import UserContext from "../../hooks/userContext";

const TutorialCard = ({ name, description, color, id }) => {
  const useStyles = makeStyles({
    card: {
      background: color,
      boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.08)",
      width: "343px",
      height: "180px",
      borderRadius: "12px",
      position: "relative",
    },
    name: {
      textAlign: "left",
      marginLeft: "1em",
      fontFamily: "Roboto",
      fontWeight: 900,
      fontSize: "16px",
      marginBottom: "1.2em",
      height: 30,
      display: "flex",
      alignItems: "flex-end",
    },
    desc: {
      textAlign: "left",
      marginLeft: "1em",
      width: "240px",
    },
    image: {
      height: "74px",
      width: "74px",
      marginLeft: 250,
    },
    icon: {
      position: "absolute",
      height: "40px",
      width: "40px",
      bottom: "15px",
      left: "15px",
      color: "rgb(138,246, 138)",
      fontSize: "35px",
    },
  });
  const classes = useStyles();

  const images = [beginner, general, investing, btc, eth, ada, doge, dot, xmr];

  const user = useContext(UserContext);

  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const fetchCompleted = async () => {
      let tutorial_id = id;
      console.log("------", user.id, tutorial_id);
      const { data } = await apiClient.fetchSingleTutorialStatus(tutorial_id);
      console.log("data tutorial", data.completedTutorials[0].completed);
      setIsComplete(data.completedTutorials[0].completed);
    };
    fetchCompleted();
  });

  return (
    <div className="TutorialCard">
      <Box className={classes.card}>
        <Typography variant="h5" className={classes.name}>
          {name}
        </Typography>
        <Typography variant="body1" className={classes.desc}>
          {description}
        </Typography>
        <img className={classes.image} src={images[id - 1]} alt={name} />
        {isComplete && <Icon className={classes.icon}>check_circle_outline</Icon>}
      </Box>
    </div>
  );
};

export default TutorialCard;
