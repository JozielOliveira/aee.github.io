import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, AppBar, Toolbar, Avatar, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Redirect } from 'react-router-dom';
import NavBarRight from './NavBarMobile';
import Account from './Account';
import { styles } from './styles';
import Menu from './NavBar';

class PersistentDrawerRight extends Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  
  render() {
    const { classes, redirectToReferrer, theme, logout, logo, menu } = this.props;
    const { open } = this.state;
    if(!redirectToReferrer)
        return  <Redirect to={{ pathname: '/'}}/> 
    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={classNames(classes.mobile.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <Avatar src={logo} className={classes.icon} />
            <div style={{flexGrow: 1}} />
            <div>
                { 
                    document.body.clientWidth > 520 ?
                        <Fragment>
                          <Menu menu={menu} Component={ item =>
                            <Button className={classes.buttonNavigation} >
                              {item.label}
                            </Button>
                          }/>
                            <Account 
                                logout={logout}
                            />
                            
                        </Fragment>
                    :   <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                }            
            </div>
          </Toolbar>
        </AppBar>
        <NavBarRight logout={logout} theme={theme} classes={classes} open={open} close={this.handleDrawerClose} menu={menu}/>
      </div>
    );
  }
}

PersistentDrawerRight.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  redirectToReferrer : PropTypes.bool.isRequired,
  menu : PropTypes.array.isRequired,
  logout : PropTypes.func.isRequired,
  logo : PropTypes.any.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerRight);
