import { makeStyles, Typography, Button } from "@material-ui/core";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import apiClient from "../Services/apiClient";
import UserContext from "../../hooks/userContext";

const CoinTutorial = ({
  videoUrl,
  name,
  desc,
  tutorialId,
  setVideoUrl,
  setTutorialName,
  setTutorialDesc,
  setTutorialId,
}) => {
  const user = useContext(UserContext);

  const useStyles = makeStyles({
    container: {
      display: "flex",
      height: "80vh",
      width: "80vw",
      alignItems: "center",
      justifyContent: "space-between",
    },
    desc: {
      width: "32rem",
    },
    title: {
      width: "200px",
      marginTop: "2rem",
      marginBottom: "4rem",
    },
    link: {
      textDecoration: "none",
      color: "white",
    },
    btn: {
      position: "absolute",
      bottom: "0%",
      right: "5%",
      marginTop: 20,
      marginBottom: 50,
      borderRadius: "25px",
      boxShadow: "0px 2px 4px rgba(85, 35, 221, 0.4)",
      height: "64px",
      width: "189px",
      background: "linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)",
      color: "white",
      fontSize: "24px",
      fontWeight: "bold",
    },
  });

  const classes = useStyles();

  const names = [
    "Beginner's Guide",
    "General Information",
    "Investing Guide",
    "Bitcoin (BTC)",
    "Ethereum (ETH)",
    "Cardano (ADA)",
    "Dogecoin (DOGE)",
    "Polkadot (DOT)",
    "Monero (XMR)",
  ];
  const videos = [
    "https://www.youtube.com/embed/6Gu2QMTAkEU",
    "https://www.youtube.com/embed/8NgVGnX4KOw",
    "https://www.youtube.com/embed/sCqox8Mfm58",
    "https://www.youtube.com/embed/s4g1XFU8Gto",
    "https://www.youtube.com/embed/04f1YsVntw8",
    "https://www.youtube.com/embed/Do8rHvr65ZA",
    "https://www.youtube.com/embed/DUXy3Zp-KeA",
    "https://www.youtube.com/embed/_-k0xkooSlA",
    "https://www.youtube.com/embed/ScoBEhKUJ-c",
  ];
  const description = [
    "Cryptocurrency is a form of payment that can be exchanged online for goods and services. Many companies have issued their own currencies, often called tokens, and these can be traded specifically for the good or service that the company provides. Think of them as you would arcade tokens or casino chips. You’ll need to exchange real currency for the cryptocurrency to access the good or service. Cryptocurrencies work using a technology called blockchain. Blockchain is a decentralized technology spread across many computers that manages and records transactions. Part of the appeal of this technology is its security.They are a form of digital asset based on a network that is distributed across a large number of computers. This decentralized structure allows them to exist outside the control of governments and central authorities.",
    "The first blockchain-based cryptocurrency was Bitcoin, which still remains the most popular and most valuable. Today, there are thousands of alternate cryptocurrencies with various functions and specifications. Some of these are clones or forks of Bitcoin, while others are new currencies that were built from scratch. Some of the competing cryptocurrencies spawned by Bitcoin’s success, known as 'altcoins', include Litecoin, Peercoin, and Namecoin, as well as Ethereum, Cardano, and EOS. Today, the aggregate value of all the cryptocurrencies in existence is around $1.5 trillion and Bitcoin currently represents more than 60% of the total value. More than 10,000 different cryptocurrencies are traded publicly, according to CoinMarketCap.com, a market research website. And cryptocurrencies continue to proliferate, raising money through initial coin offerings, or ICOs.",
    "There is no better way to avoid making a poorly timed trade than buying incrementally instead of all at once and thereby buying an asset at its “average” price over time. If you don’t have a really solid grasp of technical indicators and the way the volatile crypto markets work, consider averaging out of positions as well. Remember Cryptocurrency is a 24/7 Global Market. In other words, the market never sleeps. Since you do, consider automating your investing strategy using limit orders, stops, or even using APIs. Investing in just one coin may not be the best idea, instead, consider diversifying and investing into multiple coins as a security net so all your money is not on one basket",
    "Bitcoin is the worlds first cryptocurrency. Developed in 2009, it is a decentralized digital currency without a central bank or single administrator. Bitcoin was launched by an individual or group known by the pseudonym Satoshi Nakamoto. As of March 2021, there were over 18.6 million bitcoins in circulation with a total market cap of around $927 billion. There can only ever be 21 million Bitcoin, and half was mined in the first 4 years. By halving the mining rewards every four years, the final Bitcoin is set to be mined around the year 2140. It is controled by nobody, and anyone can take part because it is open source. Bitcoin can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries. Bitcoin is not a physical currency, all balances are stored on a public ledger that everyone has transparent access to. All bitcoin transactions are verified by a massive amount of computing power. Bitcoin mining is performed by high-powered computers that solve complex computational math problems; these problems are so complex that they cannot be solved by hand and are complicated enough to tax even incredibly powerful computers. When computers solve these complex math problems on the bitcoin network, they produce new bitcoin. By solving computational math problems, bitcoin miners make the bitcoin payment network trustworthy and secure by verifying its transaction information.",
    "Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. After Bitcoin, it is the largest cryptocurrency by market capitalization. Ethereum is a technology that lets you send cryptocurrency to anyone for a small fee. It also powers applications that everyone can use and no one can take down. It is the most widely used programmable blockchain. Ethereum builds on Bitcoin's innovation, with some big differences. Both let you use digital money without payment providers or banks. But Ethereum is programmable, so you can also use it for lots of different digital assets – even Bitcoin! This also means Ethereum is for more than payments. It's a marketplace of financial services, games and apps that can't steal your data or censor you.",
    "Cardano is a public blockchain platform that is open-source and decentralized, with consensus achieved using proof of stake and using the first peer-reviewed verifiably secure blockchain protocol, Ouroboros. This protocol allows Cardano to sustainably scale to global requirements without, crucially, compromising security.Proof of stake (PoS) is a concensus mechanism for blockchains that works by selecting validators in proportion to their quantity of holdings in the associated cryptocurrency, in this case ADA. As opposed to proof of work (PoW), PoS is very energy efficient, has lower barriers of entry by not requiring elite hardware for creating new blocks, and is better at preventing centralization. Cardano can facilitate peer-to-peer transactions with its internal cryptocurrency, ADA. Cardano was founded in 2015 by Ethereum co-founder Charles Hoskinson and is the the first to be founded on peer-reviewed research and developed through evidence-based methods",
    "Dogecoin is a cryptocurrency, like Bitcoin or Ethereum, however it is very different than either of these popular coins. Dogecoin was originally created in 2013 by software engineers Billy Marcus and Jackson Palmer as a lighthearted joke for crypto enthusiasts, and took its name from a once-popular meme. Despite this unusual origin story, it has exploded in popularity in 2021. Dogecoin has become the fifth largest cryptocurrency by market cap. Despite its satirical nature, some consider it a legitimate investment prospect. In early 2021, Dogecoin gained cult status on Reddit’s WallStreetBets where enthusiasts had promised to propel its value 'to the moon'. Dogecoin has exploded in value and gained more than 5,000% in 2021. Among its boosters is Tesla CEO Elon Musk, who called Dogecoin his favorite cryptocurrency. Musk also named Dogecoin the 'people’s crypto', and promised to plant a physical Dogecoin token on the moon.",
    "Polkadot is a sharded heterogeneous multi-chain architecture which enables external networks as well as customised layer one 'parachains' to communicate, creating an interconnected internet of blockchains. Polkadot was founded by Robert Habermeier, Peter Czaban, and Dr. Gavin Wood, who was a co founder of Ethereum. Polkadot makes use of proof of stake. Polkadot facilitates an internet where independent blockchains can exchange information and transactions in a trustless way via the Polkadot relay chain. Polkadot makes it easier than ever to create and connect decentralized applications, services, and institutions. By empowering innovators to build better solutions, we seek to free society from its reliance on a broken web where its large institutions can’t violate our trust.",
    "Monero is an open source, privacy oriented, decentralized cryptocurrency. It was launched in 2014 and uses a public distributed ledger with privacy-enhancing technologies that obfuscate transactions to achieve anonymity and fungibility. Fungibility means that two units of a currency can be substituted with no difference between them. If you take two $1 bills, they are both worth the same, but not fungible as they have a unique serial number to differentiate them. Alternitively, two gold bars of the same grade and weight are fungible, as both have the same value and don’t carry any distinguishing features. Monero makes transaction details, like the identity of senders and recipients, and the amount of every transaction, anonymous by disguising the addresses used by participants. Along with anonymity, the mining process for Monero is based on an egalitarian concept. This is the principle that all people are equal and deserve equal opportunities. Its developers did not keep any stake for themselves when they launched Monero but they did bank on contributions and community support to further develop the virtual currency.",
  ];

  const completeTutorial = async () => {
    await apiClient.markTutorialAsCompleted(user.id, tutorialId, 1);
  };

  useEffect(() => {
    console.log("id", tutorialId);
    setVideoUrl(videos[tutorialId - 1]);
    setTutorialName(names[tutorialId - 1]);
    setTutorialDesc(description[tutorialId - 1]);
  }, []);

  return (
    <div>
      <Link className={classes.link} to="/tutorial" onClick={completeTutorial}>
        <Button className={classes.btn}>Finish</Button>
      </Link>
      <div className={classes.container}>
        <div className="text">
          <Typography variant="h3" className={classes.title}>
            {name}
          </Typography>
          <Typography varaint="body1" className={classes.desc}>
            {desc}
          </Typography>
        </div>
        <div className="video">
          <iframe
            width="840"
            height="473"
            src={videoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CoinTutorial;
