import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import VanillaReducer from "./reducers/VanillaReducer"
import rp from "redux-promise"
import logger from "redux-logger"


export default createStore(
    combineReducers({vR: VanillaReducer}),
    {},
    applyMiddleware(thunk, rp,logger)


);
