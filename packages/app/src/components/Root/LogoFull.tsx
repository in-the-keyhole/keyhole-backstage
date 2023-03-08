import React from 'react';
import { makeStyles } from '@material-ui/core';
import MyCustomLogoFull from './logo/white-logo.png';

const useStyles = makeStyles({
  size: {
    width: 'auto',
    height: 70,
  }
});

const LogoFull = () => {
  const classes = useStyles();
  return <img className={classes.size} alt="logo" src={MyCustomLogoFull} />;
};

export default LogoFull;