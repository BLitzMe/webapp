import {createStore, applyMiddleware, combineReducers} from "redux";
import logger from "redux-logger";


export default createStore(
    combineReducers({}),
    {},
    applyMiddleware(logger())
);
