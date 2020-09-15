import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import { Box, Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Logo from "../Design/Logo";
import Copyright from "../Design/Copyright";
import Slogan from "../Design/Slogan";

function HomePage() {
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
        <Link href="/SignUp">
          <Button fullWidth variant="contained" color="secondary" className="">
            Start
          </Button>
        </Link>
        <br />
        <br />
        <Link href="/Login" variant="body2">
          {"Already have an account?  here"}
        </Link>
      </Grid>
      <br />
      <br />
      <Box mt={0}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default HomePage;
