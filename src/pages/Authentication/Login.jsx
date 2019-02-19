import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from 'react-router-dom';
import { Button, FormControlLabel, Checkbox, withStyles } from '@material-ui/core';
import { TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import { styles } from './styles';
import { changeValue, login } from '../../store/actions/auth';

class SignIn extends PureComponent {
  render(){
    const { classes, email, password, redirectToReferrer, changeValue, login } = this.props;
    if (redirectToReferrer)
      return <Redirect to={{ pathname: '/main' }}/>
    else
      return (
            <ValidatorForm
              ref="form"
              className={classes.form}
              onSubmit={() => login(email, password)}
              onError={errors => console.log(errors)}
            >
              <TextValidator margin="normal" 
                label ='Email'
                id="email"
                name="email" 
                autoComplete="email" 
                autoFocus 
                fullWidth
                required
                onChange={changeValue}
                value={email}
                validators={['required', 'isEmail']}
                errorMessages={['Campo requerido', 'Email invalido']}
              />
              
              <TextValidator margin="normal" 
                label ='Senha'
                id="password"
                name="password"
                type="password"  
                autoComplete="current-password"
                fullWidth
                required
                validators={['required']}
                errorMessages={['Campo requerido']}
                onChange={changeValue}
                value={password}
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Lembra-me"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                type="submit"
              >
                Entrar
              </Button>
              <div style={{ display : 'flex'}}>
                <Link to={{ pathname: '/auth/register'}} className={classes.submitSeg} >
                  <Button fullWidth >
                    Registrar-se
                  </Button>
                </Link>
                <Link to={{ pathname: '/auth/forgotte-password'}} className={classes.submitSeg} >
                  <Button fullWidth >
                    Esqueci a senha
                  </Button>
                </Link>
              </div>
            </ValidatorForm>
      );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

const reducer = 'auth';
const mapStateToProps = state => ({
  force: state,
  email : state[reducer].get('email'),
  password :  state[reducer].get('password'),
  redirectToReferrer : state[reducer].get('redirectToReferrer')
})

const mapDispatchToProps = dispatch => ({
  changeValue : bindActionCreators(changeValue, dispatch),
  login : bindActionCreators(login, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps )(withStyles(styles)(SignIn));