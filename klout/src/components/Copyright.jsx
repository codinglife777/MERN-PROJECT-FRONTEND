import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";

function Copyright() {
  
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
