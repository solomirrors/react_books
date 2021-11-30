import React, {Fragment} from "react";
import './book-list-item.css'
import {Button, Card, CardGroup, CardImg, Col, Container, Image, Row} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";
import {Link} from "react-router-dom";

const BookListItem = ({book}) => {
    const {title, author, price, book_Src} = book;
    return(
            <Card className='h-100'>
                <CardHeader className='w-100 h-100 d-flex align-items-center justify-content-center flex-column'>
                    <h6><Link to='#'>{title}</Link></h6>
                </CardHeader>
                <CardHeader className='w-100 h-100'>
                    <CardImg className='book-list-item-card-image' src={book_Src}/>
                </CardHeader>
                <CardHeader className='w-100 h-100 d-flex align-items-center flex-column'>
                    <span>by {author}</span>
                </CardHeader>
                <Row className='p-2 d-flex align-items-end'>
                    <Col className='col-auto d-flex justify-content-center align-items-center'>
                        <Button className='align-items-start btn btn-secondary'>Add to cart</Button>
                    </Col>
                    <Col className='col-auto d-flex justify-content-center align-items-center'>
                        <h6 className=''>{price}</h6>
                    </Col>
                </Row>
            </Card>
    )
}

export default BookListItem;