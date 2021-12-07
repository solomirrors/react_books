import React, {Component} from "react";
import Spinner from "../../components/spinner";
import ErrorIndicator from "../../components/errors/error-indicator";
import {createBookFromCart, fetchBooks} from "../../actions";
import {compose, bindActionCreators} from "redux";
import withContextBook from "../../components/hoc";
import {connect} from "react-redux";
import BookList from "../../components/book-list";

class BookListContainer extends Component{
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {books, loading, error, createBookFromCart} = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error){
            return <ErrorIndicator/>
        }

        return <BookList
            books={books}
            createBookFromCart={createBookFromCart}
        />
    }
}

const mapStateToProps = ({bookList: {books, loading, error}}) => {
    return {
        books, loading, error
    }
};

const mapDispatchToProps = (dispatch, {bookService}) => {
    return bindActionCreators({
        fetchBooks: fetchBooks(bookService),
        createBookFromCart: createBookFromCart
    }, dispatch);
}

export default compose(
    withContextBook(),
    connect(mapStateToProps, mapDispatchToProps)
) (BookListContainer)