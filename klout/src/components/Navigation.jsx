import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import TimelineSharpIcon from "@material-ui/icons/TimelineSharp";
import HomeIcon from "@material-ui/icons/Home";
import EmojiEventsSharpIcon from "@material-ui/icons/EmojiEventsSharp";
import BarChartIcon from "@material-ui/icons/BarChart";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
    color: "blue",
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
      <Link to="/HomeResume">
        <Fab variant="secondary">
          <HomeIcon className={classes.extendedIcon} />
        </Fab>
      </Link>
      <Link to="/SocialProfile">
        <Fab variant="success">
          <BarChartIcon className={classes.extendedIcon} />
        </Fab>
      </Link>
      <Link to="/Evolution">
        <Fab variant="alert">
          <TimelineSharpIcon className={classes.extendedIcon} />
        </Fab>
      </Link>
      <Link to="/Ranking">
        <Fab variant="alert">
          <EmojiEventsSharpIcon className={classes.extendedIcon} />
        </Fab>
      </Link>
    </div>
  );
}
