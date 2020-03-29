// action types

export const GET_NOTE_LISTENER = 'GET_NOTE_LISTENER';
export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const SET_NOTES = 'SET_NOTES';

export const SET_USER = 'SET_USER';

export const STATE_PENDING = 'STATE_PENDING';
export const STATE_SUCCESS = 'STATE_SUCCESS';
export const STATE_ERROR = 'STATE_ERROR';

export const ADD_FIREBASE = 'ADD_FIREBASE';


// action creators

export function addFirebase(firebase) {
    return { type: ADD_FIREBASE, firebase };
}

export function getNoteListener(listener) {
    return { type: GET_NOTE_LISTENER, listener };
}

export function addNote(note) {
    return { type: ADD_NOTE, note };
}

export function editNote(note) {
    return { type: EDIT_NOTE, note };
}

export function deleteNote(id) {
    return { type: DELETE_NOTE, id };
}

export function setNotes(notes) {
    return { type: SET_NOTES, notes };
}


export function setUser(user) {
    return { type: SET_USER, user };
}

export function setStatePending() {
    return { type: STATE_PENDING };
}

export function setStateSuccess() {
    return { type: STATE_SUCCESS };
}

export function setStateError() {
    return { type: STATE_ERROR };
}
