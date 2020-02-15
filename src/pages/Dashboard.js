import React, { useState } from 'react';
import { connect } from 'react-redux';
import AuthService from '../services/AuthService';
import { setUser } from '../store/actions';
import { bindActionCreators } from 'redux';
import { getNotes } from '../store/reducers/notes';

function DashboardPage({ user, updateUser, fetchNotes }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const updateEmail = event => {
        setEmail(event.target.value);
    }

    const updatePassword = event => {
        setPassword(event.target.value);
    }

    const authenticate = event => {
        const form = new FormData();
        form.append('email', email);
        form.append('password', password);
        AuthService.login(form)
            .then(response => {
                switch (response.status) {
                    case 200:
                        setEmailError('');
                        setPasswordError('');
                        AuthService.saveUser(response.body);
                        updateUser(response.body);
                        fetchNotes();
                        break;
                    case 422:
                        if ('email' in response.body) {
                            setEmailError(response.body.email[0]);
                        } else {
                            setEmailError('');
                        }
                        if ('password' in response.body) {
                            setPasswordError(response.body.password[0]);
                        } else {
                            setPasswordError('');
                        }
                        break;
                    default:
                        break;
                };
            })
    }

    const logout = () => {
        AuthService.removeUser();
        updateUser(null);
        fetchNotes();
    }


    return (
        <div className=" flex justify-center items-center h-screen">
            <div>
                <div className="app-name text-4xl font-bold tracking-widest text-red-500 w-100 text-center mb-5" >Notebook</div>
                {
                    user
                        ?
                        <div className="text-center">
                            <div className="mb-5">Welcome, {user.name}</div>
                            <button
                             className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white uppercase rounded focus:outline-none block mx-auto"
                             onClick={logout}
                             >Logout</button>
                        </div>
                        :
                        <div className="">
                            {emailError ? <span className="text-red-500 text-xs">{emailError}</span> : ""}
                            <input
                                placeholder="Email"
                                value={email}
                                onChange={updateEmail}
                                type="email"
                                className="block py-2 w-64 focus:outline-none hover:bg-gray-100 focus:bg-gray-100 mb-3 mx-auto"
                            />
                            {passwordError ? <span className="text-red-500 text-xs">{passwordError}</span> : ""}
                            <input
                                placeholder="Password"
                                value={password}
                                onChange={updatePassword}
                                type="password"
                                className="block py-2 w-64 focus:outline-none hover:bg-gray-100 focus:bg-gray-100 mb-5 mx-auto"
                            />
                            <button
                                className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white uppercase rounded focus:outline-none block mx-auto mb-3"
                                onClick={authenticate}
                            >Login</button>
                            <span className="text-xs text-red-500 block text-center">Logging in will create account if not present already!</span>
                            <span className="text-xs text-red-500 block text-center">No verification required!</span>
                        </div>
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => bindActionCreators({
    updateUser: setUser,
    fetchNotes: getNotes
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);