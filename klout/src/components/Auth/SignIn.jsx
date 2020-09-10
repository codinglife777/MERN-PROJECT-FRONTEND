import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Logo from "../Design/Logo";
import Copyright from "../Design/Copyright";
import AuthService from "./AuthService";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { uername: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.username;
    const password = this.state.password;

    this.service
      .login(email, password)
      .then((response) => {
        this.setState({
          username: "",
          password: "",
        });
        this.props.getUser(response);
        this.props.history.push(`/profile`);
      })
      .catch((error) => console.log("the error:", error));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <div className={this.useStyles.paper}>
          <Logo />

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={this.useStyles.form}
            noValidate
            onSubmit={this.handleSubmit}
          >
            <TextField
              className="input-form"
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
              className="input-form"
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
              className={this.useStyles.submit}
            >
              Sign In
            </Button>

            <Link href="/HomeResume"> Sign In </Link>

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
          
        </div>
        <br />
        <br />
        <Box mb={0}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}
