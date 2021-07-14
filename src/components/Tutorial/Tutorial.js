import TutorialCard from "../TutorialCard/TutorialCard";

const Tutorial = () => {
  let tutorials = [
    {
      id: 1,
      name: "Beginner's Guide",
      description: "Learn the basics of cryptocurrencies",
    },
    {
      id: 2,
      name: "General",
      description: "Background information on cryptocurrencies",
    },
    {
      id: 3,
      name: "ADA",
      description: "Learn about trading and how to time investments",
    },
    {
      id: 4,
      name: "BTC",
      description: "Learn about Bitcoin the worlds first cryptocurrency",
    },
    {
      id: 5,
      name: "ETH",
      description: "Learn about Ethereum and decentralization",
    },
    {
      id: 6,
      name: "ADA",
      description: "Learn about Cardano and the basics of staking",
    },
    {
      id: 7,
      name: "DOGE",
      description: "Learn about Dogecoin and risk assessment",
    },
    {
      id: 8,
      name: "DOT",
      description: "Learn about Polkadot and blockchain",
    },
    {
      id: 9,
      name: "XMR",
      description: "Learn about Monero and anonymity",
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
