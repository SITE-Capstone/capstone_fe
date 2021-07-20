import { useState, useEffect } from "react";
import apiClient from "../Services/apiClient";
import { makeStyles, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

function Coinheader({ symbol }) {
  const [state, setState] = useState({
    symbol: symbol,
    price: "0.00",
    url: "https://pics.freeicons.io/uploads/icons/png/17917263711578289008-512.png",
  });

  useEffect(() => {
    let url = "https://pics.freeicons.io/uploads/icons/png/17917263711578289008-512.png";
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
              price = res2.data.rate.toFixed(2);
            }
          }),
          3000
        );
      } else {
        price = res.data.rate.toFixed(2);
      }
      setState({
        symbol: symbol,
        price: price,
        url: url,
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
  });

  const classes = useStyles();

  return (
    <div className={classes.Coinheader}>
      <div className={classes.details}>
        <img className={classes.symbolImage} src={state.url} alt={state.symbol} />
        <Typography variant="h4" className="symbol">
          {state.symbol}
        </Typography>
        <Typography variant="h4" className="price">
          ${state.price}
        </Typography>
      </div>
      <div className={classes.btnContainer}>
        <Button className={classes.btn}>Buy</Button>
        <Button className={classes.btn}>Sell</Button>
      </div>
    </div>
  );
}

export default Coinheader;
