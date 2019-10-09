const defaultState = [
    {
        item: 1,
        title: 'Reactjs'
    }
]

function reducer(state = defaultState, {type, payload}){
    switch (type) {
        case 'findSuggestions': {
            return [
                {
                    item: 1,
                    title: 'Reactjs'
                }
            ];
        }
        default:
            return state
    }
}

export default reducer;