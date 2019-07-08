import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {homeReducer} from "./reducers/homeReducer";
import {eventsReducer} from "./reducers/eventsReducer";
import {forumReducer} from "./reducers/forumReducer";

const rootReducer = combineReducers({
    homeReducer: homeReducer,
    eventsReducer: eventsReducer,
    forumReducer: forumReducer,
});

const store= createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export {store}
