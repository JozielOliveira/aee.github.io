import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from '@material-ui/core';

const renderSuggestion = ( { suggestion, index, itemProps, highlightedIndex, selectedItem } ) =>{
    const isHighlighted = highlightedIndex === index;
    const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;
    return (
        <MenuItem
            {...itemProps}
            key={suggestion.get('label')}
            selected={isHighlighted}
            component="div"
            style={{
                fontWeight: isSelected ? 500 : 400,
            }}
        >
        {suggestion.get('label')}
        </MenuItem>
    );
}

renderSuggestion.propTypes = {
    highlightedIndex: PropTypes.number,
    index: PropTypes.number,
    itemProps: PropTypes.object,
    selectedItem: PropTypes.string,
    suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
};

export default renderSuggestion