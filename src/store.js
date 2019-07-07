import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {homeReducer} from "./reducers/homeReducer";
import {eventsReducer} from "./reducers/eventsReducer";

const rootReducer = combineReducers({
    homeReducer: homeReducer,
    eventsReducer: eventsReducer,
});

const store= createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export {store}
