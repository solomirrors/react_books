import React, {Component} from "react";
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import withContextBook from "../hoc";
import {booksLoaded} from "../../actions";
import {compose} from "redux";
import {Col, Row} from "react-bootstrap";
import './book-list.css'

class BookList extends Component{
    componentDidMount() {
        const {bookService} = this.props;
        const data = bookService.getBooks();
        this.props.booksLoaded(data);
    }

    render() {
        const {books} = this.props;
        return(
            <Row className='d-flex align-items-baseline'>
                {
                    books.map((book) => {
                        return(
                            <Col className='book-list-storage col-auto' key={book.id}><BookListItem book={book}/></Col>
                        )
                    })
                }
            </Row>
        )
    }
}

const mapStateToProps = ({books}) => {
    return {books}
};

const mapDispatchToProps = {
    booksLoaded
}

export default compose(
    withContextBook(),
    connect(mapStateToProps, mapDispatchToProps)
) (BookList)
