const initialState = {
    books: []
};

const reducers = (state = initialState, {payload, type}) => {
    switch (type) {
        case 'BOOKS_LOADED':
            return {
                books: payload
            };

        default:
            return state;
    }
}

export default reducers;