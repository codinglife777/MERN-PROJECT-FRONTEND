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
      margin: theme.spacing(1.5),
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
      <Link to="/HomeResume">
        <Fab variant="secondary">
          &nbsp;&nbsp;<HomeIcon className={classes.extendedIcon} />
        </Fab>
      </Link>
      <Link to="/SocialProfile">
        <Fab variant="success">
        &nbsp;&nbsp;<BarChartIcon className={classes.extendedIcon} />
        </Fab>
      </Link>
      <Link to="/Evolution">
        <Fab variant="alert">
        &nbsp;&nbsp;<TimelineSharpIcon className={classes.extendedIcon} />
        </Fab>
      </Link>
      <Link to="/Ranking">
        <Fab variant="alert">
        &nbsp;&nbsp; <EmojiEventsSharpIcon className={classes.extendedIcon} />
        </Fab>
      </Link>
    </div>
  );
}
