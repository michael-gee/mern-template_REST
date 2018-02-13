import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    return (
      <header className="header">
        <AppBar
          id="header-toolbar"
          title={<Link to="/" id="header-title">
          <h1>{this.props.title}</h1>
          </Link>}
          showMenuIconButton={false} 
        >
          <Link to="/">
            <RaisedButton className="auth-btn" label="Home" />
          </Link>
          <Link to="/secondary">
            <RaisedButton className="auth-btn" label="Secondary" />
          </Link>
        </AppBar>

        <Drawer
          open={this.state.open}
          docked={false}
        >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </header>
    );
  }
}

export default Header;