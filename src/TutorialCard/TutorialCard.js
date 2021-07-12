import React from "react";
import { Typography } from "@material-ui/core";

const TutorialCard = ({ name, description }) => {
  return (
    <div className="TutorialCard">
      <div className="card">
        <Typography variant="h5" className="name">
          {name}
        </Typography>
        <Typography variant="body1" className="description">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default TutorialCard;
