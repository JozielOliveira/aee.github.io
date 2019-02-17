import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

class SelectComponent extends Component {
  
  handleChange = name => event => this.props.changeValue({ name, value: event.target.value });

  render() {
    const { options, label, valueOption } = this.props;
    return (
        <FormControl  style={{ display: 'grid'}} >
            <InputLabel htmlFor="age-simple">{label}</InputLabel>
            <Select
              value={valueOption}
              onChange={this.handleChange('valueOption')}
              inputProps={{
                  name: 'age',
                  id: 'age-simple',
              }}
            >
              { options.map(elem => 
                  <MenuItem key={elem.value} value={elem.value}>{elem.label}</MenuItem> 
                )
              }
            </Select>
        </FormControl>    
    );
  }
}

SelectComponent.propTypes = {
  options : PropTypes.array.isRequired, 
  label : PropTypes.string.isRequired, 
  valueOption : PropTypes.any.isRequired, 
  changeValue : PropTypes.func.isRequired
}

export default SelectComponent;
