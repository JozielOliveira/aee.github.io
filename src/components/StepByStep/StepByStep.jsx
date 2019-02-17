import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles, CssBaseline, Paper, Stepper, Step, StepLabel, Button, Typography } from '@material-ui/core';
import { styles } from './styles';

class CreateStudent extends Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({ activeStep: state.activeStep + 1 }));
    if ( this.state.activeStep === this.props.steps.length - 1 )
      this.props.save()
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes, title, getStepContent, steps, back} = this.props;
    const { activeStep } = this.state;
    return (
      <Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              {title}
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Fragment>
              {activeStep === steps.length ? (
                <Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is *****. We have emailed your order confirmation, and will
                    send you an update when your order has shipped.
                  </Typography>
                </Fragment>
              ) : (
                <Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 ?
                        <Button onClick={this.handleBack} className={classes.button}>
                          Voltar
                        </Button>
                     :
                        <Button 
                          onClick={back}
                          className={classes.button}
                        >
                          Voltar
                        </Button>
                    }
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Salvar' : 'Próximo'}
                    </Button>
                  </div>
                </Fragment>
              )}
            </Fragment>
          </Paper>
        </main>
      </Fragment>
    );
  }
}

CreateStudent.propTypes = {
    classes: PropTypes.object.isRequired,
    title : PropTypes.string.isRequired,
    steps : PropTypes.array.isRequired,
    getStepContent : PropTypes.func.isRequired,
    save : PropTypes.func.isRequired
};

export default withStyles(styles)(CreateStudent);
