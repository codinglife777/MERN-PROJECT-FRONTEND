import React from "react";
import { Link } from "react-router-dom";
import { Fab, Box, Container, CssBaseline, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green, blue, pink, red, purple } from "@material-ui/core/colors";
import FaceIcon from "@material-ui/icons/Face";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from '@material-ui/icons/Twitter';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Navigation from "./Design/Navigation";
import Copyright from "./Design/Copyright";
import Logo1 from "./Design/Logo1";
import Points from "./Counter/Points";
import Increase from "./Counter/Increase";
import FacebookCount from "./Counter/FacebokCount";
import InstagramCount from "./Counter/InstagramCount";
import LinkedinCount from "./Counter/LinkedinCount";
import TwitterCount from "./Counter/TwitterCount";
import AddIcon from '@material-ui/icons/Add';
import CountUp from "react-countup";

const useStyles = makeStyles((theme) => ({
  
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  pink: {
    color: "#fff",
    backgroundColor: pink[500],
  },
  pinkText: {
    color: pink[500],

    fontSize: "x-large",
  },
  blue: {
    color: "#fff",
    backgroundColor: blue[600],
  },
  blueText: {
    color: blue[600],

    fontSize: "x-large",
  },
  blueLight: {
    color: "#fff",
    backgroundColor: blue[300],
  },
  blueLightText: {
    color: blue[300],

    fontSize: "x-large",
  },
  blueDark: {
    color: "#fff",
    backgroundColor: blue[800],
  },
  blueDarkText: {
    color: blue[800],

    fontSize: "x-large",
  },

  greenText: {
    color: green[500],

    fontSize: "x-large",
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
  redText: {
    color: red[500],

    fontSize: "x-large",
  },
  red: {
    color: "#fff",
    backgroundColor: red[500],
  },
  purple: {
    color: "#fff",
    backgroundColor: purple[500],
  },
  purpleText: {
    color: purple[500],

    fontSize: "x-large",
  },
  black: {
    color: "#fff",
    backgroundColor: "black",
  },
  blackText: {
    color: "black",

    fontSize: "x-large",
  },
}));

function SocialProfile() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Grid container direction="column" justify="center" alignItems="center">
        <br />
        <Logo1 />
        <br />

        <Grid item className={classes.blackText}>
          SOCIAL PROFILE
        </Grid>
        <br />
        <Grid item>
          <Link to="../Profile/Profile">
            <Fab className={classes.purple}>
              <AccountCircleIcon />
            </Fab>
          </Link>
        </Grid>
        <br />
        <Grid container>
          <Grid item xs className={classes.blueText}>
            <Fab className={classes.blue}>
              <FacebookIcon />
            </Fab>
            <FacebookCount />
          </Grid>
          <Grid item className={classes.purpleText}>
            <Fab className={classes.purple}>
              <InstagramIcon />
            </Fab>
            <InstagramCount />
          </Grid>
        </Grid>
        <Link to="/HomeResume">
          <Points />
        </Link>
        <Grid container>
          <Grid item xs className={classes.blueLightText}>
            <Fab className={classes.blueLight}>
              <TwitterIcon />
            </Fab>
            <TwitterCount />
          </Grid>
          <Grid item className={classes.blueDarkText}>
            <Fab className={classes.blueDark}>
              <LinkedInIcon />
            </Fab>
            <LinkedinCount />
          </Grid>
        </Grid>
        <Grid item>
          <Fab className={classes.green}><AddIcon/></Fab>
          <Increase />
        </Grid>
        <br />
        <br />
        <Grid item className={classes.blackText}>
          FRIENDS
        </Grid>
        <br />
        <br />
        <Grid container>
          <Grid item xs>
            <Fab className={classes.blue}>
              <FaceIcon />
            </Fab>
          </Grid>
          <Grid item xs>
            <Fab className={classes.pink}>
              <FaceIcon />
            </Fab>
          </Grid>
          <Grid item>
            <Fab className={classes.purple}>
              <FaceIcon />
            </Fab>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs className={classes.blueText}>
            <h2>
              <div className={classes.root}>
                <CountUp start={0} end={52} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />%
                    </div>
                  )}
                </CountUp>
              </div>
            </h2>
          </Grid>
          <Grid item xs className={classes.redText}>
            <h2>
              <div className={classes.root}>
                <CountUp start={0} end={44} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />%
                    </div>
                  )}
                </CountUp>
              </div>
            </h2>
          </Grid>
          <Grid item className={classes.purpleText}>
            <h2>
              <div className={classes.root}>
                <CountUp start={0} end={4} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />%
                    </div>
                  )}
                </CountUp>
              </div>
            </h2>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs className={classes.blueText}>
            <h3>Male</h3>
          </Grid>
          <Grid item xs className={classes.redText}>
            <h3>Female</h3>
          </Grid>
          <Grid item className={classes.purpleText}>
            <h3>Other</h3>
          </Grid>
        </Grid>
      </Grid>

      <br />
      <br />
      <br />

      <Box mb={0}>
        <Navigation />
        <br />
        <Copyright />
      </Box>
    </Container>
  );
}

export default SocialProfile;
