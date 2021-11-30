import React, {Component} from "react";
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import withContextBook from "../hoc";
import {booksLoaded, booksRequested} from "../../actions";
import {compose} from "redux";
import {Col, Row} from "react-bootstrap";
import './book-list.css'
import data from "bootstrap/js/src/dom/data";
import Spinner from "../spinner";

class BookList extends Component{
    componentDidMount() {
        const {bookService, booksLoaded, booksRequested} = this.props;
        booksRequested();
        const data = bookService.getBooks()
            .then((data) => booksLoaded(data));
    }

    render() {
        const {books, loading} = this.props;

        if (loading) {
            return <Spinner/>
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

const mapStateToProps = ({books, loading}) => {
    return {books, loading}
};

const mapDispatchToProps = {
    booksLoaded, booksRequested
}

export default compose(
    withContextBook(),
    connect(mapStateToProps, mapDispatchToProps)
) (BookList)
