import { setStatePending, setStateSuccess, setStateError, setUser } from "../actions"
import AuthService from "../../services/AuthService";
import { getNotes } from "./notes";

export const login = ({ email, password }) => {
    return dispatch => {
        dispatch(setStatePending());
        const form = new FormData();
        form.append('email', email);
        form.append('password', password);
        return AuthService.login(form)
            .then(response => {
                switch (response.status) {
                    case 200:
                        return AuthService.saveUser(response.body)
                            .then(() => {
                                return Promise.resolve(dispatch(setUser(response.body)))
                                    .then(Promise.resolve(dispatch(getNotes())))
                                    .then(Promise.resolve(dispatch(setStateSuccess())))
                                    .then(() => {
                                        return { emailError: '', passwordError: '' };
                                    });
                            });
                    case 422:
                        const formError = {};
                        if ('email' in response.body) {
                            formError.emailError = response.body.email[0];
                        } else {
                            formError.emailError = '';
                        }
                        if ('password' in response.body) {
                            formError.passwordError = response.body.password[0];
                        } else {
                            formError.passwordError = '';
                        }
                        dispatch(setStateError());
                        return Promise.resolve(formError);
                    default:
                        dispatch(setStateError());
                        return Promise.resolve({ emailError: '', passwordError: '' });
                };
            })
            .catch(err => {
                dispatch(setStateError());
                return Promise.resolve({ emailError: '', passwordError: '' });
            });

    }
}

export const logout = () => {
    return dispatch => {
        AuthService.removeUser()
            .then(_ => {
                dispatch(setUser(null));
                dispatch(getNotes());
            });
    }
}