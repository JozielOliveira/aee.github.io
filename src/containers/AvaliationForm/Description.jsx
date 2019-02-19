import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import { formQuestion } from '../../store/actions/avaliationCreate';
import { AutoSuggestionChipAvaliation } from '../AutoSuggestionChip';
import { TextField, Grid, withStyles } from '@material-ui/core';
import {styles} from './styles';


class DescriptionForm extends PureComponent {

  handleChange = name => event => this.props.changeValue({ name, value: event.target.value });

  render() {
    const { name, description, target_audience } = this.props;
    return (
      <Fragment>
         <Grid container spacing={24}>
          <Grid item xs={12}>
            <TextField
              required
              id="frmNameA"
              name="fname"
              label="Nome"
              fullWidth
              autoComplete="fname"
              value={name}
              onChange={this.handleChange('name')}
            />
          </Grid>
        
          <Grid item xs={12}>
            <TextField 
              multiline 
              required 
              id="description" 
              label="Descrição"
              fullWidth
              value={description}
              onChange={this.handleChange('description')}
            />
          </Grid>
          <Grid item xs={12}>
            <AutoSuggestionChipAvaliation 
              name='target_audience'
              label='Público Alvo'
              placeholder='Público Alvo'
              selectedItem={target_audience.selectedItem}
              inputValue={target_audience.inputValue}
              suggestions={target_audience.suggestions}
            />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

DescriptionForm.propTypes = {
  classes: PropTypes.object.isRequired,
  name : PropTypes.string.isRequired,
  description : PropTypes.string.isRequired,
  target_audience : PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  force: state,
})

const mapDispatchToProps = dispatch => ({
  changeValue : bindActionCreators(formQuestion.changeValue, dispatch)
});

export const Description = connect(mapStateToProps, mapDispatchToProps )(withStyles(styles)(DescriptionForm));
