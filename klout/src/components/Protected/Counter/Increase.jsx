
import React from "react";
import CountUp from "react-countup";
import { Grid } from "@material-ui/core";
import useStyles from "../../Design/useStyles";


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
