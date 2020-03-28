
// import { mainMiddleware } from './middlewares';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = thunk;
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(middlewares, logger)));

export default store;