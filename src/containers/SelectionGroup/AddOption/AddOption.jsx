import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import { 
  withStyles, FormControl, TextField, Grid, Fab
 } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { styles } from './styles';
import Options from './Options';
import { formQuestion } from '../../../store/actions/avaliationCreate';
import keycode from 'keycode';

class AddOption extends Component {
  

  handleChange = name => event => this.props.changeValue({ name, value: event.target.value });
  
  handleAdd = () => this.props.addOption();
  
  handleRemove = e => this.props.removeOption(e);
  
  render() {
    const { classes, Component, ComponentGroup, options, values, value } = this.props;
    return (
      <Grid container className={classes.root}>
        {/** Grid de edicao */}
        <Grid item xs={12} className={classes.fieldInput}>
          <Component checked color="primary" />
            {/** TextInput do nome da opcao */}
            <TextField required id="nameContact" style={{
                padding: '6px 0 7px',
                width: '85%'
              }}
              value={values}
              onChange={this.handleChange('values')}
              onKeyDown={event => keycode(event) === 'enter' ? this.handleAdd() : null}
            />
            {/** Botao de adicionar */}
            <Fab  className={classes.fab} color='primary' size='small' onClick={this.handleAdd}>
              <AddIcon />
            </Fab>
        </Grid>
        {/** Lista de opcoes */}
        <Grid item xs={12}>
          <FormControl component="fieldset" className={classes.formControl}>
            <ComponentGroup
              aria-label="gender"
              name="gender2"
              className={classes.group}
              value={value}
              onChange={this.handleChange('value')}
            >
              <Options ComponentType={Component}  options={options} HandleRemove={this.handleRemove}/>
            </ComponentGroup>
          </FormControl>
        </Grid>
      </Grid>
    );
  }
}

AddOption.propTypes = {
  classes: PropTypes.object.isRequired
};

const reducer = 'createAvaliation'
const mapStateToProps = state => ({
  force: state,
  values : state[reducer].get('values'),
  value : state[reducer].get('value'),
  options : state[reducer].get('options'),
  valueOption: state[reducer].get('valueOption') 
});

const constDispatchToProps = dispatch => ({
  changeValue: bindActionCreators(formQuestion.changeValue, dispatch),
  addOption: bindActionCreators(formQuestion.addOption, dispatch),
  removeOption : bindActionCreators(formQuestion.removeOption, dispatch)
});

export default withStyles(styles)(connect(mapStateToProps, constDispatchToProps)(AddOption));