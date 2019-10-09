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
            return [
                {
                    item: 1,
                    title: 'React Native'
                }
            ]
        }
        default:
            return state
    }
}

export default reducer;