import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles, CssBaseline, Paper, Typography, Button } from '@material-ui/core';
import FormCID from './formCID';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { styles } from './styles';

class CID extends PureComponent {
  render() {
    const { title, classes, name, description, symptoms, causes, interventions, reference, changeValue, submit, back } = this.props;
    return (
        <Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
                {title}
            </Typography>
            <ValidatorForm
              ref="form"
              className={classes.form}
              onSubmit={submit}
              onError={errors => console.log(errors)}
            >
              <FormCID 
                name={name}
                description={description}
                symptoms={symptoms}
                causes={causes}
                interventions={interventions} 
                reference={reference}
                changeValue={changeValue}
              />
              <div className={classes.buttons}>
                    <Button className={classes.button} onClick={back}>
                        Voltar
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        type="submit"
                    >
                        Salvar
                    </Button>
              </div>
            </ValidatorForm>
          </Paper>
        </main>
      </Fragment>
    )
  }
}
CID.propTypes = {
    classes : PropTypes.object.isRequired,
    name :  PropTypes.string.isRequired,
    description :  PropTypes.string.isRequired,
    symptoms :  PropTypes.any.isRequired,
    causes :  PropTypes.any.isRequired,
    interventions:  PropTypes.string.isRequired,
    reference :  PropTypes.string.isRequired,
    changeValue :  PropTypes.func.isRequired,
    submit : PropTypes.func.isRequired,
    back : PropTypes.func.isRequired
};

export default withStyles(styles)(CID);