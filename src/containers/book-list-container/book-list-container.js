import React, {Component} from "react";
import Spinner from "../../components/spinner";
import ErrorIndicator from "../../components/errors/error-indicator";
import {fetchBooks} from "../../actions";
import {compose} from "redux";
import withContextBook from "../../components/hoc";
import {connect} from "react-redux";
import BookList from "../../components/book-list";

class BookListContainer extends Component{
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {books, loading, error} = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error){
            return <ErrorIndicator/>
        }

        return <BookList books={books}/>
    }
}

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error}
};

const mapDispatchToProps = (dispatch, {bookService}) => {
    return {
        fetchBooks: fetchBooks(bookService, dispatch)
    }
}

export default compose(
    withContextBook(),
    connect(mapStateToProps, mapDispatchToProps)
) (BookListContainer)