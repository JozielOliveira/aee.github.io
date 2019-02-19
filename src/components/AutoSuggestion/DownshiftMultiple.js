import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import keycode from 'keycode';
import Downshift from 'downshift';
import { Paper, Chip } from '@material-ui/core';
import renderSuggestion from './renderSuggestion';
import renderInput from './RenderInput';

class DownshiftMultiple extends PureComponent {
    getSuggestions = value => {
        const inputValue = deburr(value.trim()).toLowerCase();
        const inputLength = inputValue.length;
        let count = 0;
        const suggestions = [...this.props.suggestions]
        return inputLength === 0 ? [] : suggestions.filter( suggestion => {
              const keep = count < 5 && suggestion.get('label').slice(0, inputLength).toLowerCase() === inputValue;
      
              if (keep) {
                count += 1;
              }
      
              return keep;
        });
    }
    
    handleKeyDown = event => {
        const { inputValue, selectedItem } = this.props;
        if (selectedItem.length && !inputValue.length && keycode(event) === 'backspace')
            this.props.changeKeyDown(event)
    };
    
    handleInputChange = event => this.props.changeValue(event);
    
    handleChange = item => this.props.changeValueSugestion(item);
    
    handleDelete = item => () => this.props.deleteItemSugestion(item);

    render() {
        const { classes, inputValue, selectedItem : [...selectedItem] } = this.props;
        const selected = [...selectedItem]
        console.log(selected)
        return (
            <Downshift
                id="downshift-multiple"
                inputValue={inputValue}
                onChange={this.handleChange}
                selectedItem={selected}
            >
                {({
                    getInputProps,
                    getItemProps,
                    isOpen,
                    inputValue: inputValue2,
                    selected: selected2,
                    highlightedIndex,
                }) => (
                    <div className={classes.container}>
                        {renderInput({
                            fullWidth: true,
                            classes,
                            InputProps: getInputProps({
                                startAdornment: selected.map( item =>
                                    <Chip
                                        key={item}
                                        tabIndex={-1}
                                        label={item}
                                        className={classes.chip}
                                        onDelete={this.handleDelete(item)}
                                    />
                                ),
                                onChange: this.handleInputChange,
                                onKeyDown: this.handleKeyDown,
                                placeholder: 'Select multiple countries',
                            }),
                            label: 'Label',
                        })}
                        { isOpen ? (
                            <Paper className={classes.paper} square>
                                {this.getSuggestions(inputValue2).map( (suggestion, index) =>
                                    renderSuggestion({
                                        suggestion,
                                        index,
                                        itemProps: getItemProps({ item: suggestion.get('label') }),
                                        highlightedIndex,
                                        selected: selected2,
                                    }),
                                )}
                            </Paper>
                        ) : null}
                    </div>
                )}
            </Downshift>
        );
    }
}

DownshiftMultiple.propTypes = {
    classes : PropTypes.object.isRequired,
    changeValueSugestion : PropTypes.func.isRequired,
    changeValue : PropTypes.func.isRequired,
    changeKeyDown : PropTypes.func.isRequired,
    deleteItemSugestion : PropTypes.func.isRequired,
    getSuggestionsCauseCID : PropTypes.func.isRequired, 
    inputValue : PropTypes.string.isRequired,
    selectedItem : PropTypes.any.isRequired,
    suggestions : PropTypes.object.isRequired,
}; 

export default  DownshiftMultiple;
