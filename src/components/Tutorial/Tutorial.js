import TutorialCard from "../TutorialCard/TutorialCard";
import Navbar from "../Navbar/Navbar";
import apiClient from "../Services/apiClient";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  gridCont: {
    width: "80vw",
    height: "70vh",
    marginLeft: 20,
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
});

const Tutorial = ({ setVideoUrl, setTutorialName, setTutorialDesc }) => {
  const [tutorials, setTutorials] = useState([]);
  const videos = [
    "https://www.youtube.com/embed/6Gu2QMTAkEU",
    "https://www.youtube.com/embed/8NgVGnX4KOw",
    "",
    "https://www.youtube.com/embed/s4g1XFU8Gto",
    "https://www.youtube.com/embed/04f1YsVntw8",
    "https://www.youtube.com/embed/Do8rHvr65ZA",
    "https://www.youtube.com/embed/DUXy3Zp-KeA",
    "https://www.youtube.com/embed/_-k0xkooSlA",
    "https://www.youtube.com/embed/QrHsFZBab4U",
  ];
  const description = [
    "Cryptocurrency is a form of digital asset based on a network that is distributed across a large number of computers. This decentralized structure allows them to exist outside the control of governments and central authorities.",
    "The first blockchain-based cryptocurrency was Bitcoin, which still remains the most popular and most valuable. Today, there are thousands of alternate cryptocurrencies with various functions and specifications. Some of these are clones or forks of Bitcoin, while others are new currencies that were built from scratch. Some of the competing cryptocurrencies spawned by Bitcoin’s success, known as 'altcoins', include Litecoin, Peercoin, and Namecoin, as well as Ethereum, Cardano, and EOS. Today, the aggregate value of all the cryptocurrencies in existence is around $1.5 trillion—Bitcoin currently represents more than 60% of the total value.",
    "There is no better way to avoid making a poorly timed trade than buying incrementally instead of all at once and thereby buying an asset at its “average” price over time. If you don’t have a really solid grasp of technical indicators and the way the volatile crypto markets work, consider averaging out of positions as well. Remember Cryptocurrency is a 24/7 Global Market. In other words, the market never sleeps. Since you do, consider automating your investing strategy using limit orders, stops, or even using APIs. Investing in just one coin may not be the best idea, instead, consider diversifying and investing into multiple coins as a security net so all your money is not on one basket",
    "Bitcoin is the worlds first cryptocurrency. Developed in 2009, it is a decentralized digital currency without a central bank or single administrator. Bitcoin was launched by an individual or group known by the pseudonym Satoshi Nakamoto. As of March 2021, there were over 18.6 million bitcoins in circulation with a total market cap of around $927 billion. There can only ever be 21 million Bitcoin, and half was mined in the first 4 years. By halving the mining rewards every four years, the final Bitcoin is set to be mined around the year 2140. It is controled by nobody, and anyone can take part because it is open source. Bitcoin can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
    "Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. After Bitcoin, it is the largest cryptocurrency by market capitalization. Ethereum is the most actively used blockchain.",
    "Cardano is a public blockchain platform. It is open-source and decentralized, with consensus achieved using proof of stake. It can facilitate peer-to-peer transactions with its internal cryptocurrency, Ada. Cardano was founded in 2015 by Ethereum co-founder Charles Hoskinson",
    "Dogecoin is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a joke, making fun of the wild speculation in cryptocurrencies at the time. Despite its satirical nature, some consider it a legitimate investment prospect.",
    "Polkadot is a sharded heterogeneous multi-chain architecture which enables external networks as well as customised layer one 'parachains' to communicate, creating an interconnected internet of blockchains. The cryptocurrency uses proof of stake.",
    "Monero is a decentralized cryptocurrency. It uses a public distributed ledger with privacy-enhancing technologies that obfuscate transactions to achieve anonymity and fungibility. Observers cannot decipher addresses trading monero, transaction amounts, address balances, or transaction histories.",
  ];

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
      <Grid container direction="row" spacing={7} className={classes.gridCont}>
        {tutorials.map((tutorial, index) => (
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <Link
              to={"/tutorial/" + tutorial.name.split(" ").slice(0, 1)}
              className={classes.link}
              onClick={() => {
                setVideoUrl(videos[index]);
                setTutorialName(tutorial.name);
                setTutorialDesc(description[index]);
              }}
            >
              <TutorialCard
                name={tutorial.name}
                description={tutorial.description}
                color={tutorial.color}
                key={tutorial.id}
                id={tutorial.id}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Tutorial;
