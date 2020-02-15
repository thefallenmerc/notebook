import store from "../store/store";
import { endpoint, handleResponse } from "./HttpService";

export default {
    getNote: () => {
        const user = store.getState().user;
        if (!user) {
            return Promise.resolve({
                status: 200,
                message: 'Fetched  from localstorage',
                body: JSON.parse(localStorage.getItem('notes')) || []
            });
        } else {

            return fetch(endpoint.base + endpoint.note, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            })
                .then(handleResponse)
        }
    },
    addNote: note => {
        const user = store.getState().user;
        if (!user) {
            return Promise.resolve({
                status: 200,
                message: 'Fetched  from localstorage',
                body: JSON.parse(localStorage.getItem('notes')) || []
            })
        } else {
            const body = new FormData();
            for (const key in note) {
                if (note.hasOwnProperty(key)) {
                    body.append(key, note[key]);
                }
            }
            return fetch(endpoint.base + endpoint.note, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body
            })
                .then(handleResponse);
        }
    },
    editNote: note => {
        const user = store.getState().user;
        if (!user) {
            return Promise.resolve({
                status: 200,
                message: 'Fetched from localstorage',
                body: JSON.parse(localStorage.getItem('notes')) || []
            })
        } else {
            const body = new FormData();
            for (const key in note) {
                if (note.hasOwnProperty(key)) {
                    body.append(key, note[key]);
                }
            }
            return fetch(endpoint.base + endpoint.note + '/' + note.id, {
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${user.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(note),
                // mode: 'no-cors'
            })
                .then(handleResponse);
        }
    },
    deleteNote: id => {
        const user = store.getState().user;
        if (!user) {
            return Promise.resolve({
                status: 200,
                message: 'Fetched  from localstorage',
                body: JSON.parse(localStorage.getItem('notes')) || []
            })
        } else {
            return fetch(endpoint.base + endpoint.note + '/' + id, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            })
                .then(handleResponse);
        }
    }
}