import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import ErrorBoundry from "./components/errors/error-boundry";
import BookService from "./services/book-service";
import {ContextBookProvider} from "./components/context/context-book";
import store from "./store";
import App from "./components/app";
import './index.css'
const bookService = new BookService();

ReactDOM.render(
  <Provider store={store}>
      <ErrorBoundry>
          <ContextBookProvider value={bookService}>
              <App/>
          </ContextBookProvider>
      </ErrorBoundry>
  </Provider>,
    document.getElementById('root')
);