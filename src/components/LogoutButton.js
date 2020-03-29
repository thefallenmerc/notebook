import React from 'react';
import {connect} from 'react-redux';
import { logout } from '../store/reducers/auth';
import { bindActionCreators } from 'redux';

function LogoutButtonComponent({firebase, doLogout}) {

    return (
        <button
            onClick={() => {
                doLogout();
            }}
            className="LogoutButton px-3 py-1 bg-red-500 hover:bg-red-600 text-white uppercase rounded focus:outline-none block mx-auto">
            Logout
        </button>
    )
}

export const LogoutButton = connect(state => ({
    firebase: state.firebase
}), dispatch => bindActionCreators({
    doLogout: logout
}, dispatch))(LogoutButtonComponent)