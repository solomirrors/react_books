import React, {Component} from "react";
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import withContextBook from "../hoc";
import {booksLoaded, booksRequested, booksError} from "../../actions";
import {compose} from "redux";
import {Col, Row} from "react-bootstrap";
import './book-list.css'
import ErrorIndicator from "../errors/error-indicator";
import Spinner from "../spinner";

class BookList extends Component{
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

        return(
            <Row className='d-flex justify-content-around'>
                {
                    books.map((book) => {
                        return(
                            <Col className='my-2 book-list-storage col-auto' key={book.id}><BookListItem book={book}/></Col>
                        )
                    })
                }
            </Row>
        )
    }
}

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error}
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookService} = ownProps;
    return {
        fetchBooks: () => {
            dispatch(booksRequested());
            bookService.getBooks()
                .then((data) => dispatch(booksLoaded(data)))
                .catch((err) => dispatch(booksError(err)));
        }
    }
}

export default compose(
    withContextBook(),
    connect(mapStateToProps, mapDispatchToProps)
) (BookList)
