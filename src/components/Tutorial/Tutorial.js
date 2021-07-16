import TutorialCard from "../TutorialCard/TutorialCard";
import Navbar from "../Navbar/Navbar";
import apiClient from "../Services/apiClient";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    width: "70vw",
    height: "70vh",
    display: "grid",
    gridTemplateColumns: "repeat(3, 33%)",
    justifyContent: "space-around",
    alignItems: "center",
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
      <div className={classes.container}>
        {tutorials.map((tutorial) => (
          <TutorialCard
            name={tutorial.name}
            description={tutorial.description}
            color={tutorial.color}
            key={tutorial.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Tutorial;
