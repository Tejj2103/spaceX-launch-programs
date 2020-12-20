const initState = {
    programs: []
}

const programReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_ALL':
            return {
                ...state,
                programs: action.payload
            };
        case 'GET_ALL_ERROR':
            console.log('get all error', action.err)
            return state;
        default:
            return state;
    }

}

export default programReducer;