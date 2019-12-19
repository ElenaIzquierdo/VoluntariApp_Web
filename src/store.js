import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {homeReducer} from "./reducers/homeReducer";
import {eventsReducer} from "./reducers/eventsReducer";
import {forumReducer} from "./reducers/forumReducer";
import {viewforumthemeReducer} from "./reducers/viewforumthemeReducer"
import {tutoriesReducer} from "./reducers/tutoriesReducer";
import {centreInteresReducer} from "./reducers/centreInteresReducer";
import { createForumTopicReducer } from './reducers/createForumTopicReducer';

const rootReducer = combineReducers({
    homeReducer: homeReducer,
    eventsReducer: eventsReducer,
    forumReducer: forumReducer,
    viewforumReducer: viewforumthemeReducer,
    tutoriesReducer: tutoriesReducer,
    centreInteresReducer: centreInteresReducer,
    createForumTopicReducer: createForumTopicReducer
});

const store= createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export {store}
