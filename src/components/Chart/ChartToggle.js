import { useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import HourlyChart from "./HourlyChart";
import WeeklyChart from "./WeeklyChart";
import YearlyChart from "./YearChart";

const ChartToggle = ({ symbol }) => {
  const [chart, setChart] = useState(2);

  const useStyles = makeStyles({
    charts: {
      width: "100%",
      maxWidth: "84vw",
      display: "flex",
      flexFlow: "column nowrap",
      alignItems: "center",
    },
    buttons: {
      display: "flex",
      marginBottom: 100,
      width: "50%",
      justifyContent: "space-around",
    },
    btn: {
      fontSize: 18,
      fontWeight: "bold",
      color: "rgba(255,255,255,0.5)",
    },
    active: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#5FB2FF",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.charts}>
      {chart === 0 && <HourlyChart symbol={symbol} />}
      {chart === 1 && <WeeklyChart symbol={symbol} />}
      {chart === 2 && <YearlyChart symbol={symbol} />}
      <div className={classes.buttons}>
        <Button className={chart === 0 ? classes.active : classes.btn} onClick={() => setChart(0)}>
          Hourly
        </Button>
        <Button className={chart === 1 ? classes.active : classes.btn} onClick={() => setChart(1)}>
          Weekly
        </Button>
        <Button className={chart === 2 ? classes.active : classes.btn} onClick={() => setChart(2)}>
          Yearly
        </Button>
      </div>
    </div>
  );
};

export default ChartToggle;
