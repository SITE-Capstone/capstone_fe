import { useState, useEffect } from "react";
import React from "react";
import apiClient from "../Services/apiClient";
import { Typography, makeStyles, Divider } from "@material-ui/core";

function Statistics({ symbol }) {
  const [stats, setStats] = useState({});

  useEffect(() => {
    apiClient.getCoinStatistics().then((res) => {
      res.data.forEach((element) => {
        // console.log(element.symbol, symbol.toLowerCase())
        if (element.symbol === symbol.toLowerCase()) {
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
              {parseFloat(stats.market_cap).toLocaleString()}
            </Typography>
          </div>
          <div>
            <Typography variant="h5" className={classes.subhead}>
              Volume
            </Typography>
            <Typography variant="h5" className={classes.number}>
              {parseFloat(stats.total_volume).toLocaleString()}
            </Typography>
          </div>
        </div>
        <div className={classes.infoTwo}>
          <div>
            <Typography variant="h5" className={classes.subhead}>
              Supply
            </Typography>
            <Typography variant="h5" className={classes.number}>
              {parseFloat(stats.circulating_supply).toLocaleString()}
            </Typography>
          </div>
          <div>
            <Typography variant="h5" className={classes.subhead}>
              Volume/Market Cap
            </Typography>
            <Typography variant="h5" className={classes.number}>
              {(stats.total_volume / stats.market_cap).toFixed(4)}
            </Typography>
          </div>
        </div>
      </div>
      <Divider className={classes.divider} />
      <Typography variant="h3" className={classes.header}>
        Recent News
      </Typography>
    </div>
  );
}

export default Statistics;
