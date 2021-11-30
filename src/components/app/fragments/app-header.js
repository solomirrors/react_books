import React from "react";
import './app-header.css'
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const AppHeader = ({booksCount, priceCount}) => {
    return(
        <Container fluid>
            <Row className='row-cols-auto d-flex justify-content-between align-items-center'>
                <Col>
                    <h1 className='app-header-title'><Link to='/'>React Books</Link></h1>
                </Col>
                <Col>
                    <h2 className='app-header-cart'><Link to='cart'><i className="mx-2 fas fa-shopping-cart"/></Link>{booksCount} Books ({priceCount}<i className="mx-1 fas fa-dollar-sign"/>)</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default AppHeader;