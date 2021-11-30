import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import withContextBook from "../hoc/with-context-book";
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import AppHeader from "./fragments";

const App = () => {
    return (
        <BrowserRouter>
            <AppHeader booksCount={8} priceCount={120}/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="cart" element={<CartPage/>}/>
                <Route path="*" element={<h1 className='text-center'>Pages not found</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default withContextBook()(App)