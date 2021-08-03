import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";
import apiClient from "../Services/apiClient";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const Balances = ({ user, wallet }) => {
  const [balance, setBalance] = useState([]);
  const [coinPrice, setCoinPrice] = useState([]);
  const portfolio = [];

  useEffect(() => {
    const fetchBalances = async () => {
      const { data } = await apiClient.getUsdWallet(user.id);
      const result = data.Wallet.usd;
      if (data) {
        setBalance(result);
      }

      // const coins = [];
      const prices = [];

      // wallet.map((coin) => {
      //   coins.push(coin.symbol);
      // });
      // console.log(coins);

      const BTC = await apiClient.getCoinCurrentPrice("BTC");
      const ADA = await apiClient.getCoinCurrentPrice("ADA");
      const ETH = await apiClient.getCoinCurrentPrice("ETH");
      const DOGE = await apiClient.getCoinCurrentPrice("DOGE");
      const DOT = await apiClient.getCoinCurrentPrice("DOT");
      const XMR = await apiClient.getCoinCurrentPrice("XMR");
      // const BTC = 30738.19;
      // const ADA = 1.12;
      // const ETH = 1826.22;
      // const DOGE = 0.17;
      // const DOT = 11.56;
      // const XMR = 191.9;

      prices.push(BTC.data.data);
      prices.push(ADA.data.data);
      prices.push(ETH.data.data);
      prices.push(DOGE.data.data);
      prices.push(DOT.data.data);
      prices.push(XMR.data.data);
      // prices.push(BTC);
      // prices.push(ADA);
      // prices.push(ETH);
      // prices.push(DOGE);
      // prices.push(DOT);
      // prices.push(XMR);

      console.log("prices", prices);
      setCoinPrice(prices);

      // wallet.map((entry, index) => {
      //   const obj = { symbol: entry.symbol, amount: entry.amount * prices[index] };
      // });
    };
    fetchBalances();
  }, []);

  console.log("coinprice", coinPrice);
  console.log("wallet", wallet);

  let totalCoinWalletInUsd;
  let assetTotal;

  if (wallet.length > 0) {
    totalCoinWalletInUsd =
      wallet[0].amount * coinPrice[0] +
      wallet[1].amount * coinPrice[1] +
      wallet[2].amount * coinPrice[2] +
      wallet[3].amount * coinPrice[3] +
      wallet[4].amount * coinPrice[4] +
      wallet[5].amount * coinPrice[5];

    assetTotal = totalCoinWalletInUsd + balance;
    wallet.map((entry, index) => {
      console.log("index", coinPrice[index]);
      const obj = { symbol: entry.symbol, amount: entry.amount * coinPrice[index] };
      portfolio.push(obj);
    });
    if (totalCoinWalletInUsd === 0) {
      totalCoinWalletInUsd = balance;
      assetTotal = balance;
    }
  } else {
    totalCoinWalletInUsd = balance;
  }

  // console.log("------", wallet[2].amount * coinPrice[2]);
  console.log("portfolio", portfolio);

  console.log("coinWallet", totalCoinWalletInUsd);
  const COLORS = ["#644696", "#17ECC5", "#4E93F5", "#FAD679", "#F08FE1", "#D66168"];

  const useStyles = makeStyles({
    balances: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    chart: {
      marginTop: 110,
      "@media (max-width: 1560px)": {
        marginTop: 20,
      },
    },
    data: {
      width: "12vw",
      height: "5vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    usd: {
      marginTop: 20,
      marginBottom: 70,
      "@media (max-width: 1560px)": {
        marginBottom: 40,
      },
    },
    col: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
    percents: {
      width: "30vw",
      display: "flex",
      justifyContent: "space-between",
    },
    circle: {
      borderRadius: "50%",
      height: 10,
      width: 10,
    },
    name: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      width: "8rem",
    },
    coin: {
      width: "5rem",
    },
    portfolio: {
      marginTop: 50,
      "@media (max-width: 1560px)": {
        marginTop: 0,
        fontSize: 28,
      },
    },
  });

  const classes = useStyles();

  console.log("bal", balance);

  return (
    <div className={classes.balances}>
      <div className={classes.chart}>
        <PieChart width={730} height={250}>
          <Pie
            data={portfolio}
            dataKey="amount"
            nameKey="symbol"
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={70}
            fill="#8884d8"
          >
            {wallet.map((entry, index) => (
              <Cell fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <Typography variant="h4" className={classes.portfolio}>
        Total Portfolio: {assetTotal ? "$" + assetTotal.toLocaleString() : "calculating..."}
      </Typography>
      <Typography variant="h5" className={classes.usd}>
        Buying Power: ${balance && balance.toLocaleString()}
      </Typography>
      <div className={classes.percents}>
        <div className={classes.col}>
          <div className={classes.data}>
            <div className={classes.name}>
              <div
                className={classes.circle}
                style={{ backgroundColor: "#644696", filter: "drop-shadow(0px 4px 4px rgba(151, 0, 232, 0.8))" }}
              ></div>
              <Typography variant="body1" className={classes.coin} style={{ fontSize: "1.1rem" }}>
                Bitcoin
              </Typography>
            </div>
            <Typography variant="body1" style={{ color: "#644696", fontSize: "1.1rem" }}>
              {wallet.length > 0 && (((wallet[0].amount * coinPrice[0]) / totalCoinWalletInUsd) * 100).toFixed(2) + "%"}
            </Typography>
          </div>
          <div className={classes.data}>
            <div className={classes.name}>
              <div
                className={classes.circle}
                style={{ backgroundColor: "#17ECC5", filter: "drop-shadow(0px 4px 4px rgba(23, 236, 197, 0.8))" }}
              ></div>
              <Typography variant="body1" className={classes.coin} style={{ fontSize: "1.1rem" }}>
                Cardano
              </Typography>
            </div>
            <Typography variant="body1" style={{ color: "#17ECC5", fontSize: "1.1rem" }}>
              {wallet.length > 0 && (((wallet[1].amount * coinPrice[1]) / totalCoinWalletInUsd) * 100).toFixed(2) + "%"}
            </Typography>
          </div>
          <div className={classes.data}>
            <div className={classes.name}>
              <div
                className={classes.circle}
                style={{ backgroundColor: "#4E93F5", filter: "drop-shadow(0px 4px 4px rgba(0, 151, 232, 0.8))" }}
              ></div>
              <Typography variant="body1" className={classes.coin} style={{ fontSize: "1.1rem" }}>
                Ethereum
              </Typography>
            </div>
            <Typography variant="body1" style={{ color: "#4E93F5", fontSize: "1.1rem" }}>
              {wallet.length > 0 && (((wallet[2].amount * coinPrice[2]) / totalCoinWalletInUsd) * 100).toFixed(2) + "%"}
            </Typography>
          </div>
        </div>
        <div className={classes.col}>
          <div className={classes.data}>
            <div className={classes.name}>
              <div
                className={classes.circle}
                style={{ backgroundColor: "#FAD679", filter: "drop-shadow(0px 4px 4px rgba(250, 214, 121, 0.8))" }}
              ></div>
              <Typography variant="body1" className={classes.coin} style={{ fontSize: "1.1rem" }}>
                Dogecoin
              </Typography>
            </div>
            <Typography variant="body1" style={{ color: "#FAD679", fontSize: "1.1rem" }}>
              {wallet.length > 0 && (((wallet[3].amount * coinPrice[3]) / totalCoinWalletInUsd) * 100).toFixed(2) + "%"}
            </Typography>
          </div>
          <div className={classes.data}>
            <div className={classes.name}>
              <div
                className={classes.circle}
                style={{ backgroundColor: "#F08FE1", filter: "drop-shadow(0px 4px 4px rgba(204, 71, 207, 0.8))" }}
              ></div>
              <Typography variant="body1" className={classes.coin} style={{ fontSize: "1.1rem" }}>
                Polkadot
              </Typography>
            </div>
            <Typography variant="body1" style={{ color: "#F08FE1", fontSize: "1.1rem" }}>
              {wallet.length > 0 && (((wallet[4].amount * coinPrice[4]) / totalCoinWalletInUsd) * 100).toFixed(2) + "%"}
            </Typography>
          </div>
          <div className={classes.data}>
            <div className={classes.name}>
              <div
                className={classes.circle}
                style={{ backgroundColor: "#D66168", filter: "drop-shadow(0px 4px 4px rgba(214, 97, 104, 0.8))" }}
              ></div>
              <Typography variant="body1" className={classes.coin} style={{ fontSize: "1.1rem" }}>
                Monero
              </Typography>
            </div>
            <Typography variant="body1" style={{ color: "#D66168", fontSize: "1.1rem" }}>
              {wallet.length > 0 && (((wallet[5].amount * coinPrice[5]) / totalCoinWalletInUsd) * 100).toFixed(2) + "%"}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balances;
