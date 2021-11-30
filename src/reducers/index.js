const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
        {
            bookId: 1,
            bookName: 'Books 1',
            bookPrice: 25,
            bookCount: 2,
            bookTotal: 50,
        },
        {
            bookId: 2,
            bookName: 'Books 2',
            bookPrice: 20,
            bookCount: 4,
            bookTotal: 40,
        },
        {
            bookId: 1,
            bookName: 'Books 3',
            bookPrice: 15,
            bookCount: 1,
            bookTotal: 30,
        }
    ],
    bookInTotal: 150
};

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
        default:
            return state;
    }
}

const mapStateToProps = (state) => {
    return{

    };
}

export default reducers;