import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import btc from "../../images/btc.png";
import eth from "../../images/eth.png";
import ada from "../../images/ada.png";
import doge from "../../images/doge.png";
import dot from "../../images/dot.png";
import xmr from "../../images/xmr.png";

const CoinCard = ({ name, symbol, amount, color, id, setSymbol, setName }) => {
  const useStyles = makeStyles({
    card: {
      width: "24rem",
      height: "15.4rem",
      background: color,
      borderRadius: "5px",
      "@media (max-width: 1560px)": {
        width: "18.5rem",
        height: "10rem",
        marginBottom: -22,
      },
      "@media (max-width: 1400px)": {
        width: "24rem",
        height: "12rem",
        background: color,
        borderRadius: "5px",
      },
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
      "@media (max-width: 1560px)": {
        marginTop: 0,
      },
      "@media (max-width: 1400px)": {
        marginTop: "1rem",
      },
    },
    image: {
      height: "70px",
      marginLeft: 10,
      marginTop: 10,
      "@media (max-width: 1560px)": {
        height: "60px",
      },
    },
    imgShadow: {
      borderRadius: "50%",
      background: color,
      opacity: 0.8,
      height: "90px",
      width: "90px",
      "@media (max-width: 1560px)": {
        height: "80px",
        width: "80px",
      },
    },
    link: {
      textDecoration: "none",
      color: "white",
    },
  });

  const classes = useStyles();

  const images = [btc, ada, eth, doge, dot, xmr];

  return (
    <div className={classes.card}>
      <Link
        className={classes.link}
        to={"/coin/" + symbol}
        onClick={() => {
          setSymbol(symbol);
          setName(name);
        }}
      >
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
      </Link>
    </div>
  );
};

export default CoinCard;
