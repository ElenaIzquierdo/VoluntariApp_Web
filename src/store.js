import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {homeReducer} from "./reducers/homeReducer";
import {eventsReducer} from "./reducers/eventsReducer";
import {forumReducer} from "./reducers/forumReducer";
import {viewforumthemeReducer} from "./reducers/viewforumthemeReducer"
import {tutoriesReducer} from "./reducers/tutoriesReducer";
import {centreInteresReducer} from "./reducers/centreInteresReducer";
import { createForumTopicReducer } from './reducers/createForumTopicReducer';
import { weekReducer } from './reducers/weekReducer';
import { loginReducer } from './reducers/loginReducer';
import { createEventReducer } from './reducers/createEventReducer';
import { avaluacioReducer } from './reducers/avaluacioReducer';

const rootReducer = combineReducers({
    homeReducer: homeReducer,
    eventsReducer: eventsReducer,
    forumReducer: forumReducer,
    viewforumReducer: viewforumthemeReducer,
    tutoriesReducer: tutoriesReducer,
    centreInteresReducer: centreInteresReducer,
    createForumTopicReducer: createForumTopicReducer,
    weekReducer: weekReducer,
    loginReducer: loginReducer,
    createEventReducer: createEventReducer,
    avaluacioReducer: avaluacioReducer
});

const store= createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export {store}
