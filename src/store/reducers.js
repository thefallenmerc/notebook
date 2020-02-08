import  { ADD_NOTE, SET_NOTES, EDIT_NOTE, GET_NOTE } from './actions';
import { combineReducers } from 'redux';

const initialState = {
    notes: []
};

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