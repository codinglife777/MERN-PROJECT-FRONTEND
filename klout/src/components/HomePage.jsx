import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

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
        <CssBaseline />
        <div className="paper">
        <br/><br/>
          <img className="center" src={process.env.PUBLIC_URL + "/klout.png"} />
          <br/>
          <h2>Measure your Influence</h2>
          <br/><br/>
          <Link to="/homeresume">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="paper"
            >
              Next Step
            </Button>
            <br/><br/>
          </Link>
          <Grid container className="paper">
            <Grid item>
              <Link href="/SignIn" variant="body2">
                {"Already have an account?  here"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }

  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });
  };
}
