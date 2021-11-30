import React, {Fragment} from "react";
import BookList from "../../book-list";
import './home-page.css'
import {Col, Container, Row} from "react-bootstrap";
import BookListContainer from "../../../containers/book-list-container";

const HomePage = () => {
    return (
        <Container fluid>
            <BookListContainer/>
        </Container>
    )
}

export default HomePage;