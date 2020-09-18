import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab, Grid } from "@material-ui/core";
import TimelineSharpIcon from "@material-ui/icons/TimelineSharp";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BarChartIcon from "@material-ui/icons/BarChart";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1.5),
   
    },
  },

}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
      <Link to="/Resume">
        <Fab color="secondary">
          <HomeIcon  />
        </Fab>
      </Link>
      <Link to="/SocialProfile">
        <Fab Fab color="secondary">
        <BarChartIcon  />
        </Fab>
      </Link>
      <Link to="/Evolution">
        <Fab Fab color="secondary">
       <TimelineSharpIcon  />
        </Fab>
      </Link>
      <Link to="/Profile">
        <Fab Fab color="secondary">
        <AccountCircleIcon  />
        </Fab>
      </Link>
    </Grid>
  );
}
