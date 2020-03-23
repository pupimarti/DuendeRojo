import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
    width: '100%',

  },
  content:{
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
  }
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <CircularProgress className={classes.progress} color="inherit" />
      Cargando...
    </div>
  );
}