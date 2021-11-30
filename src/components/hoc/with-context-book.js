import React from "react";
import {ContextBookConsumer} from "../context/context-book";

const withContextBook = () => (Wrapped) => {
  return (props) => {
      return (
          <ContextBookConsumer>
              {
                  (bookService) => {
                      return (
                          <Wrapped {...props}
                               bookService = {bookService}/>
                      )
                  }
              }
          </ContextBookConsumer>
      );
  }
};

export default withContextBook;