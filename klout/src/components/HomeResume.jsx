import React from "react";
import { Avatar, Box, Container, CssBaseline, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green, blue, yellow, purple } from "@material-ui/core/colors";
import FaceIcon from "@material-ui/icons/Face";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Points from "./Points";
import Navigation from "./Navigation";
import Copyright from "./Copyright";
import { Link } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Logo1 from "./Logo1";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
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
  black: {
    color: "#fff",
    backgroundColor: "black",
  },
  blackText: {
    color: "black",

    fontSize: "x-large",
  },
  purple: {
    color: "#fff",
    backgroundColor: purple[500],
  },
  purpleText: {
    color: purple[500],

    fontSize: "x-large",
  },
}));

export default function HomeResume() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Grid container direction="column" justify="center" alignItems="center">
        <br />
        <Logo1/>
        <br />
        <Grid item xs className={classes.blackText}>
          RESUME
        </Grid>
        <br />
        <br />
        <Grid item>
          <Link to="/profile">
            <Avatar className={classes.purple}>
              <AccountCircleIcon />
            </Avatar>
          </Link>
        </Grid>

        <br />
        <br />
        <Grid>
          <Grid item className={classes.blueText}>
            CHUS SANTANA
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container>
          <Grid item xs className={classes.greenText}>
            4.5
          </Grid>
          <Grid item>
            <Avatar className={classes.green}>
              <ArrowUpwardIcon />
            </Avatar>
          </Grid>
        </Grid>
        <br />
        <br />

        <Points />
        <br />
        <br />

        <br />
        <Grid container className={classes.purpleText}>
          <Grid item xs>
            <h1>25k</h1>
          </Grid>
          <Grid item xs>
            <h1>1.0k</h1>
          </Grid>
          <Grid item>
            <h1>25%</h1>
          </Grid>
        </Grid>
        <Grid container className={classes.purpleText}>
          <Grid item xs>
            <h1>Follows</h1>
          </Grid>
          <Grid item xs>
            <h1>Likes</h1>
          </Grid>
          <Grid item>
            <h1>Rate</h1>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <br />

      <br />
      <br />
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
