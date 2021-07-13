import TutorialCard from "../TutorialCard/TutorialCard";

const Tutorial = () => {
  let tutorials = [
    {
      id: 1,
      name: "BTC",
      description: "short description",
    },
    {
      id: 2,
      name: "ETH",
      description: "short description",
    },
    {
      id: 3,
      name: "ADA",
      description: "short description",
    },
    {
      id: 4,
      name: "DOT",
      description: "short description",
    },
    {
      id: 5,
      name: "DOGE",
      description: "short description",
    },
    {
      id: 6,
      name: "XMR",
      description: "short description",
    },
  ];

  return (
    <div className="Tutorial">
      {tutorials.map((tutorial) => (
        <TutorialCard name={tutorial.name} description={tutorial.description} key={tutorial.id} />
      ))}
    </div>
  );
};

export default Tutorial;
