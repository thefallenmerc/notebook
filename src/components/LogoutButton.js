import React from 'react';
import { FirebaseContext } from '../contexts';

export function LogoutButton() {
    return (
        <FirebaseContext.Consumer>
            {
                firebase => {

                    return (
                        <button 
                        onClick={() => {
                            firebase.auth.signOut();
                            console.log(firebase.auth);
                        }}
                        className="LogoutButton px-3 py-1 bg-red-500 hover:bg-red-600 text-white uppercase rounded focus:outline-none block mx-auto">
                            Logout
                        </button>
                    )
                }
            }
        </FirebaseContext.Consumer>

    )
}