import React, { PureComponent } from 'react';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import { Button, withStyles } from '@material-ui/core';
import { TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import { styles } from './styles';
import { changeValue, singup } from '../../store/actions/auth';

class Signup extends PureComponent {
  render(){
    const { classes, email, password, username, redirectToReferrer, changeValue, singup } = this.props;
    if (redirectToReferrer)
      return <Redirect to={{ pathname: '/main', state: { name: 'Agenda' } }}/>
    else
      return (
              <ValidatorForm
                ref="form"
                className={classes.form}
                onSubmit={() => singup(username, email, password)}
                onError={errors => console.log(errors)}
              >
                <TextValidator margin="normal" 
                  label ='Name'
                  id="username"
                  name="username" 
                  autoComplete="name" 
                  autoFocus 
                  fullWidth
                  required
                  onChange={changeValue}
                  value={username}
                  errorMessages={['Campo requerido', 'Email invalido']}
                />
                
                <TextValidator margin="normal" 
                  label ='Email'
                  id="email"
                  name="email" 
                  autoComplete="email"
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

                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  type="submit"
                >
                  Registrar
                </Button>
                <div style={{ display : 'flex'}}>
                  <Link to={{ pathname: '/auth'}} className={classes.submitSeg} >
                    <Button fullWidth >
                      Voltar
                    </Button>
                  </Link>
                  <Link to={{ pathname: '/auth/forgotte-password'}} className={classes.submitSeg}>
                    <Button fullWidth >
                      Esqueci a senha
                    </Button>
                  </Link>
                </div>
              </ValidatorForm>
        );
  }
}

const reducer = 'auth';
const mapStateToProps = state => ({
  force: state,
  username : state[reducer].get('username'),
  email : state[reducer].get('email'),
  password :  state[reducer].get('password'),
  redirectToReferrer : state[reducer].get('redirectToReferrer')
})

const mapDispatchToProps = dispatch => ({
  changeValue : bindActionCreators(changeValue, dispatch),
  singup : bindActionCreators(singup, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps )(withStyles(styles)(Signup));