import states from '../assets/estados-cidades.json';
export const city = states.estados[22].cidades.map(
    element => ({ label : element })).map(suggestion => ({
        value: suggestion.label,
        label: suggestion.label,   
    })
)