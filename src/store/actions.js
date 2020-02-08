// action types

export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const SET_NOTES = 'SET_NOTES';
export const GET_NOTE = 'GET_NOTE';


// action creators

export function addNote(note) {
    return { type: ADD_NOTE, note };
}

export function editNote(note) {
    return { type: EDIT_NOTE, note };
}

export function setNotes(notes) {
    return { type: SET_NOTES, notes };
}
