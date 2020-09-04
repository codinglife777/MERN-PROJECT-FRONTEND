import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import { Box, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Logo from "./Logo";
import Copyright from "./Copyright";

export default class HomePage extends Component {
  state = {
    user: {},
    error: null,
    authenticated: false,
  };

  componentDidMount() {
    fetch("http://localhost:4000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then((responseJson) => {
        this.setState({
          authenticated: true,
          user: responseJson.user,
        });
      })
      .catch((error) => {
        this.setState({
          authenticated: false,
          error: "Failed to authenticate user",
        });
      });
  }

  render() {
    const { authenticated } = this.state;

    return (
      
      <Container component="main" maxWidth="xs">
      <br />
          <br /><br />
          
        <CssBaseline />
        <Grid container direction="column" justify="center" alignItems="center">
          <Logo/>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Link to="/SignUp">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className=""
            >
              Next Step
            </Button>
          </Link>
          <br />
          <br />
          <Link href="/SignIn" variant="body2">
            {"Already have an account?  here"}
          </Link>
        </Grid>
        <br /><br />
        <Box mt={0}>
        <Copyright />
      </Box>
      </Container>
    );
  }

  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });
  };
}
