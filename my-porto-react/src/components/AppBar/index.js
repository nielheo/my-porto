import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const options = [
  { text: 'Fund Type', url: '/fundtypes' },
  { text: 'Fund Product', url: '/fundproducts' },
  { text: 'Transaction', url: '/transactions' },
  { text: 'Portfolio', url:'/portfolio' }
];

const ITEM_HEIGHT = 48;

class ButtonAppBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
    };
  }

  handleClick = event => {
    console.log(event)
    this.setState({ anchorEl: event.currentTarget });
  };

  _onMenuClicked = (url) => {
    this.setState({ anchorEl: null },
      this.props.history.push(url)
    );
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {

    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div>
              <IconButton
                aria-label="More"
                aria-owns={anchorEl ? 'long-menu' : null}
                aria-haspopup="true"
                onClick={this.handleClick}
                color="inherit"
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: 200,
                  },
                }}
              >
                {options.map(option => (
                  <MenuItem key={option.url} onClick={() => this._onMenuClicked(option.url)} >{option.text}</MenuItem>
                ))}
              </Menu>
            </div>
            
            <Typography variant="title" color="inherit" className={classes.flex}>
              My Portofolio
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
}
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(ButtonAppBar));