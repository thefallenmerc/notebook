import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/Dashboard';
import NewNotePage from './pages/NewNote';

import './styles/tailwind.css';
import './App.scss';
import EditNotePage from './pages/EditNote';
import { connect } from 'react-redux';
import { setNotes } from './store/actions';

const App = ({ dispatch }) => {

  dispatch(setNotes(JSON.parse(localStorage.getItem('notes')) || []));

  return (
    <div>
      <Sidebar />
      <div className="mainContainer">
        <Switch>
          <Route path="/" exact render={props => <DashboardPage />} />
          <Route path="/new" exact render={props => <NewNotePage />} />
          <Route path="/note/:id" exact render={props => <EditNotePage {...props} />} />
        </Switch>
      </div>
    </div>
  );
}

export default connect(state => {
  return {};
})(App);