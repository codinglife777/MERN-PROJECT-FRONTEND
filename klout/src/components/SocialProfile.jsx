import React from "react";
import { Avatar, Box, Container, CssBaseline, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green, blue, pink, red, purple } from "@material-ui/core/colors";
import FaceIcon from "@material-ui/icons/Face";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Points from "./Points";
import Navigation from "./Navigation";
import Copyright from "./Copyright";
import { Link } from "react-router-dom";
import Logo1 from "./Logo1";

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
    backgroundColor: blue[500],
  },
  blueText: {
    color: blue[500],

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
          <Link to="/profile">
            <Avatar className={classes.purple}>
              <AccountCircleIcon />
            </Avatar>
          </Link>
        </Grid>
        <br />
        <Grid container>
          <Grid item xs className={classes.blueText}>
            <Avatar className={classes.blue}>
              <FacebookIcon />
            </Avatar>
            30%
          </Grid>
          <Grid item className={classes.purpleText}>
            <Avatar className={classes.purple}>
              <InstagramIcon />
            </Avatar>
            18%
          </Grid>
        </Grid>

        <Points />

        <Grid container>
          <Grid item xs className={classes.redText}>
            <Avatar className={classes.red}>
              <YouTubeIcon />
            </Avatar>
            45%
          </Grid>
          <Grid item className={classes.blueText}>
            <Avatar className={classes.blue}>
              <LinkedInIcon />
            </Avatar>
            25%
          </Grid>
        </Grid>
        <Grid item className={classes.greenText}>
          <Avatar className={classes.green}>+</Avatar>
          66%
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
            <Avatar className={classes.blue}>
              <FaceIcon />
            </Avatar>
          </Grid>
          <Grid item xs>
            <Avatar className={classes.pink}>
              <FaceIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <Avatar className={classes.purple}>
              <FaceIcon />
            </Avatar>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs className={classes.blueText}>
            <h2>52%</h2>
          </Grid>
          <Grid item xs className={classes.redText}>
            <h2>42%</h2>
          </Grid>
          <Grid item className={classes.purpleText}>
            <h2>6%</h2>
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
