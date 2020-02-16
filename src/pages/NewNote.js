import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../store/reducers/notes';
import { bindActionCreators } from 'redux';

const NewNotePage = ({ notes, addNote }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const updateTitle = (event) => {
        setTitle(event.target.value);
    }

    const updateDescription = event => {
        setDescription(event.target.value);
    }

    const saveNote = () => {
        if (!title.trim()) {
            return;
        }
        const note = { id: (new Date()).getTime(), title, description };
        addNote(note);
        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <div className="py-3 px-8 border-b border-red-300">
                <input
                    placeholder="Please enter a title..."
                    onChange={updateTitle}
                    value={title}
                    className="text-xl font-bold text-red-500 focus:outline-none"
                    tabIndex="0"
                    style={{ width: 'calc(100% - 50px)' }}
                />
                <button onClick={saveNote} tabIndex="3" className="float-right uppercase rounded text-white bg-red-500 hover:bg-red-600 text-sm py-1 px-2 cursor-pointer">Save</button>
            </div>
            <div className="p-8" style={{ height: "calc(100vh - 55px)" }}>
                <textarea
                    placeholder="Please write some description..."
                    onChange={updateDescription}
                    value={description}
                    tabIndex="2"
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

const mapDispatchToProps = dispatch => bindActionCreators({
    addNote: addNote
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewNotePage);