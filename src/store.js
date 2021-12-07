import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
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

const store = createStore(reducers, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware));

const delayedActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => dispatch({
        type: 'DELAYED_ACTION'
    }), timeout)
}

store.dispatch(delayedActionCreator(4000))

export default store;