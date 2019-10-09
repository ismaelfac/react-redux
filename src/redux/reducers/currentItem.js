const defaultState = 0

function reducer(state=defaultState, {type, payload}){
    switch (type) {
        case '': {
            return false
        }
        default:
            return state
    }
}

export default reducer;