import React, { PureComponent } from 'react';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Button, withStyles } from '@material-ui/core';
import { TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import { styles } from './styles';
import { changeValue, forgotte_password } from '../../store/actions/auth';

class Signup extends PureComponent {
  render(){
    const { classes, email, changeValue, forgotte_password } = this.props;
    return (
            <ValidatorForm
              ref="form"
              className={classes.form}
              onSubmit={() => forgotte_password(email)}
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

              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                type="submit"
              >
                Enviar Email
              </Button>
              <div style={{ display : 'flex'}}>
                <Link to={{ pathname: '/'}}
                  className={classes.submitSeg}
                >
                  <Button
                    fullWidth
                  >
                    Voltar
                  </Button>
                </Link>
                <Link to={{ pathname: '/forgotte-passwordr'}}
                    className={classes.submitSeg}
                >
                  <Button
                    fullWidth
                  >
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
  password :  state[reducer].get('password')
})

const mapDispatchToProps = dispatch => ({
  changeValue : bindActionCreators(changeValue, dispatch),
  forgotte_password : bindActionCreators(forgotte_password, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps )(withStyles(styles)(Signup));