import React, { PureComponent } from 'react';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import Autocomplete from '../../components/AutoSuggestion/AutoSuggestionChip.jsx';
import { changeValue, changeValueSugestion, changeKeyDown, removeItemSuggestionCID } from '../../store/actions/cidCreate';

class AutoSuggestionChipCID extends PureComponent {
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
  changeValue : bindActionCreators(changeValue, dispatch),
  changeKeyDown : bindActionCreators(changeKeyDown, dispatch),
  changeValueSugestion : bindActionCreators(changeValueSugestion, dispatch),
  deleteItemSugestion : bindActionCreators(removeItemSuggestionCID, dispatch),
});


export const AutoCompleteChip = connect(mapStateToProps, mapDispatchToProps )(AutoSuggestionChipCID);
