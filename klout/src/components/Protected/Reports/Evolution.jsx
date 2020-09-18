import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, CssBaseline, Fab, Grid } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Navigation from "../../Design/Navigation";
import Copyright from "../../Design/Copyright";
import Logo1 from "../../Design/Logo1";
import ChartRange from "../Charts/ChartRange";
import useStyles from "../../Design/useStyles";

export default function Evolution() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Grid container direction="column" justify="center" alignItems="center">
        <br />
        <Logo1 />
        <br />
        <Grid item xs className={classes.blackText}>
          EVOLUTION
        </Grid>
        <br />
        <br />
        <Grid item>
          <Link to="/profile">
            <Fab className={classes.purple}>
              <AccountCircleIcon />
            </Fab>
          </Link>
        </Grid>
        <br />
        <Grid>
          <Grid item className={classes.blueText}>
            USER
          </Grid>
        </Grid>
       
        <br />
        <ChartRange/>
      </Grid>
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
