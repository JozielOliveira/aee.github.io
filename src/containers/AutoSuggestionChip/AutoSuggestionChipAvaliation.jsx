import React, { PureComponent } from 'react';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import Autocomplete from '../../components/AutoSuggestion/AutoSuggestionChip.jsx';
import { suggestion } from '../../store/actions/avaliationCreate';

class AutoSuggestionChip extends PureComponent {
  render() {
      const { changeValue, changeKeyDown, deleteItemSugestion, changeValueSugestion,
              label, name, placeholder, inputValue, selectedItem, suggestions } = this.props;
    return <Autocomplete 
            name={name}
            label={label}
            placeholder={placeholder}
            suggestions={suggestions}
            inputValue={inputValue}
            selectedItem={selectedItem}
            changeValue={changeValue}
            changeKeyDown={changeKeyDown}
            changeValueSugestion={changeValueSugestion}
            deleteItemSugestion={deleteItemSugestion}
        />
  }
};

const mapStateToProps = state => ({
  force: state,
})

const mapDispatchToProps = dispatch => ({
  changeValue : bindActionCreators(suggestion.changeValue, dispatch),
  changeKeyDown : bindActionCreators(suggestion.changeKeyDown, dispatch),
  changeValueSugestion : bindActionCreators(suggestion.changeValueSugestion, dispatch),
  deleteItemSugestion : bindActionCreators(suggestion.removeItemSuggestion, dispatch),
});


export const AutoSuggestionChipAvaliation = connect(mapStateToProps, mapDispatchToProps )(AutoSuggestionChip);
