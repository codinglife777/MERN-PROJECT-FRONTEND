import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Box, Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Logo from "../Design/Logo";
import Copyright from "../Design/Copyright";
import Slogan from "../Design/Slogan";

function Home(props) {
  return (
    <Container component="main" maxWidth="xs">
      <br />
      <br />
      <br />
      <CssBaseline />
      <Grid container direction="column" justify="center" alignItems="center">
        <Logo />
        <Slogan/>
        <br />
        <br />
        <br />
        <br />
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          href="/SignUp"
        >
          Sign up
        </Button>
        <br />
        <br />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          href="/LogIn"
        >
          Log IN
        </Button>
        <br />
        <br />
      </Grid>
      <br />
      <br />
      <Box mt={0}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Home;
