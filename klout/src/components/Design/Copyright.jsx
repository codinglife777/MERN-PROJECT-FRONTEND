import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Box, Grid } from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Copyright() {
  
  return (
    <Box>
    
      
      <Grid container direction="column" justify="center" alignItems="center">
      <Typography variant="body2" color="textSecondary" align="center">
      <Grid item xs>
      <Link color="inherit" to="/LogOut"><ExitToAppIcon /></Link>
      </Grid>
      <br/>
      <br/>
      <Grid item>
      {"Copyright © "}
        <Link color="inherit" to="/">
          KLOUT
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Grid>
      </Typography>
      </Grid>
   
    </Box>
  );
}

export default Copyright;
