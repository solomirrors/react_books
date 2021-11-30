import React from "react";
import BookListItem from "../book-list-item";
import {Col, Row} from "react-bootstrap";
import './book-list.css'

const BookList = ({books, onAddedToCart}) => {
    return(
        <Row className='d-flex justify-content-around'>
            {
                books.map((book) => {
                    return(
                        <Col
                            className='my-2 book-list-storage col-auto'
                            key={book.id}
                        >
                            <BookListItem
                                book={book}
                                onAddedToCart={() => onAddedToCart(book.id)}
                            />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default BookList;
