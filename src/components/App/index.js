import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Button from 'material-ui/Button';

import Code from '../Code';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  container: {
    display: 'flex',
    boxAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  center: {
    textAlign: 'center'
  }
});

const App = ({ classes, selectCode, code, onChangeCode }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.flex}>
          Title
        </Typography>
      </Toolbar>
    </AppBar>
    <div className={classes.container}>
      <div className={classes.center}>
        <Code
          value={code}
          placeholder="Enter your code"
          name="code"
          onClick={selectCode}
          onChange={onChangeCode}
        />
        <Button variant="raised" color="primary" onClick={selectCode}>
          Select Code
        </Button>
      </div>
    </div>
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
  code: PropTypes.string,
  selectCode: PropTypes.func,
  onChangeCode: PropTypes.func
};

export default withStyles(styles)(App);
