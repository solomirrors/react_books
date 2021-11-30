const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    bookInTotal: 150
};

const reducers = (state = initialState, {payload, type}) => {
    console.log(type)
    switch (type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            }
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: payload
            }
        case 'ADDED_BOOK_TO_CART':
            const bookId = payload;
            const book = state.books.find((book) => book.id === bookId)
            const newItem = {
                id: book.id,
                bookName: book.title,
                bookPrice: book.price,
                bookCount: 1,
            }
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    newItem
                ]
            }
        default:
            return state;
    }
}

export default reducers;