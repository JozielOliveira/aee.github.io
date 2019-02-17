import React, { Fragment, Component } from 'react'
import { Grid, TextField } from '@material-ui/core';

class Review extends Component {
  render(){
    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <TextField required id="nameContact" label="Professora" fullWidth/>
          </Grid>
          <Grid item xs={12}>
            <TextField multiline required id="email" type="email" label="Motivo da consulta" fullWidth/>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default Review;