import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextMaskCustom from './TextMaskCustom';
import { styles } from './styles';

class FormattedInputs extends Component {
    state = {
        textmask: '( )    -    ',
    };
    
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    
    render() {
        const { classes } = this.props;
        const { textmask } = this.state;
        
        return (
            <FormControl className={classes.formControl} >
            <InputLabel htmlFor="phone">Telefone</InputLabel>
            <Input
                value={textmask}
                onChange={this.handleChange('textmask')}
                id="phone"
                inputComponent={TextMaskCustom}
                fullWidth
            />
            </FormControl>
        );
    }
}

FormattedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormattedInputs);