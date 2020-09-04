import React from "react";
import { Avatar, Box, Container, CssBaseline, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green, blue } from "@material-ui/core/colors";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import FaceIcon from "@material-ui/icons/Face";
import Points from "./Points";
import Navigation from "./Navigation";
import Copyright from "./Copyright";

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
    backgroundColor: 'black',
  },
  blackText: {
    color: 'black',

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
        <br />
        <Grid item className={classes.blackText}>
          RESUME
        </Grid>

        <br />
        <Grid container>
          <Grid item xs >
            <Avatar className={classes.blue}>
              <FaceIcon />
            </Avatar>
          </Grid>
          <Grid item className={classes.blueText}>CHUS SANTANA</Grid>
        </Grid>

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
        <Grid container>
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
        <Grid container>
          <Grid item xs>
            <h1>Follows</h1>
          </Grid>
          <Grid item xs>
            <h1>Friends</h1>
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Navigation />
      <br />
      <br />
      <Box mb={0}>
        <Copyright />
      </Box>
    </Container>
  );
}
