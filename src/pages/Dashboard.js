import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNotes } from '../store/reducers/notes';
import { login, logout } from '../store/reducers/auth';
import { STATE_ERROR } from '../store/actions';

function DashboardPage({ user, doLogin, doLogout, fetchNotes, state }) {

    const authenticate = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        doLogin({ email, password });
    }

    const logout = () => {
        doLogout();
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
                        <form className="" onSubmit={authenticate}>
                            {state === STATE_ERROR ? <span className="text-red-500 text-xs text-center w-full block mb-3">Please check your details!</span> : ""}
                            <input
                                placeholder="Email"
                                name="email"
                                type="email"
                                className="block py-2 w-64 focus:outline-none hover:bg-gray-100 focus:bg-gray-100 mb-3 mx-auto"
                            />
                            <input
                                placeholder="Password"
                                name="password"
                                type="password"
                                className="block py-2 w-64 focus:outline-none hover:bg-gray-100 focus:bg-gray-100 mb-5 mx-auto"
                            />
                            <button
                                className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white uppercase rounded focus:outline-none block mx-auto mb-3"
                                type="submit"
                            >Login</button>
                            <span className="text-xs text-red-500 block text-center">Logging in will create account if not present already!</span>
                            <span className="text-xs text-red-500 block text-center">No verification required!</span>
                        </form>
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user,
    state: state.state
});

const mapDispatchToProps = dispatch => bindActionCreators({
    doLogin: login,
    doLogout: logout,
    fetchNotes: getNotes,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);