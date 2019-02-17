import React, { PureComponent, Fragment } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { MenuItem, Menu, IconButton } from '@material-ui/core';


export default class Account extends PureComponent {
    state = {
        anchorEl: null,
    }
  
    handlePageName = name => this.setState({ pageName : name });
  
    handleMenu = event => this.setState({ anchorEl: event.currentTarget });
  
    handleClose = () =>  this.setState({ anchorEl: null });

    render() {
        const { anchorEl } = this.state;
        const { logout } = this.props;
        const open = Boolean(anchorEl);
        return (
            <Fragment>
                <IconButton
                    aria-owns={open ? 'menu-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                    >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Perfil</MenuItem>
                    <MenuItem onClick={logout}>Sair</MenuItem>
                </Menu>

            </Fragment>
        )
    }
}
