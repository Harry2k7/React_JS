
const initialState = {
    todos: [],
    error: null,
};

const todoSlice = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return {
                ...state,
                error: null
            };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                todos: action.payload
            };
        case 'FETCH_FAILURE':
            return {
                ...state,
                todos: action.error
            };
        default:
            return state;

    }
}

export default todoSlice;
