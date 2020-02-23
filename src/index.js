import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setUser } from './store/actions';
import store from './store/store';
import { getNotes } from './store/reducers/notes';

store.dispatch(setUser(JSON.parse(localStorage.getItem('user')) || null));
store.dispatch(getNotes());

ReactDOM.render(
    <Provider store={store}>
        {
            window.location.hostname.indexOf('github.io') >= 0
                ?
                <HashRouter>
                    <App />
                </HashRouter>
                :
                <BrowserRouter>
                    <App />
                </BrowserRouter>
        }
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
