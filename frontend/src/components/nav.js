import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" href='/home/'>
            Home
          </Button>
          <Button color="inherit" href='/user/logout'>Logout</Button>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
      <Grid style={{height: '5%'}}>
      </Grid>
    </div>
  );
}