import { setStatePending, setStateSuccess, setStateError, setUser } from "../actions"
import { getNotes } from "./notes";

export const login = ({ email, password }) => {
    return (dispatch, getState) => {
        dispatch(setStatePending());
        const { firebase } = getState();
        return firebase.auth.signInWithEmailAndPassword(email, password)
        .then(response => {
            dispatch(setStateSuccess('Login Successful!'));
            return response;
        })
        .catch(error => {
            dispatch(setStateError(error.message));
            return error;
        });
    }
}

export const logout = () => {
    // return dispatch => firebase.auth.signOut()
}