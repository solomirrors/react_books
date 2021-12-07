const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    bookInTotal: 150
};

const checkOrderBooks = (books, payload) => {
    return books.find(({id}) => id === payload);
}

const checkCartsBooks = (carts, payload) => {
    return carts.findIndex(({bookId}) => bookId === payload);
}

const setBookFromCart = (cartItems, book) => {
    return [
        ...cartItems,
        {
            bookId: book.id,
            bookTitle: book.title,
            bookCount: 1,
            bookPrice: book.price
        }
    ]
}

const updateBookFromCart = (cartItems, index) => {
    return[
        ...cartItems.slice(0, index),
        {
            ...cartItems[index], bookCount: cartItems[index].bookCount + 1
        },
        ...cartItems.slice(index+1)
    ]
}

const deleteBookFromCart = (cartItems, index) => {
    if (cartItems[index].bookCount === 1){
        return removeBookFromCart(cartItems, index)
    }
    return[
        ...cartItems.slice(0, index),
        {
            ...cartItems[index], bookCount: cartItems[index].bookCount - 1
        },
        ...cartItems.slice(index+1)
    ]
}

const removeBookFromCart = (cartItems, index) => {
    return [
        ...cartItems.slice(0, index), ...cartItems.slice(index+1)
    ]
}

const updateOrder = (state, payload, action) => {
    const {cartItems} = state;
    const checkBooks = checkOrderBooks(state.books, payload);
    const checkCarts = checkCartsBooks(state.cartItems, payload);

    switch (action){
        case 'SET_BOOK':
            if (checkCarts !== -1 ){
                return {
                    ...state, cartItems: updateBookFromCart(cartItems, checkCarts)
                }
            }
            else return {
                ...state, cartItems: setBookFromCart(state.cartItems, checkBooks)
            };
        case 'UPDATE_BOOK':
            return {
                ...state, cartItems: updateBookFromCart(state.cartItems, payload)
            };
        case 'DELETE_BOOK':
            return {
                ...state, cartItems: deleteBookFromCart(state.cartItems, payload)
            };
        case 'REMOVE_BOOK':
            return {
                ...state, cartItems: removeBookFromCart(state.cartItems, payload)
            }
        default:
            return state;
    }
}

const reducers = (state = initialState, {payload, type}) => {
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
        case 'SET_BOOK_FROM_CART':
            return updateOrder(state, payload, 'SET_BOOK')
        case 'UPDATE_BOOK_FROM_CART':
            return updateOrder(state, payload, 'UPDATE_BOOK')
        case 'DELETE_BOOK_FROM_CART':
            return updateOrder(state, payload, 'DELETE_BOOK')
        case 'REMOVE_BOOK_FROM_CART':
            return updateOrder(state, payload, 'REMOVE_BOOK')
        default:
            return {...state};
    }
}

export default reducers;