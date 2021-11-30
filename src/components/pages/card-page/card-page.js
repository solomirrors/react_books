import React, {Component} from "react";
import {Container} from "react-bootstrap";

class CardPage extends Component {
    render() {
        return (
            <Container fluid>
                <h1 style={{color: '#fff'}} className='text-center'>Shopping list</h1>
                <table className='w-100' style={{backgroundColor: '#fff', borderRadius: '10px 10px 10px 10px'}}>
                    <tr>
                        <th><h1 style={{color: '#000', textAlign: 'center'}}>#</h1></th>
                        <th><h1 style={{color: '#000', textAlign: 'center'}}>Books</h1></th>
                        <th><h1 style={{color: '#000', textAlign: 'center'}}>Count</h1></th>
                        <th><h1 style={{color: '#000', textAlign: 'center'}}>Price</h1></th>
                        <th><h1 style={{color: '#000', textAlign: 'center'}}>In Total</h1></th>
                        <th><h1 style={{color: '#000', textAlign: 'center'}}>Actions</h1></th>
                    </tr>
                    <tr>
                        <th><h5 style={{color: '#000', textAlign: 'center'}}>#</h5></th>
                        <th><h5 style={{color: '#000', textAlign: 'center'}}>Books</h5></th>
                        <th><h5 style={{color: '#000', textAlign: 'center'}}>Price</h5></th>
                        <th><h5 style={{color: '#000', textAlign: 'center'}}>Count</h5></th>
                        <th><h5 style={{color: '#000', textAlign: 'center'}}>In Total</h5></th>
                        <th className='d-flex justify-content-center'>
                            <i className="mx-2 fas fa-plus"/>
                            <i className="mx-2 fas fa-minus"/>


                        </th>
                    </tr>
                </table>
            </Container>
        )
    }
}

export default CardPage;