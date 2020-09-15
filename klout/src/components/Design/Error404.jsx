import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Navigation from "./Navigation";
import Logo from "./Logo";
import Copyright from "./Copyright";
import Slogan from "./Slogan";

function Error404() {
  return (
    <Container component="main" maxWidth="xs">
      <br />
      <br />
      <br />

      <CssBaseline />
      <Grid container direction="column" justify="center" alignItems="center">
        <Logo />
        <Slogan />
        <br />
        <br />
        <br />
        <br />
    
          <h1> Oops! </h1>
          <img
            className="error-page-img"
            style={{ margin: " 8% 0" }}
            src={process.env.PUBLIC_URL + "/error404.png"}
            width="100%"
            alt="auth-error"
          />
          <h2>
            We can't seem to find the adress you're looking for
          </h2>
         
      </Grid>
      <br />
      <br />
      <Box mt={0}>
      <Navigation />
        <br />
        <Copyright />
      </Box>
    </Container>
  );
}

export default Error404;
