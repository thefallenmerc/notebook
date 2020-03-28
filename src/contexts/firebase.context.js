
import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React from 'react';

const options = {
    apiKey: "AIzaSyDezX0ild3w9CddvSsQsetTFxd696shJsw",
    authDomain: "tfm-notebook.firebaseapp.com",
    databaseURL: "https://tfm-notebook.firebaseio.com",
    projectId: "tfm-notebook",
    storageBucket: "tfm-notebook.appspot.com",
    messagingSenderId: "191201051924",
    appId: "1:191201051924:web:5b2c8150c9bb5028596e01",
    measurementId: "G-8WDP1HP2FV"
};

class Firebase {
    constructor() {
        app.initializeApp(options);
        this.auth = app.auth();
        this.db = app.firestore();
    }
}

const FirebaseContext = React.createContext(null);

export { Firebase, FirebaseContext };