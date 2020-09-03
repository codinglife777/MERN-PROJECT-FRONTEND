import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab variant="primary">
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/HomeResume"
        >
          Next Step
        </Link>
        <SkipNextIcon className={classes.extendedIcon} />
      </Fab>
    </div>
  );
}
