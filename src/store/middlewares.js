import { ADD_NOTE, EDIT_NOTE } from "./actions";

export const mainMiddleware = store => next => action => {
    next(action);
    const { notes } = store.getState();
    switch (action.type) {
        case ADD_NOTE:
            localStorage.setItem('notes', JSON.stringify(notes));
            break;

        case EDIT_NOTE:
            localStorage.setItem('notes', JSON.stringify(notes));
            break;
        default:
            break;
    }
}