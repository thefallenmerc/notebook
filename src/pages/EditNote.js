import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editNote, deleteNote } from '../store/actions';

const EditNotePage = ({ notes, match, history, editNote, deleteNote }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const { params: { id } } = match;
    const note = notes.find(note => note.id === parseInt(id));

    useEffect(() => {
        setTitle(note.title);
        setDescription(note.description);
    }, [note.title, note.description]);

    const updateTitle = (event) => {
        setTitle(event.target.value);
    }

    const updateDescription = event => {
        setDescription(event.target.value);
    }

    const saveNote = () => {
        const updatedNote = { id: parseInt(id), title, description };
        editNote(updatedNote);
    };

    const removeNote = () => {
        deleteNote(id);
        history.push('/');
    };

    return (
        <div>
            <div className="py-3 px-8 border-b border-red-300">
                <input
                    placeholder="Title"
                    onChange={updateTitle}
                    value={title}
                    className="text-xl font-bold text-red-500 focus:outline-none"
                    style={{ width: 'calc(100% - 120px)' }}
                />
                <button onClick={removeNote} className="float-right uppercase rounded text-white bg-red-500 hover:bg-red-600 text-sm py-1 px-2 cursor-pointer">Delete</button>
                <button onClick={saveNote} className="float-right uppercase rounded text-white bg-green-500 hover:bg-green-600 text-sm py-1 px-2 cursor-pointer mr-1">Save</button>
            </div>
            <div className="p-8 flex" style={{height: "calc(100vh - 55px)"}}>
                <textarea
                    placeholder="Please write some description..."
                    onChange={updateDescription}
                    value={description}
                    className="block mb-3 w-full h-full px-2 py-1 focus:outline-none"
                    style={{ minHeight: '15rem', resize: "none" }}
                />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    notes: state.notes
});

const mapDispatchToProps = dispatch => {
    return {
        editNote: notes => dispatch(editNote(notes)),
        deleteNote: id => dispatch(deleteNote(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNotePage);