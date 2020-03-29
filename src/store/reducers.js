import { ADD_NOTE, SET_NOTES, EDIT_NOTE, DELETE_NOTE, SET_USER, STATE_SUCCESS, STATE_ERROR, STATE_PENDING, ADD_FIREBASE, GET_NOTE_LISTENER } from './actions';
import { combineReducers } from 'redux';

// const initialState = {
//     notes: []
// };

function notes(state = [], action) {
    switch (action.type) {
        case ADD_NOTE:
            return [
                ...state,
                action.note
            ]
        case EDIT_NOTE:
            const newState = [
                ...state
            ];
            const index = newState.findIndex(note => note.id === parseInt(action.note.id));
            newState.splice(index, 1, action.note);
            return newState;
        case DELETE_NOTE:
            const newState2 = [
                ...state
            ];
            const index2 = newState2.findIndex(note => note.id === parseInt(action.id));
            newState2.splice(index2, 1);
            return newState2;
        case SET_NOTES:
            return action.notes;
        default:
            return state;
    }
}

function user(state = null, action) {
    switch (action.type) {
        case SET_USER:
            return action.user;
        default:
            return state;
    }
}

function noteListener(state = null, action) {
    switch (action.type) {
        case GET_NOTE_LISTENER:
            return action.listener;
        default:
            return state;
    }
}

function firebase(state = null, action) {
    switch (action.type) {
        case ADD_FIREBASE:
            return action.firebase;
        default:
            return state;
    }
}

function state(state = STATE_SUCCESS, action) {
    switch (action.type) {
        case STATE_SUCCESS:
            return STATE_SUCCESS;
        case STATE_ERROR:
            return STATE_ERROR;
        case STATE_PENDING:
            return STATE_PENDING;
        default:
            return STATE_SUCCESS;
    }
}

const notebook = combineReducers({
    user,
    notes,
    state,
    firebase,
    noteListener
});

export default notebook;

// function notebook(state = initialState, action) {
//     return {
//         notes: notes(state.notes, action)
//     };
// }