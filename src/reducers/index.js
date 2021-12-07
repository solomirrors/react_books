import updateBookList from "./book-list";
import updateShoppingCart from "./shopping-cart";

const reducers = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
}

export default reducers;