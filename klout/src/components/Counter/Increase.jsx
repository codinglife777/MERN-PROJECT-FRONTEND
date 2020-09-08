import { Avatar, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import CountUp from "react-countup";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { blue, green, purple, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  blue: {
    color: "#fff",
    backgroundColor: blue[500],
  },
  blueText: {
    color: blue[500],

    fontSize: "x-large",
  },
  red: {
    color: "#fff",
    backgroundColor: red[500],
  },
  redText: {
    color: red[500],

    fontSize: "x-large",
  },
  greenText: {
    color: green[500],

    fontSize: "x-large",
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
  black: {
    color: "#fff",
    backgroundColor: "black",
  },
  blackText: {
    color: "black",

    fontSize: "x-large",
  },
  purple: {
    color: "#fff",
    backgroundColor: purple[500],
  },
  purpleText: {
    color: purple[500],

    fontSize: "medium",
  },
}));
function Increase() {
  const classes = useStyles();
  return (
    <div>
      <CountUp start={0} end={4.5} delay={0} decimals={2}>
        {({ countUpRef }) => (
          <Grid item className={classes.greenText}>
            <span ref={countUpRef} />%
          </Grid>
        )}
      </CountUp>
    </div>
  );
}

export default Increase;
