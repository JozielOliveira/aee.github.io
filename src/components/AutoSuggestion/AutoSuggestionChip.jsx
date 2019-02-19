import React, { Component } from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import Downshift from 'downshift';
import { Paper, Chip, withStyles } from '@material-ui/core';
import renderSuggestion from './renderSuggestion';
import renderInput from './RenderInput';
import { styles } from  './styleChip';
import { getSuggestions } from './getSuggestions';

class AutoSuggestionChip extends Component {
    getSuggestions = value => getSuggestions(value, [...this.props.suggestions])
    
    handleKeyDown = event => {
        const { inputValue, selectedItem, name } = this.props;
        if (selectedItem.length && !inputValue.length && keycode(event) === 'backspace')
            this.props.changeKeyDown({ event, name })
    };
    
    handleInputChange = event => this.props.changeValue({ event, name : this.props.name});
    
    handleChange = item => this.props.changeValueSugestion({ item, name : this.props.name });
    
    handleDelete = item => () => this.props.deleteItemSugestion({ item, name : this.props.name });

    render () {
        const { classes, inputValue, selectedItem, label, placeholder } = this.props;
        const selected = [...selectedItem]
        return (
            <div className={classes.root}>
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
                            {
                                renderInput({
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
                                        placeholder,
                                    }),
                                    label,
                                })
                            }
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
            </div>
        );
    }
}

AutoSuggestionChip.propTypes = {
    classes : PropTypes.object.isRequired,
    name : PropTypes.string.isRequired,
    label : PropTypes.string.isRequired,
    placeholder : PropTypes.string.isRequired,
    inputValue : PropTypes.string.isRequired,
    selectedItem : PropTypes.any.isRequired,
    suggestions : PropTypes.object.isRequired,
    changeValueSugestion : PropTypes.func.isRequired,
    changeValue : PropTypes.func.isRequired,
    changeKeyDown : PropTypes.func.isRequired,
    deleteItemSugestion : PropTypes.func.isRequired,
}; 

export default withStyles(styles)(AutoSuggestionChip);
