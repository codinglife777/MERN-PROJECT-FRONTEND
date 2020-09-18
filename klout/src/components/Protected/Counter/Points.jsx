import React from "react";
import CountUp from "react-countup";
import { Fab } from "@material-ui/core";
import useStyles from "../../Design/useStyles";


export default function Points() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab alt="Remy Sharp" className={classes.large}>
        <CountUp start={0} end={89} delay={0}>
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
      </Fab>
    </div>
  );
}
