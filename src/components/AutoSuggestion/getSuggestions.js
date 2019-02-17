import deburr from 'lodash/deburr';

export const getSuggestions = ( value, suggestions ) => {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;
    return inputLength === 0 ? [] : suggestions.filter( suggestion => {
          const keep = count < 5 && suggestion.get('label').slice(0, inputLength).toLowerCase() === inputValue;
  
          if (keep) {
            count += 1;
          }
  
          return keep;
    });
}