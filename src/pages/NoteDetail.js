import React from 'react';
import { Link } from 'react-router-dom';

export default function NoteDetailPage(props) {
    const notes = (JSON.parse(localStorage.getItem('notes')) || []);
    const { match: { params: { id } } } = props;
    const note = notes.find(note => note.id === parseInt(id));

    const deleteNote = () => {
    }

    return (
        <div>
            <div className="text-xl font-bold text-red-500 py-3 px-8 border-b border-red-300 uppercase">
                {note.title}
                <Link to={"/edit/" + note.id} className="float-right uppercase rounded text-white bg-green-500 hover:bg-red-600 text-sm py-1 px-2 cursor-pointer">Edit</Link>
                <span onClick={deleteNote} className="float-right uppercase rounded text-white bg-red-500 hover:bg-red-600 text-sm py-1 px-2 cursor-pointer mr-2">Delete</span>
            </div>
            <pre className="p-8 font-sans">{note.description}</pre>
        </div>
    )
}