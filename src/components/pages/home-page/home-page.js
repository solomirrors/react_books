import React from "react";
import './home-page.css'
import {Container} from "react-bootstrap";
import BookListContainer from "../../../containers/book-list-container";

const HomePage = () => {
    return (
        <Container fluid>
            <BookListContainer/>
        </Container>
    )
}

export default HomePage;