import React, {Component} from "react";
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import withContextBook from "../hoc";
import {booksLoaded} from "../../actions";
import {compose} from "redux";

class BookList extends Component{
    componentDidMount() {
        const {bookService} = this.props;
        const data = bookService.getBooks();
        this.props.booksLoaded(data);
    }

    render() {
        const {books} = this.props;
        return(
            <ul>
                {
                    books.map((book) => {
                        return(
                            <li key={book.id}><BookListItem book={book}/></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({books}) => {
    return {books}
};

const mapDispatchToProps = {
    booksLoaded
}

export default compose(
    withContextBook(),
    connect(mapStateToProps, mapDispatchToProps)
) (BookList)
