import React from "react";
import { Link } from "react-router-dom";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { MicNone } from "@material-ui/icons";
function Landing() {
  const CustomColor = withStyles({
    root: {
      fontSize: 84,
      background: "-webkit-linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  })(Typography);

  // const url = "https://img.rasset.ie/0016de33-500.jpg";
  const url = "https://media.istockphoto.com/photos/macro-view-of-a-screen-of-trading-terminal-with-abstract-financial-picture-id1200938039?k=6&m=1200938039&s=612x612&w=0&h=N5xs0rpf3cqnKDd0rlur2eGdaF3VkkPpr5BS0HuFGb0=";
  const img1 = "https://i.imgur.com/PDG5zA1.jpeg";
  const img2 = "https://i.imgur.com/bAC0S3R.jpeg";
  const img3 = "https://i.imgur.com/y2ss0Ys.jpeg";
  const useStyles = makeStyles({
    logo: {
      marginTop: 20,
      fontWeight: 800,
      letterSpacing: "0.05em",
      fontFamily: "Roboto",
      textShadow:"none"
    },
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
      position: "relative",
      width: "100%",
      bottom: "512px",
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
      marginTop: "32px"
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
      position: "relative",
      bottom: "256px",
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "space-between",
      alignItems: "center",
      textAlign: "center",
      color: "white",
      padding: "32px",
      width:"90%"
    },
    Landing: {
      width: "100vw!important",
    },
  });
  const classes = useStyles();
  let textVariant = "h4";
  return (
    <div className="Landing">
      <div className={classes.heroContainer}>
        <div className={classes.backImg}></div>
        <div className={classes.hero}>
        <CustomColor className={classes.logo} variant="h1">Kurios</CustomColor>
          <Typography variant="h2">Start Learning. Start Investing.</Typography>
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
        <div>
        <CustomColor className={classes.logo} variant="h3">Learn</CustomColor>
        <Typography variant={textVariant}>Learn about crypto currencies and develop essential knowledge with quick lessons</Typography>
        </div>
      </div>
      <div className={classes.section}>
        <div>
        <CustomColor className={classes.logo} variant="h3">Trade</CustomColor>
        <Typography variant={textVariant}>Paper Trade crypto currency trading strategies before investing with real money</Typography>
        </div>
        <img src={img3} alt="Buy View" className={classes.img} />
      </div>
      <div className={classes.section}>
        <img src={img1} alt="Portfolio View" className={classes.img} />
        <div>
        <CustomColor className={classes.logo} variant="h3">Grow</CustomColor>
        <Typography variant={textVariant}>Diversify your portfolio and build up your account</Typography>
        </div>
      </div>
    </div>
  );
}

export default Landing;
