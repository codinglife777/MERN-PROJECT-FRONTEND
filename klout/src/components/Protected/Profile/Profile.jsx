import React from "react";
import { Box, Container, CssBaseline, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardProfile from "./CardProfile";
import Navigation from "../../Design/Navigation";
import Copyright from "../../Design/Copyright";
import Logo1 from "../../Design/Logo1";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
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

function Profile() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Grid container direction="column" justify="center" alignItems="center">
        <Logo1 />
        <br />
        <br />
        <Grid item className={classes.blackText}>
          PROFILE
        </Grid>
        <br />
        <CardProfile />
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

export default Profile;
