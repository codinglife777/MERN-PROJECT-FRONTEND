import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import TimelineSharpIcon from "@material-ui/icons/TimelineSharp";
import HomeIcon from "@material-ui/icons/Home";
import EmojiEventsSharpIcon from "@material-ui/icons/EmojiEventsSharp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BarChartIcon from "@material-ui/icons/BarChart";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2.4),
      
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
    color: "red",
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Link to="/Resume">&nbsp;&nbsp;&nbsp;
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
    </div>
  );
}
