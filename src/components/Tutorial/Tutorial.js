import TutorialCard from "../TutorialCard/TutorialCard";
import Navbar from "../Navbar/Navbar";
import apiClient from "../Services/apiClient";
import { useState, useEffect } from "react";

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

  return (
    <div className="Tutorial">
      <Navbar />
      {tutorials.map((tutorial) => (
        <TutorialCard name={tutorial.name} description={tutorial.description} key={tutorial.id} />
      ))}
    </div>
  );
};

export default Tutorial;
