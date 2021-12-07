import React, {Fragment} from "react";
import {connect} from "react-redux";
import {Button} from "react-bootstrap";
import {
    updateBookFromCart,
    deleteBookFromCart,
    removeBookFromCart
} from "../../../../actions";

const CartTable = ({cartItems, onIncrease, onDecrease, onDelete}) => {
    const renderElement = (item, idx) => {
            const {
                bookTitle,
                bookCount,
                bookPrice,
            } = item;
            return (
                <tr key={idx}>
                    <th><h5 style={{color: '#000', textAlign: 'center'}}>{idx}</h5></th>
                    <th><h5 style={{color: '#000', textAlign: 'center'}}>{bookTitle}</h5></th>
                    <th><h5 style={{color: '#000', textAlign: 'center'}}>{bookCount}</h5></th>
                    <th><h5 style={{color: '#000', textAlign: 'center'}}>{bookPrice}</h5></th>
                    <th><h5 style={{color: '#000', textAlign: 'center'}}>{`${bookCount*bookPrice}`}</h5></th>
                    <th className='d-flex justify-content-center'>
                        <Button className='mx-2 btn btn-lg' onClick={() => onIncrease(idx)}>
                            <i className="mx-2 fas fa-plus"/>
                        </Button>
                        <Button className='mx-2 btn btn-lg' onClick={() => onDecrease(idx)}>
                            <i className="mx-2 fas fa-minus" />
                        </Button>
                        <Button className='mx-2 btn btn-lg' onClick={() => onDelete(idx)}>
                            <i className="mx-2 fas fa-trash"/>
                        </Button>
                    </th>
                </tr>
            )
    }

    return(
        <Fragment>
            <h1 style={{color: '#fff'}} className='text-center'>Shopping list</h1>
            <table className='w-100' style={{backgroundColor: '#fff', borderRadius: '10px 10px 10px 10px'}}>
                <thead>
                <tr>
                    <th><h1 style={{color: '#000', textAlign: 'center'}}>#</h1></th>
                    <th><h1 style={{color: '#000', textAlign: 'center'}}>Books</h1></th>
                    <th><h1 style={{color: '#000', textAlign: 'center'}}>Count</h1></th>
                    <th><h1 style={{color: '#000', textAlign: 'center'}}>Price</h1></th>
                    <th><h1 style={{color: '#000', textAlign: 'center'}}>In Total</h1></th>
                    <th><h1 style={{color: '#000', textAlign: 'center'}}>Actions</h1></th>
                </tr>
                {cartItems.map(renderElement)}
                </thead>
            </table>
        </Fragment>
    )
}

const mapStateToProps = ({shoppingCart: {cartItems, bookInTotal}}) => {
    return{
        cartItems, bookInTotal
    };
}

const mapDispatchToProps = {
    onIncrease:  updateBookFromCart,
    onDecrease: deleteBookFromCart,
    onDelete: removeBookFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);