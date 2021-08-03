import { useState, useEffect } from "react";
import apiClient from "../Services/apiClient";
import { makeStyles, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import btc from "../../images/btc.png";
import eth from "../../images/eth.png";
import ada from "../../images/ada.png";
import doge from "../../images/doge.png";
import dot from "../../images/dot.png";
import xmr from "../../images/xmr.png";

function Coinheader({ symbol }) {
  let currCoin;
  if (symbol === "BTC") {
    currCoin = btc;
  } else if (symbol === "ADA") {
    currCoin = ada;
  } else if (symbol === "ETH") {
    currCoin = eth;
  } else if (symbol === "DOGE") {
    currCoin = doge;
  } else if (symbol === "DOT") {
    currCoin = dot;
  } else if (symbol === "XMR") {
    currCoin = xmr;
  }

  const [state, setState] = useState({
    symbol: symbol,
    price: "0.00",
  });

  useEffect(() => {
    let price = 0.0;

    apiClient.getCoinCurrentPrice(state.symbol).then((res) => {
      if (res.data === null) {
        console.log("#18 Coinheader.js Error:", res);
        price = "Error";
        setTimeout(
          apiClient.getCoinCurrentPrice(state.symbol).then((res2) => {
            if (res2.data === null) {
              console.log("#22 Coinheader.js Error:", res2);
              price = "Error";
            } else {
              price = Number(res2.data.data).toFixed(2);
            }
          }),
          3000
        );
      } else {
        price = Number(res.data.data).toFixed(2);
      }
      setState({
        symbol: symbol,
        price: price,
      });
    });
  }, []);

  const useStyles = makeStyles({
    Coinheader: {
      marginBottom: 20,
      width: "100%",
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "space-between",
      alignItems: "center",
    },
    details: {
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "20rem",
    },
    btnContainer: {
      width: 350,
      display: "flex",
      justifyContent: "space-between",
    },
    btn: {
      width: 150,
      height: 48,
      background: "linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)",
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
    },
    symbolImage: {
      width: 50,
    },
    link: {
      textDecoration: "none",
      color: "white",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.Coinheader}>
      <div className={classes.details}>
        <img className={classes.symbolImage} src={currCoin} alt={state.symbol} />
        <Typography variant="h4" className="symbol">
          {state.symbol}
        </Typography>
        <Typography variant="h4" className="price">
          ${state.price}
        </Typography>
      </div>
      <div className={classes.btnContainer}>
        <Link className={classes.link} to={"/coin/" + state.symbol + "/Buy"}>
          <Button className={classes.btn}>Buy</Button>
        </Link>
        <Link className={classes.link} to={"/coin/" + state.symbol + "/Sell"}>
          <Button className={classes.btn}>Sell</Button>
        </Link>
      </div>
    </div>
  );
}

export default Coinheader;
