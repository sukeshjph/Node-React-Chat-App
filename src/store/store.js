import { createStore,combineReducers, applyMiddleware } from 'redux';
//import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import messages from './../reducers/messageReducer';
import members from './../reducers/membersReducer';

export const store = createStore(combineReducers({messages,members}), {}, applyMiddleware(thunk));

