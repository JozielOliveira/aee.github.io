/* eslint-disable react/prop-types, react/jsx-handler-names */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import { components } from './utils';

class IntegrationReactSelect extends PureComponent {
  state = {
    single: '',
    shrink: false
  };

  handleChange = name => value => {
    this.setState({
      [name]: value
    });
  };

  handleShrink = () => this.setState({ shrink: true });
  
  render() {
    const { classes, theme, suggestions, label } = this.props;
    const { single, shrink } = this.state;
    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit',
        },
      }),
    };
    return (
      <div className={classes.root}>
        <Select
            classes={classes}
            styles={selectStyles}
            textFieldProps={{
              label,
              InputLabelProps: { shrink },
            }}
            options={suggestions}
            components={components}
            value={single}
            onChange={this.handleChange('single')}
            onMenuOpen={this.handleShrink}
            placeholder
        />
      </div>
    );
  }
}

IntegrationReactSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  suggestions : PropTypes.array.isRequired,
  label: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(IntegrationReactSelect);