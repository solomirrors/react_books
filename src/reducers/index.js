const initialState = {
    books: [],
    loading: true,
    error: null
};

const reducers = (state = initialState, {payload, type}) => {
    switch (type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                books: [],
                loading: true,
                error: null
            }
        case 'FETCH_BOOKS_SUCCESS':
            return {
                books: payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                books: [],
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

export default reducers;