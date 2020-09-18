import { makeStyles } from '@material-ui/core';
import { blue, green, purple, pink, red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({

  root: {
    "& > *": {
      margin: theme.spacing(2.4),
      
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    fontSize: "70px",
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
    color: "red",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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

    fontSize: "x-large",
  },
  pink: {
    color: "#fff",
    backgroundColor: pink[500],
  },
  pinkText: {
    color: pink[500],
    fontSize: "x-large",
  },
  blue: {
    color: "#fff",
    backgroundColor: blue[600],
  },
  blueText: {
    color: blue[600],
    fontSize: "x-large",
  },
  blueLight: {
    color: "#fff",
    backgroundColor: blue[300],
  },
  blueLightText: {
    color: blue[300],
    fontSize: "x-large",
  },
  blueDark: {
    color: "#fff",
    backgroundColor: blue[800],
  },
  blueDarkText: {
    color: blue[800],
    fontSize: "x-large",
  },
  redText: {
    color: red[500],
    fontSize: "x-large",
  },
  red: {
    color: "#fff",
    backgroundColor: red[500],
  },

}));

export default useStyles;
