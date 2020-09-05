import { Container, Grid, CssBaseline, Box } from "@material-ui/core";
import React from "react";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  TwitterLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
} from "react-social-login-buttons";
import { makeStyles } from "@material-ui/core/styles";
import { green, blue, pink, red, purple } from "@material-ui/core/colors";
import Logo from "./Logo";
import Copyright from "./Copyright";

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
      <br />
      <br />
      <br />

      <CssBaseline />
      <Grid container direction="column" justify="center" alignItems="center">
        <Logo />
        <br />
        <br />
        <Grid item className={classes.blackText}>
          Add Your Networks
        
        <br /><br />
        
          <FacebookLoginButton onClick={() => alert("Hello")}>
            <span>Add Facebook</span>
          </FacebookLoginButton>
          <TwitterLoginButton onClick={() => alert("Hello")}>
            <span>Add Twitter</span>
          </TwitterLoginButton>
          <InstagramLoginButton onClick={() => alert("Hello")}>
            <span>Add Instagram</span>
          </InstagramLoginButton>
          <LinkedInLoginButton onClick={() => alert("Hello")}>
            <span>Add Linkedin</span>
          </LinkedInLoginButton>
          <GoogleLoginButton onClick={() => alert("Hello")}>
            <span>Add Google</span>
          </GoogleLoginButton>
        </Grid>
      </Grid>
      <br />
      <br />
      <Box mb={0}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default AddNetworks;
