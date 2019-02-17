import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import { formQuestion } from '../../store/actions/avaliationCreate';
import { Grid, TextField, Paper, Button, withStyles } from '@material-ui/core';
import Select from '../Select/Select';
import TypeQuestion from './TypeQuestion';
import RenderFormQuestion from '../Form/RenderFormQuestion';
import { type } from '../../utils';
import { styles } from './styles';

class QuestionsForm extends Component {
  handleAdd = () => this.props.saveForm();

  handleChange = name => event => this.props.changeValue({ name, value: event.target.value });

  render() {
    const { classes, valueSelect, changeValue, question, form } = this.props;
    return (
      <Fragment>
        
        <RenderFormQuestion form ={form}/>

        <Paper className={classes.paperQuestion}>
        
          <Grid container spacing={24}>
        
            <Grid item xs={12} sm={8}>
              <TextField required value={question} onChange={this.handleChange('question')} id="nameContact" label="Pergunta" fullWidth/>
            </Grid>
        
            <Grid item xs={12} sm={4}>
              <Select options={type} valueOption={valueSelect} changeValue={changeValue} label="Tipo" />
            </Grid>
        
          </Grid>
        
          <Grid >
            <TypeQuestion type={valueSelect} />
          </Grid>
        
          <Button variant="contained" color="primary" onClick={this.handleAdd}>
            Salvar
          </Button>
        
        </Paper>
      
      </Fragment>
    );
  }
}

QuestionsForm.propTypes = {
  valueSelect : PropTypes.string.isRequired,
  question :  PropTypes.string.isRequired,
  form: PropTypes.any.isRequired,
};

const mapStateToProps = state => ({
  force: state,
});


const mapDispatchToProps = dispatch => ({
  changeValue : bindActionCreators(formQuestion.changeValue, dispatch),
  saveForm : bindActionCreators(formQuestion.saveForm, dispatch)
});

export const Questions = connect(mapStateToProps, mapDispatchToProps )(withStyles(styles)(QuestionsForm));
