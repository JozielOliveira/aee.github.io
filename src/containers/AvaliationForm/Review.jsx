import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import RenderFormQuestion from '../Form/RenderFormQuestion';

class ReviewForm extends PureComponent {
  render(){
    const { form } = this.props;
    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <RenderFormQuestion form={form} />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

ReviewForm.propTypes = {
  form: PropTypes.any.isRequired
};

export const Review = ReviewForm;