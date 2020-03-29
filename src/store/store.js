
// import { mainMiddleware } from './middlewares';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

let composeEnhancers;
const middlewares = [thunk];
if(process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    middlewares.push(logger);
} else {
    composeEnhancers = compose;
}
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middlewares)));

export default store;