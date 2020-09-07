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

    fontSize: "medium",
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
        <Grid container >
          <Grid item xs className={classes.greenText}>
            <h2>25k</h2>
          </Grid>
          <Grid item xs className={classes.blueText}>
            <h2>1.0k</h2>
          </Grid>
          <Grid item className={classes.purpleText}>
            <h2>25%</h2>
          </Grid>
        </Grid>
        <Grid container >
          <Grid item xs className={classes.greenText}>
            <h2>Follows</h2>
          </Grid>
          <Grid item xs className={classes.blueText}>
            <h2>Likes</h2>
          </Grid>
          <Grid item className={classes.purpleText}>
            <h2>Rate</h2>
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
