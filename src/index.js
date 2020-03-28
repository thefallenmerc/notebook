import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setUser, addFirebase, setStatePending } from './store/actions';
import store from './store/store';
import { getNotes } from './store/reducers/notes';
import { Firebase, FirebaseContext } from './contexts';

const firebase = new Firebase();

store.dispatch(setStatePending());
store.dispatch(addFirebase(firebase));


// listen to auth user state change
firebase.auth.onAuthStateChanged(user => {
    store.dispatch(setUser(user));
    if (user) {
        store.dispatch(getNotes());

        // Listen for notes update
        /* firebase.db.collection('users').doc(firebase.auth.currentUser.uid).collection('notes')
            .onSnapshot(snapshots => {
                // store.dispatch(get)
            }) */
    }
});


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
