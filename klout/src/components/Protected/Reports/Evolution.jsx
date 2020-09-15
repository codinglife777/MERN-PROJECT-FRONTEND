import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, CssBaseline, Fab, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green, blue, purple } from "@material-ui/core/colors";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Navigation from "../../Design/Navigation";
import Copyright from "../../Design/Copyright";
import Logo1 from "../../Design/Logo1";
import ChartRange from "../Charts/ChartRange";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      textDecoration: "none",
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

export default function Evolution() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Grid container direction="column" justify="center" alignItems="center">
        <br />
        <Logo1 />
        <br />
        <Grid item xs className={classes.blackText}>
          EVOLUTION
        </Grid>
        <br />
        <br />
        <Grid item>
          <Link to="/profile">
            <Fab className={classes.purple}>
              <AccountCircleIcon />
            </Fab>
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
        <ChartRange/>
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
