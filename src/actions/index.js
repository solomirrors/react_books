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

const bookAddedToCart = (bookId) => {
    return{
        type: 'ADDED_BOOK_TO_CART',
        payload: bookId
    }
}

const fetchBooks = (bookService, dispatch) => () => {
    dispatch(booksRequested());
    bookService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
}

export {
    fetchBooks, bookAddedToCart
}