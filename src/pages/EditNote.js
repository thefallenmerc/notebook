import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

export default function EditNotePage(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const notes = (JSON.parse(localStorage.getItem('notes')) || []);
    const { match: { params: { id } } } = props;
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
        const noteIndex = notes.findIndex(note => note.id === parseInt(id));
        const updatedNote = { id: parseInt(id), title, description };
        notes.splice(noteIndex, 1, updatedNote);
        localStorage.setItem('notes', JSON.stringify(notes));
        props.setNotes(notes);
        setTitle('');
        setDescription('');
        props.history.push('/note/' + id);
    };

    return (
        <div>
            <div className="text-xl font-bold text-red-500 py-3 px-8 border-b border-red-300 uppercase">
                {note.title}
                <Link to={"/note/" + note.id} className="float-right uppercase rounded text-white bg-red-500 hover:bg-red-600 text-sm py-1 px-2 cursor-pointer">Back</Link>
            </div>
            <div className="p-8">
                <input placeholder="Title" onChange={updateTitle} value={title} className="block mb-3 border-red-300 border w-full px-2 py-1" />
                <textarea
                    placeholder="Description"
                    onChange={updateDescription}
                    value={description}
                    className="block mb-3 border-red-300 border w-full px-2 py-1"
                    style={{ minHeight: '15rem' }}
                />
                <button onClick={saveNote} className="rounded px-10 py-1 uppercase block bg-red-500 text-white hover:bg-red-600">Save</button>
            </div>
        </div>
    )
}