import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import TimelineSharpIcon from '@material-ui/icons/TimelineSharp';
import PostAddIcon from '@material-ui/icons/PostAdd';
import HomeIcon from '@material-ui/icons/Home';
import EmojiEventsSharpIcon from '@material-ui/icons/EmojiEventsSharp';
import BarChartIcon from '@material-ui/icons/BarChart';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
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
        <PostAddIcon className={classes.extendedIcon} />
        Post
      </Fab>
      <Fab variant="success">
        <BarChartIcon className={classes.extendedIcon} />
        Social
      </Fab>
      <Fab variant="secondary">
        <HomeIcon className={classes.extendedIcon} />
        Home
      </Fab>
      <Fab variant="alert">
        <TimelineSharpIcon className={classes.extendedIcon} />
        Evolution
      </Fab>
      <Fab variant="alert">
        <EmojiEventsSharpIcon className={classes.extendedIcon} />
        Navigate
      </Fab>
    </div>
  );
}
