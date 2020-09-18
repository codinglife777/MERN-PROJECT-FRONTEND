import React from "react";
import { Link } from "react-router-dom";
import { Fab, Box, Container, CssBaseline, Grid } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Navigation from "../../Design/Navigation";
import Copyright from "../../Design/Copyright";
import Logo1 from "../../Design/Logo1";
import Points from "../Counter/Points";
import Increase from "../Counter/Increase";
import FacebookCount from "../Counter/FacebokCount";
import InstagramCount from "../Counter/InstagramCount";
import LinkedinCount from "../Counter/LinkedinCount";
import TwitterCount from "../Counter/TwitterCount";
import AddIcon from "@material-ui/icons/Add";
import CountUp from "react-countup";
import useStyles from "../../Design/useStyles";


function SocialProfile() {

  const classes = useStyles();
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Grid container direction="column" justify="center" alignItems="center">
        <br />
        <Logo1 />
        <br />
        <Grid item className={classes.blackText}>
          SOCIAL PROFILE
        </Grid>
        <Grid item>
          <Link to="../Profile/Profile">
            <Fab className={classes.purple}>
              <AccountCircleIcon />
            </Fab>
          </Link>
        </Grid>
        <Grid container>
          <Grid item xs className={classes.blueText}>
            <Fab className={classes.blue}>
              <FacebookIcon />
            </Fab>
            <FacebookCount />
          </Grid>
          <Grid item className={classes.purpleText}>
            <Fab className={classes.purple}>
              <InstagramIcon />
            </Fab>
            <InstagramCount />
          </Grid>
        </Grid>
        <Link to="/Resume">
          <Points />
        </Link>
        <Grid container>
          <Grid item xs className={classes.blueLightText}>
            <Fab className={classes.blueLight}>
              <TwitterIcon />
            </Fab>
            <TwitterCount />
          </Grid>
          <Grid item className={classes.blueDarkText}>
            <Fab className={classes.blueDark}>
              <LinkedInIcon />
            </Fab>
            <LinkedinCount />
          </Grid>
        </Grid>
        <Grid item>
          <Fab className={classes.green}>
            <AddIcon />
          </Fab>
          <Increase />
        </Grid>
        <br />
        <Grid item className={classes.blackText}>
          FRIENDS
        </Grid>

        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs className={classes.blueText}>
            <Fab className={classes.blue}>
              <FaceIcon />
            </Fab>
            <h2>
              <div className={classes.root}>
                <CountUp start={0} end={52} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />%
                    </div>
                  )}
                </CountUp>
              </div>
            </h2>
            <h3>Male</h3>
          </Grid>
    
          <Grid item xs className={classes.redText}>
            <Fab className={classes.pink}>
              <FaceIcon />
            </Fab>
            <h2>
              <div className={classes.root}>
                <CountUp start={0} end={44} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />%
                    </div>
                  )}
                </CountUp>
              </div>
            </h2>
            <h3>Female</h3>
          </Grid>
          <Grid item className={classes.purpleText}>
            <Fab className={classes.purple}>
              <FaceIcon />
            </Fab>
            <h2>
              <div className={classes.root}>
                <CountUp start={0} end={4} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />%
                    </div>
                  )}
                </CountUp>
              </div>
            </h2>
            <h3>Other</h3>
          </Grid>
        </Grid>
      </Grid>
      <Box mb={0}>
        <Navigation />
        <Copyright />
      </Box>
    </Container>
  );
}

export default SocialProfile;
