import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui-next/styles';
import AppBar from 'material-ui-next/AppBar';
import Drawer from 'material-ui-next/Drawer';
import { MenuItem } from 'material-ui-next/Menu';
import Button from 'material-ui-next/Button';
import Toolbar from 'material-ui-next/Toolbar';
import Typography from 'material-ui-next/Typography';

const styles = {
  header: {
   height: '64px',
   marginBottom: '25px'
  },
  title: {
    flex: 1,
    color: 'white'
  },
  headerLink: {
    textDecoration: 'none',
    margin: '0 15px'
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        <AppBar color="primary">
          <Toolbar>
            <Typography variant="title" className={classes.title}>
              Material UI MERN Template
            </Typography>

            <Link to="/" className={classes.headerLink}>
              <Button 
                variant="raised" 
                className={classes.authBtn} 
                label="Home"
              > Homepage</Button>
            </Link>
            <Link to="/secondary" className={classes.headerLink}>
              <Button 
                variant="raised" 
                className={classes.authBtn}
                label="Secondary"
              >Secondary</Button>
            </Link>
          </Toolbar>
        </AppBar>

        <Drawer
          open={this.state.open}
          docked={false}
        >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(Header);