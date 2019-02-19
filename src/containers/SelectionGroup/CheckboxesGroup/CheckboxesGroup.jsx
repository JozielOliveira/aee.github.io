import React from 'react';
import PropTypes from 'prop-types';
import { 
  withStyles, FormControl, FormControlLabel, Checkbox, CheckboxesGroup 
} from '@material-ui/core';
import { styles } from './styles';

class Checkboxes extends React.Component {
  state = {
    gilad: true,
  };

  handleChange = name => event => this.setState({ [name]: event.target.checked });

  render() {
    const { classes } = this.props;
    const { gilad } = this.state;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <CheckboxesGroup>

            <FormControlLabel
              control={
                <Checkbox checked={gilad} onChange={this.handleChange('gilad')} value="gilad" color="primary" />
              }
              label="Gilad Gray"
            />
          </CheckboxesGroup>
        </FormControl>
      </div>
    );
  }
}

Checkboxes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkboxes);

