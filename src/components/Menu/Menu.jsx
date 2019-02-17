import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { withStyles, Toolbar, AppBar, Button, Avatar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { styles } from './styles';
import Account from './Account';

class NavBar extends PureComponent {
  render() {
    const { classes, redirectToReferrer, logout, logo, menu } = this.props;
    if(!redirectToReferrer)
      return  <Redirect to={{ pathname: '/'}}/> 
    return (
        <Fragment>
            <AppBar position="sticky" className={classes.appBar}>
                <Toolbar>
                    <Avatar src={logo} className={classes.icon} />
                    <div style={{flexGrow: 1}} />
                    <div>
                        { 
                            window.screen.width > 460 ?
                                <Fragment>
                                    {menu.map( item => 
                                        <NavLink key={item.id} style={{ textDecoration : 'none'}} to={{ pathname : `/main/${item.path}`,  state: { name: item.label }}}>
                                            <Button className={classes.buttonNavigation} >
                                                {item.label}
                                            </Button>
                                        </NavLink>
                                    )}
                                    <Account 
                                        logout={logout}
                                    />
                                    
                                </Fragment>
                            :   <Fragment>
                                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                        <MenuIcon />
                                    </IconButton>      
                                </Fragment>
                        
                        }
                        
                    </div>
                </Toolbar>
            </AppBar>   
        </Fragment>
    );
  }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
    redirectToReferrer : PropTypes.bool.isRequired,
    menu : PropTypes.array.isRequired,
    logout : PropTypes.func.isRequired,
    logo : PropTypes.any.isRequired,
};

export default withStyles(styles)(NavBar);