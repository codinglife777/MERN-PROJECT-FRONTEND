import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Logo from "../../Design/Logo";
import Slogan from "../../Design/Slogan";
import Copyright from "../../Design/Copyright";
import AuthService from "./AuthService";
import { Redirect } from "react-router-dom";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.service = new AuthService();
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service
      .login(username, password)
      .then((response) => {
        this.setState({
          username: "",
          password: "",
        });
        this.props.getUser(response);
        this.props.history.push("/AddNetworks");
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  useStyles = makeStyles((theme) => ({
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to="/HomeResume" />;
    } else {
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Logo />
            <Slogan />

            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form
              className={this.useStyles.form}
              onSubmit={this.handleFormSubmit}
            >
            
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete=""
                autoFocus
                value={this.state.username}
                onChange={(e) => this.handleChange(e)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete=""
                value={this.state.password}
                onChange={(e) => this.handleChange(e)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <br />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                value="Login"
                className={this.useStyles.submit}
              >
                Sign In
              </Button>
              <br />
              <br />
              <Grid container>
                <Grid item xs>
                  <Link href="/" variant="body2">
                    {"Return to Home"}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/SignUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <br />
          <br />
          <Box mb={0}>
            <Copyright />
          </Box>
        </Container>
      );
    }
  }
}
