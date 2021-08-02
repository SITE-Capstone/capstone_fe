import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import apiClient from "../Services/apiClient";
import TransactionHistory from "./TransactionHistory";
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

  const [transactionOneAmount, setTransactionOneAmount] = useState();
  const [transactionOnePrice, setTransactionOnePrice] = useState();
  const [transactionOneTime, setTransactionOneTime] = useState();
  const [transactionTwoAmount, setTransactionTwoAmount] = useState();
  const [transactionTwoPrice, setTransactionTwoPrice] = useState();
  const [transactionTwoTime, setTransactionTwoTime] = useState();
  const [transactionThreeAmount, setTransactionThreeAmount] = useState();
  const [transactionThreePrice, setTransactionThreePrice] = useState();
  const [transactionThreeTime, setTransactionThreeTime] = useState();

  useEffect(() => {
    const fetchTransactions = async () => {
      let buying_id = symbol.toLowerCase();

      const { data } = await apiClient.transactionHistory(buying_id);
      console.log("data transactions", data.transactions);
      if (data.transactions.length > 0) {
        setTransactionOneAmount(data.transactions[0].buying_quantity);
        setTransactionOnePrice(data.transactions[0].selling_quantity);
        setTransactionOneTime(data.transactions[0].created_at);
      }
      if (data.transactions.length > 1) {
        setTransactionTwoAmount(data.transactions[1].buying_quantity);
        setTransactionTwoPrice(data.transactions[1].selling_quantity);
        setTransactionTwoTime(data.transactions[1].created_at);
      }
      if (data.transactions.length > 2) {
        setTransactionThreeAmount(data.transactions[2].buying_quantity);
        setTransactionThreePrice(data.transactions[2].selling_quantity);
        setTransactionThreeTime(data.transactions[2].created_at);
      }
    };
    fetchTransactions();
  }, []);

  let time1 = new Date(transactionOneTime);
  let time2 = new Date(transactionTwoTime);
  let time3 = new Date(transactionThreeTime);

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
        <div style={{ display: "flex" }}>
          <div className={classes.mainCard}>
            <div className={classes.imgShadow}>
              <img src={images[id - 1]} alt={name} className={classes.image} />
            </div>
            <div className={classes.info}>
              <Typography variant="h6">{symbol}</Typography>
              <Typography variant="h6">{amount}</Typography>
            </div>
            <div className="marketData"></div>
          </div>

          <div className="transactions">
            {transactionOneAmount && (
              <TransactionHistory
                time={time1.toLocaleString()}
                amount={transactionOneAmount}
                price={transactionOnePrice}
                symbol={symbol}
              />
            )}
            {transactionTwoAmount && (
              <TransactionHistory
                time={time2.toLocaleString()}
                amount={transactionTwoAmount}
                price={transactionTwoPrice}
                symbol={symbol}
              />
            )}
            {transactionThreeAmount && (
              <TransactionHistory
                time={time3.toLocaleString()}
                amount={transactionThreeAmount}
                price={transactionThreePrice}
                symbol={symbol}
              />
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CoinCard;
