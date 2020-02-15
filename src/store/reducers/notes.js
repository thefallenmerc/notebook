import { setStatePending, setStateSuccess, setStateError, setNotes, addNote as AddNoteAction, editNote as editNoteAction, deleteNote as deleteNoteAction } from "../actions"
import NoteService from "../../services/NoteService";

export const getNotes = dispatch => {
    return dispatch => {
        dispatch(setStatePending());
        NoteService.getNote()
            .then(response => {
                if (response.status === 200) {
                    dispatch(setNotes(response.body));
                    dispatch(setStateSuccess());
                } else {
                    throw new Error('failed fetch!')
                }
            })
            .catch(err => {
                dispatch(setStateError());
            })
    }
}

export const addNote = note => {
    return dispatch => {
        dispatch(setStatePending());
        NoteService.addNote(note)
            .then(response => {
                if (response.status === 200) {
                    dispatch(AddNoteAction(response.body));
                    dispatch(setStateSuccess());
                } else {
                    throw new Error('failed fetch!');
                }
            })
            .catch(err => {
                dispatch(setStateError());
            });
    }
}

export const editNote = note => {
    return dispatch => {
        dispatch(setStatePending());
        NoteService.editNote(note)
            .then(response => {
                if (response.status === 200) {
                    dispatch(editNoteAction(response.body));
                    dispatch(setStateSuccess());
                } else {
                    throw new Error('failed fetch!');
                }
            })
            .catch(err => {
                dispatch(setStateError());
            });
    }
}

export const deleteNote = note => {
    return dispatch => {
        dispatch(setStatePending());
        NoteService.deleteNote(note)
            .then(response => {
                if (response.status === 200) {
                    dispatch(deleteNoteAction(response.body.id));
                    dispatch(setStateSuccess());
                } else {
                    throw new Error('failed fetch!');
                }
            })
            .catch(err => {
                dispatch(setStateError());
            });
    }
}