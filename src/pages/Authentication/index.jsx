import React, { PureComponent  } from 'react';
import { Route, Switch } from 'react-router-dom';
import { 
  Avatar, CssBaseline,
  Paper, withStyles
 } from '@material-ui/core';
import { styles } from './styles';
import logo from '../../assets/logo.png';

// Pages
import Login from  './Login'
import Singup from  './Singup'
import ForgottePassword from  './ForgottePassword'
import ResetPassword from  './ResetPassword'

class Signup extends PureComponent {
  render(){
    const { classes } = this.props;
      return (
        <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
              <Avatar src={logo} className={classes.avatar}/>
                <Switch>
                    <Route exact path="/auth" component={Login}/>
                    <Route path="/auth/register" component={Singup}/>
                    <Route exact path="/auth/forgotte-password" component={ForgottePassword}/>
                    <Route path="/auth/reset-password" component={ResetPassword}/>
                </Switch>
            </Paper>
        </main>
      );
  }
}

export default withStyles(styles)(Signup);