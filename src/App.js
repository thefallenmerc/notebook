import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/Dashboard';
import NewNotePage from './pages/NewNote';

import './styles/tailwind.css';
import './App.scss';
import NoteDetailPage from './pages/NoteDetail';
import EditNotePage from './pages/EditNote';

const App = () => {

  const [notes, setNotes] = useState([]);

  useEffect(_ => {
    setNotes(JSON.parse(localStorage.getItem('notes')) || []);
  }, []);

  return (
    <div>
      <Sidebar notes={notes} />
      <div className="mainContainer">
        <Switch>
          <Route path="/" exact render={props => <DashboardPage {...props} notes={notes}/>} />
          <Route path="/new" exact render={props => <NewNotePage {...props} setNotes={setNotes} />} />
          <Route path="/note/:id" exact render={props => <NoteDetailPage {...props} />} />
          <Route path="/edit/:id" exact render={props => <EditNotePage {...props} setNotes={setNotes} />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;