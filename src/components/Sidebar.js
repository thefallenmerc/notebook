import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Sidebar = ({ noteList }) => {

    const [query, setQuery] = useState('');
    const [notes, setNotes] = useState(noteList);
    const [mobileSidebarVisibility, setMobileSidebarVisibility] = useState(false);

    useEffect(_ => {
        setNotes(noteList);
    }, [noteList])

    const search = event => {
        const searchQuery = event.target.value;
        setQuery(searchQuery);
        if (searchQuery.length === 0) {
            return setNotes(noteList);
        }
        return setNotes(noteList.filter(note => {
            return note.title.toLowerCase().includes(event.target.value.toLowerCase());
        }));
    };

    const clearIfEscape = event => {
        if (event.key === 'Escape') {
            setQuery('');
            return setNotes(noteList);
        }
    }

    return (
        <section className={"sideBar" + (mobileSidebarVisibility ? "" : " not-visible")}>
            <div className="logo font-bold p-3 text-xl uppercase">
                <Link to="/" onClick={() => { setMobileSidebarVisibility(false) }} className="cursor-pointer text-red-500">Notebook</Link>
                <span onClick={() => { setMobileSidebarVisibility(!mobileSidebarVisibility) }} className="md:hidden block float-right px-3 ml-2 rounded text-white bg-red-500 hover:bg-red-600 text-sm py-1 px-2 cursor-pointer">&#8942;</span>
                <Link to="/new" onClick={() => { setMobileSidebarVisibility(false) }} className="float-right rounded text-white bg-red-500 hover:bg-red-600 text-sm py-1 px-2 cursor-pointer">New</Link>
            </div>
            <input
                placeholder="Search"
                className="md:block hidden border-red-300 border-t border-b border-r-0 border-l-0 focus:outline-none"
                onChange={search}
                onKeyUp={clearIfEscape}
                value={query} />
            <div className="py-2 sidebarLinkContainer">
                {
                    notes.map(note => {
                        return <Link to={"/note/" + note.id} key={note.id} onClick={() => { setMobileSidebarVisibility(false) }} className="p-2 hover:bg-red-500 hover:text-white cursor-pointer block">{note.title}</Link>;
                    })
                }
            </div>
        </section>
    );
}

const mapStateToProps = state => {
    return ({
        noteList: state.notes
    });
};

export default connect(mapStateToProps)(Sidebar);