import React from "react";
import { Link } from "react-router-dom";
import { Button, makeStyles, Typography } from "@material-ui/core";

function Landing() {
  const url = "https://img.rasset.ie/0016de33-500.jpg";
  const img1 = "https://i.imgur.com/GLQ4aTt.png";
  const img2 = "https://i.imgur.com/TeeOVk8.png";
  const img3 = "https://i.imgur.com/MWVzVwW.png";
  const useStyles = makeStyles({
    backImg: {
      backgroundImage: `url('${url}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100vw",
      height: "55vw",
      filter: "blur(12px)",
    },
    img: {
      width: "600px",
      margin: "16px",
    },
    heroContainer: {
      backgroundSize: "cover",
      width: "100%",
      display: "flex",
      flexFlow: "column nowrap",
    },
    hero: {
      position: "absolute",
      width: "100%",
      top: "256px",
      display: "flex",
      flexFlow: "column nowrap",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      textShadow: "3px 3px black",
      color: "white",
      zIndex: "2",
      backdropFilter: "blur(3px)",
    },
    btnContainer: {
      width: 350,
      display: "flex",
      justifyContent: "space-between",
      marginTop: "8rem",
    },
    btn: {
      width: 150,
      height: 48,
      background: "linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)",
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
    },
    link: {
      textDecoration: "none",
      color: "white",
    },
    section: {
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "white",
      padding: "32px",
    },
    Landing: {
      width: "100vw!important",
    },
  });
  const classes = useStyles();
  let textVariant = "h4";
  return (
    <div className="Landing">
      <div classname={classes.heroContainer}>
        <div className={classes.backImg}></div>
        <div className={classes.hero}>
          <Typography variant="h1">Start Learning. Start Investing.</Typography>
          <Typography variant="h2">Get started with your crypto learning today.</Typography>
          <div className={classes.btnContainer}>
            <Link className={classes.link} to={"/login"}>
              <Button className={classes.btn}>Sign In</Button>
            </Link>
            <Link className={classes.link} to={"/register"}>
              <Button className={classes.btn}>Register</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.section}>
        <img src={img2} alt="Tutorial View" className={classes.img} />
        <Typography variant={textVariant}>
          Learn about crypto currencies and develop essential knowledge with quick lessons
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography variant={textVariant}>
          Paper Trade crypto currency trading strategies before investing with real money
        </Typography>
        <img src={img3} alt="Buy View" className={classes.img} />
      </div>
      <div className={classes.section}>
        <img src={img1} alt="Portfolio View" className={classes.img} />
        <Typography variant={textVariant}>Diversify your portfolio and build up your account</Typography>
      </div>
    </div>
  );
}

export default Landing;
