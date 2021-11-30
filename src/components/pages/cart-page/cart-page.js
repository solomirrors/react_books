import React from "react";
import {Container} from "react-bootstrap";
import {CartTable} from "./fragments";

const CartPage = () => {
    return (
        <Container fluid>
            <CartTable/>
        </Container>
    )
}

export default CartPage;