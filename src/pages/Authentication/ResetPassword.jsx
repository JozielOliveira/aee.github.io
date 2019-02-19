import React, { PureComponent } from 'react';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { Button, withStyles } from '@material-ui/core';
import { TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import { styles } from './styles';
import { changeValue, reset_password } from '../../store/actions/auth';

class Signup extends PureComponent {
  render(){
    const { classes, code, password, passwordConfirmation, redirectToReferrer, changeValue, reset_password } = this.props;
    if (redirectToReferrer)
      return <Redirect to={{ pathname: '/main', state: { name: 'Agenda' } }}/>
    else
      return (
            <ValidatorForm
              ref="form"
              className={classes.form}
              onSubmit={() => reset_password(code, password, passwordConfirmation)}
              onError={errors => console.log(errors)}
            > 
              <TextValidator margin="normal" 
                label ='Código'
                id="code"
                name="code"
                type="text"
                fullWidth
                required
                validators={['required']}
                errorMessages={['Campo requerido']}
                onChange={changeValue}
                value={code}
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
              <TextValidator margin="normal" 
                label ='Confirme a Senha'
                id="passwordConfirmation"
                name="passwordConfirmation"
                type="password"
                fullWidth
                required
                validators={['required']}
                errorMessages={['Campo requerido']}
                onChange={changeValue}
                value={passwordConfirmation}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                type="submit"
              >
                Salvar
              </Button>
            </ValidatorForm>
      );
  }
}

const reducer = 'auth';
const mapStateToProps = state => ({
  force: state,
  password :  state[reducer].get('password'),
  passwordConfirmation : state[reducer].get('passwordConfirmation'),
  code : state[reducer].get('code'),
  redirectToReferrer : state[reducer].get('redirectToReferrer')
})

const mapDispatchToProps = dispatch => ({
  changeValue : bindActionCreators(changeValue, dispatch),
  reset_password : bindActionCreators(reset_password, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps )(withStyles(styles)(Signup));