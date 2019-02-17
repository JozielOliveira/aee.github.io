import React, { PureComponent } from 'react';
import { Grid, Typography } from '@material-ui/core';
import RenderOption from './RenderQuestion';

export default class RenderFormQuestion extends PureComponent {
  render() {
    const { form } = this.props;
    return( form.size !== 0 &&
        form.map( ( elem, key ) => 
            <Grid key={key} container spacing={24}>
                <Grid item xs={12} sm={12}>
                    <Typography variant='h6' >{elem.question} </Typography>
                </Grid>
                <RenderOption type={elem.type} options={elem.options}/>
            </Grid>
        )
    )
  }
}
