const booksLoaded= (newBooks) => {
    return{
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
};

const booksError = (error) => {
    return{
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

const createBookFromCart = (bookId) => {
    return{
        type: 'CREATE_BOOK_FROM_CART',
        payload: bookId
    }
}

const updateBookFromCart = (bookId) => {
    return{
        type: 'UPDATE_BOOK_FROM_CART',
        payload: bookId
    }
}

const deleteBookFromCart = (bookId) => {
    return{
        type: 'DELETE_BOOK_FROM_CART',
        payload: bookId
    }
}

const removeBookFromCart = (bookId) => {
    return{
        type: 'REMOVE_BOOK_FROM_CART',
        payload: bookId
    }
}



/*const fetchBooksOld = (bookService, dispatch) => () => {
    dispatch(booksRequested());
    bookService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
}*/

const fetchBooks = (bookService) => () => (dispatch) => {
    dispatch(booksRequested());
    bookService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
}

export {
    fetchBooks, createBookFromCart, updateBookFromCart, deleteBookFromCart, removeBookFromCart
}