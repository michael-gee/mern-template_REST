import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Icon from './Icon';
import { MENU } from './IconList';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: 'black',
    minHeight: '75px',
  },
  headerImage: {
    height: '75px',
  },
  headerLink: {
    color: 'white',
    textDecoration: 'none',
  },
  navButton: {
    backgroundColor: '#000',
    fontSize: '1.5em',
    padding: '10px 16px',
    margin: '0 3px',
    '&:hover': {
      backgroundColor: '#4d4d4d',
    },
  },
};

const Header = (props) => {
  function renderHeaderBtn(classes) {
    if (props.authenticated) {
      return (
        <Link to="/user-profile" className={classes.headerLink}>
          <Button className={classes.navButton} color="inherit">Dashboard</Button>
        </Link>
      );
    }

    return (
      <Link to="/sign-in" className={classes.headerLink}>
        <Button className={classes.navButton} color="inherit">Sign In</Button>
      </Link>
    );
  }

  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.flex} variant="title" color="inherit">
            <Link to="/" className={classes.headerLink}>
              <h3>MERN Template REST</h3>
            </Link>
          </Typography>
          <Hidden xsDown>
            {renderHeaderBtn(classes)}
          </Hidden>

          <Hidden smUp>
            <IconButton color="inherit" aria-label="Menu">
              <Icon icon={MENU} />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);