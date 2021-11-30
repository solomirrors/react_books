import React from "react";
import {Container} from "react-bootstrap";
import {CartTable} from "./fragments";

const CartPage = () => {
    return (
        <Container fluid>
            <CartTable bookId={1} bookName={'1'} bookPrice={25} bookCount={2} bookInTotal={50}/>
        </Container>
    )
}

export default CartPage;