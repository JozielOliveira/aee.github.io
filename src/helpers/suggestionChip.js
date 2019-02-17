export const valueChangedSuggestion = ( state, { payload } ) => 
    state.withMutations( mutableState =>
        mutableState
            .set(`${payload.name}InputValue`, payload.event.target.value)  
    );

export const valuechangedItemSuggestion =  ( state, { payload } ) =>
    state.withMutations( mutableState => {
        let selectedItem = mutableState.get(`${payload.name}SelectedItem`);

        if (selectedItem.indexOf(payload.item) === -1)
            selectedItem = [...selectedItem, payload.item];

            mutableState
                .set(`${payload.name}InputValue`, '')
                .set(`${payload.name}SelectedItem`, selectedItem)
    });

export const valueChangedKeyDownSuggestion = ( state, { payload } ) =>
    state.withMutations( mutableState => {
        const selectedItem = mutableState.get(`${payload.name}SelectedItem`);
        mutableState.set(`${payload.name}SelectedItem`, selectedItem.slice(0, selectedItem.length - 1))
    });

export const removeItemSuggestion =  ( state, { payload } ) =>
    state.withMutations( mutableState => 
        mutableState
            .set(`${payload.name}SelectedItem`, mutableState.get(`${payload.name}SelectedItem`).filter( i => i !== payload.item) )
    );