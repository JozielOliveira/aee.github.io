import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import { styles } from './styles';

class CustomizedSwitches extends Component {
  state = {
    checkedB: true,
  };

  handleChange = name => event => this.setState({ [name]: event.target.checked });

  render() {
    const { classes } = this.props;

    return (
      <FormGroup row >
        
        <FormControlLabel
          style={{
            margin: `12px 20px`,
          }}
          control={
            <Switch
              classes={{
                switchBase: classes.iOSSwitchBase,
                bar: classes.iOSBar,
                icon: classes.iOSIcon,
                iconChecked: classes.iOSIconChecked,
                checked: classes.iOSChecked,
              }}
              disableRipple
              checked={this.state.checkedB}
              onChange={this.handleChange('checkedB')}
              value="checkedB"
            />
          }
        />
      </FormGroup>
    );
  }
}

CustomizedSwitches.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedSwitches);