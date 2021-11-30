import React, {Fragment} from "react";
import BookList from "../../book-list";
import './home-page.css'
import {Col, Container, Row} from "react-bootstrap";

const HomePage = () => {
    return (
        <Container fluid>
            <BookList/>
        </Container>
    )
}

export default HomePage;