import React, { useState } from 'react';

export default function NewNotePage(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const updateTitle = (event) => {
        setTitle(event.target.value);
    }

    const updateDescription = event => {
        setDescription(event.target.value);
    }

    const addNote = () => {
        const notes = (JSON.parse(localStorage.getItem('notes')) || []);
        const note = { id: (new Date()).getTime(), title, description };
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
        props.setNotes(notes);
        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <div className="text-xl font-bold text-red-500 py-3 px-8 border-b border-red-300">Add a new note</div>
            <div className="p-8">
                <input placeholder="Title" onChange={updateTitle} value={title} className="block mb-3 border-red-300 border w-full px-2 py-1" />
                <textarea
                    placeholder="Description"
                    onChange={updateDescription}
                    value={description}
                    className="block mb-3 border-red-300 border w-full px-2 py-1"
                    style={{ minHeight: '15rem' }}
                />
                <button onClick={addNote} className="rounded px-10 py-1 uppercase block bg-red-500 text-white hover:bg-red-600">Add</button>
            </div>
        </div>
    )
}