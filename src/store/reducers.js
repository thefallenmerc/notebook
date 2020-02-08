import  { ADD_NOTE, SET_NOTES, EDIT_NOTE, DELETE_NOTE } from './actions';
import { combineReducers } from 'redux';

// const initialState = {
//     notes: []
// };

function notes(state = [], action) {
    switch(action.type) {
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

const notebook = combineReducers({
    notes
});

export default notebook;

// function notebook(state = initialState, action) {
//     return {
//         notes: notes(state.notes, action)
//     };
// }