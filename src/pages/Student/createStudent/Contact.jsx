import React, { Fragment, Component } from 'react';
import { Grid, TextField } from '@material-ui/core';
import Phone from '../../../components/FormattedInputs/FormattedInputs';

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField required id="nameContact" label="Nome do responsável" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Phone />
          </Grid>
          <Grid item xs={12}>
            <TextField required id="email" type="email" label="Email" fullWidth/>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default Contact;