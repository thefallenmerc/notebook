// action types

export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const SET_NOTES = 'SET_NOTES';

export const SET_USER = 'SET_USER';

export const STATE_PENDING = 'STATE_PENDING';
export const STATE_SUCCESS = 'STATE_SUCCESS';
export const STATE_ERROR = 'STATE_ERROR';


// action creators

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
