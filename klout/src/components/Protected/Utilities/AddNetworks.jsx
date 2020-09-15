import { Container, Grid, CssBaseline, Box, Fab } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import {
  FacebookLoginButton,
  TwitterLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
} from "react-social-login-buttons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import { green, blue, pink, red, purple } from "@material-ui/core/colors";
import Logo1 from "../../Design/Logo1";
import Navigation from "../../Design/Navigation";
import Copyright from "../../Design/Copyright";

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

function AddNetworks() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Grid container direction="column" justify="center" alignItems="center">
        <br />
        <Logo1 />
        <br />
        <br />
        <Link to="/profile">
          <Fab className={classes.purple}>
            <AccountCircleIcon />
          </Fab>
        </Link>
        <br />
        <br />
        <Grid item className={classes.blackText}>
          Add Your Networks
          <br />
          <br />
          <Link to="/homeresume">
            <FacebookLoginButton>
              <span>Add Facebook</span>
            </FacebookLoginButton>
          </Link>
          <TwitterLoginButton>
            <span>Add Twitter</span>
          </TwitterLoginButton>
          <InstagramLoginButton>
            <span>Add Instagram</span>
          </InstagramLoginButton>
          <LinkedInLoginButton>
            <span>Add Linkedin</span>
          </LinkedInLoginButton>
        </Grid>
      </Grid>
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

export default AddNetworks;
