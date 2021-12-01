const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    bookInTotal: 150
};

const updateCartItems = (cartItems, item, idx) => {
    if (idx === -1){
        return [
            ...cartItems,
            item
        ]
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx+1)
    ]
}

const updateCartItem = (book, item = {}) => {
    const {
        id = book.id,
        bookTitle = book.title,
        bookPrice = book.price,
        bookCount = 0
    } = item;

    return {
        id,
        bookTitle,
        bookPrice,
        bookCount: bookCount + 1
    }
}

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
            const itemIndex = state.cartItems.findIndex(({id}) => id === bookId)
            const item = state.cartItems[itemIndex];

            const newItem = updateCartItem(book, item);
            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
            }
        default:
            return state;
    }
}

export default reducers;