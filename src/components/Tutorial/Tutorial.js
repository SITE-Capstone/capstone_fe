import TutorialCard from "../TutorialCard/TutorialCard";
import Navbar from "../Navbar/Navbar";
import apiClient from "../Services/apiClient";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  // container: {
  //   width: "70vw",
  //   height: "70vh",
  //   display: "grid",
  //   gridTemplateColumns: "repeat(3, 33%)",
  //   justifyContent: "space-around",
  //   alignItems: "center",
  // },
  gridCont: {
    width: "80vw",
    height: "70vh",
    marginLeft: 20,
  },
});

const Tutorial = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    const fetchTutorials = async () => {
      const { data } = await apiClient.getTutorials();
      console.log("data", data.Tutorials);
      if (data) {
        setTutorials(data.Tutorials);
      }
    };
    fetchTutorials();
  }, []);

  const classes = useStyles();

  return (
    <div className="Tutorial">
      <Navbar />
      {/* <div className={classes.container}> */}
      {/* now using material ui grid component instead of css grid */}
      <Grid container direction="row" spacing={7} className={classes.gridCont}>
        {tutorials.map((tutorial) => (
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <TutorialCard
              name={tutorial.name}
              description={tutorial.description}
              color={tutorial.color}
              key={tutorial.id}
              id={tutorial.id}
            />
          </Grid>
        ))}
      </Grid>
      {/* </div> */}
    </div>
  );
};

export default Tutorial;
