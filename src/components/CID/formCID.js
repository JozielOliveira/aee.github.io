import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { AutoCompleteChip } from '../../containers/AutoSuggestionChip';
import { TextValidator } from 'react-material-ui-form-validator';

class FormCID extends PureComponent {
    handleChange = name => event => this.props.changeValue({ name, value: event.target.value });
    render() {
        const { name, description, symptoms, causes, interventions, reference } = this.props;
        return (
            <Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                    <TextValidator
                        required
                        id="frmNameA"
                        name="fname"
                        label="Nome"
                        fullWidth
                        autoComplete="fname"
                        value={name}
                        onChange={this.handleChange('name')}
                        validators={['required']}
                        errorMessages={['Campo requerido']}
                    /> 
                    </Grid>
                
                    <Grid item xs={12}>
                    <TextValidator 
                        multiline 
                        required 
                        id="description" 
                        name="description"
                        label="Descrição"
                        fullWidth
                        value={description}
                        onChange={this.handleChange('description')}
                        validators={['required']}
                        errorMessages={['Campo requerido']}
                    />
                    </Grid>

                    <Grid item xs={12}>
                    <AutoCompleteChip 
                        name='symptoms'
                        label='Sintomas'
                        placeholder='Sintomas'
                        selectedItem={symptoms.selectedItem}
                        inputValue={symptoms.inputValue}
                        suggestions={symptoms.suggestions}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <AutoCompleteChip 
                        name='causes'
                        label='Causa'
                        placeholder='Causa'
                        selectedItem={causes.selectedItem}
                        inputValue={causes.inputValue}
                        suggestions={causes.suggestions}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextValidator 
                        multiline 
                        required 
                        id='interventions' 
                        label='Intervenções'
                        name="interventions" 
                        fullWidth
                        value={interventions}
                        onChange={this.handleChange('interventions')}
                        validators={['required']}
                        errorMessages={['Campo requerido']}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextValidator 
                        multiline 
                        required 
                        id='reference' 
                        label='Referência'
                        name="reference" 
                        fullWidth
                        value={reference}
                        onChange={this.handleChange('reference')}
                        validators={['required']}
                        errorMessages={['Campo requerido']}
                    />
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}
FormCID.propTypes = {
    changeValue : PropTypes.func.isRequired,
    name : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    symptoms : PropTypes.object.isRequired,
    causes : PropTypes.object.isRequired,
    interventions : PropTypes.string.isRequired, 
    reference : PropTypes.string.isRequired,
};

export default FormCID;
  