import { setStatePending, setStateSuccess, setStateError, setNotes, addNote as AddNoteAction, editNote as editNoteAction, deleteNote as deleteNoteAction, getNoteListener } from "../actions"

export const getNotes = dispatch => {
    return (dispatch, getState) => {
        dispatch(setStatePending());
        const { firebase, user } = getState();
        if (user) {
            const listener = firebase.db.collection('users').doc(firebase.auth.currentUser.uid).collection('notes').orderBy('title').onSnapshot(snapshots => {
                const notes = [];
                snapshots.forEach(e => {
                    notes.push({ ...e.data(), uid: e.id });
                })
                dispatch(setNotes(notes));
                dispatch(setStateSuccess());
            })
            dispatch(getNoteListener(listener));
        }
        else return;
    }
}

export const addNote = note => {
    return (dispatch, getState) => {
        dispatch(setStatePending());
        const { firebase, user } = getState();
        if (user) {
            return firebase.db.collection('users').doc(firebase.auth.currentUser.uid).collection('notes').add(note)
                .then(response => {
                    console.log(response);
                    dispatch(setStateSuccess());
                })
                .catch(error => {
                    console.log({ error });
                    dispatch(setStateError());
                });

        } else return;
    }
}

export const editNote = note => {
    return (dispatch, getState) => {
        dispatch(setStatePending());
        const { firebase, user } = getState();
        if (user) {
            firebase.db.collection('users').doc(firebase.auth.currentUser.uid).collection('notes').doc(note.uid).set(note)
                .then(response => {
                    console.log(response);
                    dispatch(setStateSuccess());
                })
                .catch(error => {
                    console.log({ error });
                    dispatch(setStateError());
                });
        } else return;
    }
}

export const deleteNote = uid => {
    return (dispatch, getState) => {
        dispatch(setStatePending());
        const { firebase, user } = getState();
        if(user) {
            firebase.db.collection('users').doc(firebase.auth.currentUser.uid).collection('notes').doc(uid).delete();
        }
    }
}