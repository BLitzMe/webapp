import {createStore, combineReducers} from "redux";

import VanillaReducer from "./reducers/VanillaReducer"


export default createStore(
    combineReducers({vR: VanillaReducer}),
    {},

);
