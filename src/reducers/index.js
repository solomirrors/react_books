const initialState = {
    books: [],
    loading: true,
    error: null
};

const reducers = (state = initialState, {payload, type}) => {
    switch (type) {
        case 'BOOKS_REQUESTED':
            return {
                books: [],
                loading: true,
                error: null
            }
        case 'BOOKS_LOADED':
            return {
                books: payload,
                loading: false,
                error: null
            };
        case 'BOOKS_ERROR':
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