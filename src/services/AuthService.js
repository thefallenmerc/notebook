import { endpoint, handleResponse } from "./HttpService";

export default {
    endpoint,
    login: (credentials) => {
        return fetch(endpoint.base + endpoint.auth, {
            method: 'post',
            body: credentials
        }).then(handleResponse);
    },
    saveUser: user => {
        localStorage.setItem('user', JSON.stringify(user));
    },
    removeUser: () => {
        localStorage.removeItem('user');
    },

}