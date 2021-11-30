import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import withContextBook from "../hoc/with-context-book";
import HomePage from "../pages/home-page";
import CardPage from "../pages/card-page";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="card" element={<CardPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default withContextBook()(App)