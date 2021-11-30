import React, {Fragment} from "react";
import './book-list-item.css'
import {Card, CardGroup, CardImg, Col, Container} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";

const BookListItem = ({book}) => {
    const {title, author, price, book_Src} = book;
    return(
            <Card className='book-list-item-card'>
                <CardHeader className='book-list-item-title'>
                    <h4>{title}</h4>
                    <h6>by {author}</h6>
                </CardHeader>
                <CardImg src={book_Src} className='img-fluid'/>
                <CardHeader>
                    <h6>{price}</h6>
                </CardHeader>
            </Card>
    )
}

export default BookListItem;