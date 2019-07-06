import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {homeReducer} from "./reducers/homeReducer";

const rootReducer = combineReducers({
    homeReducer: homeReducer
});

const store= createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export {store}
