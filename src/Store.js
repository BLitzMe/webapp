import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import VanillaReducer from "./reducers/VanillaReducer";
import rp from "redux-promise";
import logger from "redux-logger";
import ToggleReducer from "./reducers/ToggleReducer";
import NewPostReducer from "./reducers/NewPostReducer"

export default createStore(
  combineReducers({
    vR: VanillaReducer,
    tR: ToggleReducer,
    npR: NewPostReducer
  }),
  {},
  applyMiddleware(thunk, rp, logger)
);
