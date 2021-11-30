const initialState = {
    books: [],
    loading: true
};

const reducers = (state = initialState, {payload, type}) => {
    switch (type) {
        case 'BOOKS_REQUESTED':
            return {
                books: [],
                loading: false
            }
        case 'BOOKS_LOADED':
            return {
                books: payload,
                loading: false
            };

        default:
            return state;
    }
}

export default reducers;