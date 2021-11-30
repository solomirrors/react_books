import React, {Fragment} from "react";
import BookList from "../../book-list";
import './home-page.css'
import {Container} from "react-bootstrap";

const HomePage = () => {
    return (
        <Fragment>
            <h1 className='home-page-title'>React Books</h1>
            <Container fluid>
                <BookList/>
            </Container>
        </Fragment>
    )
}

export default HomePage;