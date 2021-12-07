const updateShoppingCart = (state, {payload, type}) => {
    if (state === undefined){
        return {
            cartItems: [],
            bookInTotal: 0
        }
    }
    switch (type){
        case 'CREATE_BOOK_FROM_CART':
            return updateOrder(state, payload, 'CREATE_BOOK')
        case 'UPDATE_BOOK_FROM_CART':
            return updateOrder(state, payload, 'UPDATE_BOOK')
        case 'DELETE_BOOK_FROM_CART':
            return updateOrder(state, payload, 'DELETE_BOOK')
        case 'REMOVE_BOOK_FROM_CART':
            return updateOrder(state, payload, 'REMOVE_BOOK')
        default:
            return state.shoppingCart
    }
}

export default updateShoppingCart;

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
    const {bookList: {books}, shoppingCart: {cartItems}} = state;
    const checkBooks = checkOrderBooks(books, payload);
    const checkCarts = checkCartsBooks(cartItems, payload);

    switch (action){
        case 'CREATE_BOOK':
            if (checkCarts !== -1 ){
                return {
                    bookInTotal: 0,
                    cartItems:
                        updateBookFromCart(cartItems, checkCarts)
                }
            }
            else return {
                bookInTotal: 0,
                cartItems:
                    setBookFromCart(cartItems, checkBooks)
            };
        case 'UPDATE_BOOK':
            return {
                bookInTotal: 0,
                cartItems:
                    updateBookFromCart(cartItems, payload)
            };
        case 'DELETE_BOOK':
            return {
                bookInTotal: 0,
                cartItems:
                    deleteBookFromCart(cartItems, payload)
            };
        case 'REMOVE_BOOK':
            return{
                bookInTotal: 0,
                cartItems:
                    removeBookFromCart(cartItems, payload)
            }
        default:
            return state;
    }
}