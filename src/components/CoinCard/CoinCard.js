import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import btc from "../../images/btc.png";
import eth from "../../images/eth.png";
import ada from "../../images/ada.png";
import doge from "../../images/doge.png";
import dot from "../../images/dot.png";
import xmr from "../../images/xmr.png";

const CoinCard = ({ name, symbol, amount, color, id }) => {
  const useStyles = makeStyles({
    card: {
      width: "370px",
      height: "15.4rem",
      background: color,
      borderRadius: "5px",
    },
    title: {
      marginLeft: 20,
      height: 40,
      display: "flex",
      alignItems: "flex-end",
    },
    mainCard: {
      width: 190,
      height: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      marginTop: "2.5rem",
    },
    image: {
      height: "70px",
      marginLeft: 10,
      marginTop: 10,
    },
    imgShadow: {
      borderRadius: "50%",
      background: color,
      opacity: 0.8,
      height: "90px",
      width: "90px",
    },
  });

  const classes = useStyles();

  const images = [btc, ada, eth, doge, dot, xmr];

  return (
    <div className={classes.card}>
      <div className="title">
        <Typography variant="h6" className={classes.title}>
          {name}
        </Typography>
      </div>
      <div className={classes.mainCard}>
        <div className={classes.imgShadow}>
          <img src={images[id - 1]} alt={name} className={classes.image} />
        </div>
        <div className={classes.info}>
          <Typography variant="h6">{symbol}</Typography>
          <Typography variant="h6">{amount.toLocaleString()}</Typography>
        </div>
        <div className="marketData"></div>
      </div>
    </div>
  );
};

export default CoinCard;
