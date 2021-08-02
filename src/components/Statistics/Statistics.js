import { useState, useEffect } from "react";
import React from 'react'
import apiClient from "../Services/apiClient";
import { Typography, makeStyles, Button, Divider } from "@material-ui/core";

function Statistics({symbol}) {
    const [stats, setStats] = useState({});


    useEffect(() => {
        apiClient.getCoinStatistics().then((res) => {
            res.data.forEach(element => {
                // console.log(element.symbol, symbol.toLowerCase())
                if(element.symbol===symbol.toLowerCase()){
                    setStats(element)
                }
            });
        })
    }, [])




    const useStyles = makeStyles({
        statistics: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "4rem",
        },
        section: {
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          marginTop: "2rem",
          marginBottom: "2rem",
          textAlign:"center"
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
            width: "25rem",
            // marginBottom: "2rem",
            color: "rgba(255,255,255,0.5)",
          },
      });
    
      const classes = useStyles();
    return (
        <div className={classes.statistics}>
            <Typography className={classes.header} variant="h3">
                Statistics
            </Typography>
            <div className={classes.section}>
                <div>
                    <Typography variant="h5" className={classes.subhead}>
                        Market Cap
                    </Typography>
                    <Typography variant="h5">
                        {stats.market_cap}  
                    </Typography>
                </div>
                <div>
                <Typography variant="h5" className={classes.subhead}>
                        Volume
                    </Typography>
                    <Typography variant="h5">
                        {stats.total_volume}
                    </Typography>
                </div>
                <div>
                <Typography variant="h5" className={classes.subhead}>
                        Supply
                    </Typography>
                    <Typography variant="h5">
                        {stats.circulating_supply}
                    </Typography>
                </div>
                <div>
                <Typography variant="h5" className={classes.subhead}>
                        Market Cap/Volume
                    </Typography>
                    <Typography variant="h5">  
                        {(stats.total_volume/stats.market_cap).toFixed(4)}
                    </Typography>
                </div>
            </div> 
            <div className={classes.divider}></div>
        </div>
    )
}

export default Statistics
