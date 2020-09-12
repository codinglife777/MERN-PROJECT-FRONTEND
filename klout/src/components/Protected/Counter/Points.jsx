import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { pink} from "@material-ui/core/colors";
import CountUp from "react-countup";
import { Fab } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    textDecoration: "none",
    
    "& > *": {
      margin: theme.spacing(1),
    },
    

    
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    fontSize: "80px",
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    
  },
}));

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
