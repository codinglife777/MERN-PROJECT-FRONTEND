import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { spacing } from '@material-ui/system';
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bottom: {
    marginBottom: 0,
    
    
  },

}));
function Copyright() {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" to="/">
          KLOUT
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}

export default Copyright;
