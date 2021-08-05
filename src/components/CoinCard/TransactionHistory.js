import { useState, useEffect } from "react";
import apiClient from "../Services/apiClient";
import { Typography, makeStyles, Divider } from "@material-ui/core";
import up from "../../images/up.png";
import down from "../../images/down.png";

const TransactionHistory = ({ time, amount, price, symbol }) => {
  const [rate, setRate] = useState();
  useEffect(() => {
    const fetchCurrentPrice = async () => {
      const { data } = await apiClient.getCoinCurrentPrice(symbol);
      console.log("data", data.data);
      if (data) {
        setRate(data.data);
      }
    };
    fetchCurrentPrice();

    const interval = setInterval(() => {
      fetchCurrentPrice();
      console.log("fetching data");
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const useStyles = makeStyles({
    container: {
      display: "flex",
      width: "100%",
      justifyContent: "space-around",
      alignItems: "center",
      height: "40%",
      "@media (max-width: 1440px)": {
        height: "33%",
        marginTop: -30,
        marginBottom: 30,
      },
    },
    up: {
      height: 20,
      width: 25,
      marginRight: 10,
      filter: "drop-shadow(0px 4px 5px rgba(0, 232, 172, 0.5))",
    },
    down: {
      height: 28,
      width: 32,
      marginRight: 10,
      filter: "drop-shadow(0px 4px 5px rgba(243, 80, 80, 0.5))",
    },
    text: {
      "@media (max-width: 1440px)": {
        fontSize: 10,
      },
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.container}>
      {parseFloat(amount).toFixed(2) * rate > parseFloat(price).toFixed(2) ? (
        <img src={up} alt="up arrow" className={classes.up} />
      ) : (
        <img src={down} alt="down arrow" className={classes.down} />
      )}
      <div>
        <Typography className={classes.text} variant="body2">
          {parseFloat(amount).toFixed(2) + " x $" + parseFloat(price).toFixed(2)}
        </Typography>
        <Typography className={classes.text} variant="body2">
          {time.split(",")}
        </Typography>
        <Divider style={{ backgroundColor: "rgba(255,255,255, 0.2)", marginTop: 3 }} />
      </div>
    </div>
  );
};

export default TransactionHistory;
