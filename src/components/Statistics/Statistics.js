import { useState, useEffect } from "react";
import React from "react";
import apiClient from "../Services/apiClient";
import { Typography, makeStyles, Divider, CircularProgress } from "@material-ui/core";
import AllTransactions from "../AllTransactions/AllTransactions";

function Statistics({ symbol }) {
  const [stats, setStats] = useState({});
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    apiClient.getCoinStatistics().then((res) => {
      console.log(res.data.statistics);
      res.data.statistics.forEach((element) => {
        // console.log(element.symbol, symbol.toLowerCase())
        if (element.coin_id === symbol.toLowerCase()) {
          setStats(element);
        }
      });
    });
  }, []);

  const useStyles = makeStyles({
    statistics: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "4rem",
      width: "100%",
    },
    section: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      width: "80%",
      marginTop: "2rem",
      marginBottom: "2rem",
      textAlign: "center",
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
    subhead: {
      fontSize: ".7em",
      color: "rgba(255,255,255,0.5)",
    },
    number: {
      margin: 2,
      marginBottom: 24,
    },
    progress: {
      color: "#5FB2FF",
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.statistics}>
      <Typography className={classes.header} variant="h3">
        Statistics
      </Typography>
      <div className={classes.section}>
        <div className={classes.infoOne}>
          <div>
            <Typography variant="h5" className={classes.subhead}>
              Market Cap
            </Typography>
            <Typography variant="h5" className={classes.number}>
              {stats.market_cap ? (
                parseFloat(stats.market_cap).toLocaleString()
              ) : (
                <CircularProgress className={classes.progress} />
              )}
            </Typography>
          </div>
          <div>
            <Typography variant="h5" className={classes.subhead}>
              Volume
            </Typography>
            <Typography variant="h5" className={classes.number}>
              {stats.volume ? (
                parseFloat(stats.volume).toLocaleString()
              ) : (
                <CircularProgress className={classes.progress} />
              )}
            </Typography>
          </div>
        </div>
        <div className={classes.infoTwo}>
          <div>
            <Typography variant="h5" className={classes.subhead}>
              Supply
            </Typography>
            <Typography variant="h5" className={classes.number}>
              {stats.supply ? (
                parseFloat(stats.supply).toLocaleString()
              ) : (
                <CircularProgress className={classes.progress} />
              )}
            </Typography>
          </div>
          <div>
            <Typography variant="h5" className={classes.subhead}>
              Volume/Market Cap
            </Typography>
            <Typography variant="h5" className={classes.number}>
              {stats.volume && stats.market_cap ? (
                (stats.volume / stats.market_cap).toFixed(4)
              ) : (
                <CircularProgress className={classes.progress} />
              )}
            </Typography>
          </div>
        </div>
      </div>
      <Divider className={classes.divider} />
      {transactions.length > 0 && (
        <Typography variant="h3" className={classes.header}>
          Transaction History
        </Typography>
      )}
      <AllTransactions transactions={transactions} setTransactions={setTransactions} />
      {transactions.length > 0 && <Divider className={classes.divider} style={{ marginTop: 40 }} />}
      <Typography variant="h3" className={classes.header}>
        Recent News
      </Typography>
    </div>
  );
}

export default Statistics;
