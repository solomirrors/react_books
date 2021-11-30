import React from "react";
import withContextBook from "../hoc/with-context-book";
const App = ({bookService}) => {
    console.log(bookService.getBooks())
    return (
        <h1>
            App.js
        </h1>
    )
}

export default withContextBook()(App)