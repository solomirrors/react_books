import React, {Fragment} from "react";

const CartTable = ({items, bookInTotal, onIncrease, onDecrease, onDelete}) => {
    const renderElement = (item, idx) => {
            const {
                bookId,
                bookName,
                bookCount,
                bookPrice,
                bookTotal,
                bookInTotal,
            } = item;
            return (
                <tr key={bookId}>
                    <th><h5 style={{color: '#000', textAlign: 'center'}}>{bookId}</h5></th>
                    <th><h5 style={{color: '#000', textAlign: 'center'}}>{bookName}</h5></th>
                    <th><h5 style={{color: '#000', textAlign: 'center'}}>{bookPrice}</h5></th>
                    <th><h5 style={{color: '#000', textAlign: 'center'}}>{bookCount}</h5></th>
                    <th><h5 style={{color: '#000', textAlign: 'center'}}>{bookInTotal}</h5></th>
                    <th className='d-flex justify-content-center'>
                        <i className="mx-2 fas fa-plus" onClick={() => onIncrease(bookId)}/>
                        <i className="mx-2 fas fa-minus" onClick={() => onDecrease(bookId)}/>
                        <i className="mx-2 fas fa-trash" onClick={() => onDelete(bookId)}/>
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
                {items.map(renderElement)}
                </thead>
            </table>
        </Fragment>
    )
}

export default CartTable;