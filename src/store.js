import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers";

const logMiddleware = () => (next) => (action) => {
    console.log(action.type);
    return next(action);
}

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string'){
        return next({
            type: action
        })
    }

    return next(action)
}

const store = createStore(reducers, applyMiddleware(stringMiddleware, logMiddleware));

export default store;