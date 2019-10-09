const defaultState = [
    {
        item: 1,
        title: 'Reactjs'
    },
    {
        item: 2,
        title: 'React Native'
    }
]

function reducer(state = defaultState, {type, payload}){
    switch (type) {
        case 'findSuggestions': {
            return false
        }
        default:
            return state
    }
}

export default reducer;