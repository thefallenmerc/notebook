import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import DashboardPage from './pages/Dashboard';
import NewNotePage from './pages/NewNote';
import EditNotePage from './pages/EditNote';

import './styles/tailwind.css';
import './App.scss';

import loader from './loader.gif';

import { connect } from 'react-redux';
import { STATE_PENDING } from './store/actions';

const App = ({ state, user }) => {

  return (
    state === STATE_PENDING
      ?
      <div className="w-screen h-screen flex justify-center items-center">
        {/* <div className="w-10 h-10 border-2 border-l-0 border-gray-400 rounded-full spin"></div> */}
        <img src={loader} alt="loading" className="loader" />
      </div>
      :
      <div>
        {
          user ? <Sidebar /> : ''
        }
        <div className={"mainContainer" + (user ? '' : ' guest')}>
          {
            user
              ?
              <Switch>
                <Route path="/new" exact render={props => <NewNotePage />} />
                <Route path="/note/:id" exact render={props => <EditNotePage {...props} />} />
                <Route path="/" render={props => <DashboardPage />} />
              </Switch>
              :
              <Switch>
                <Route path="/" render={props => <DashboardPage />} />
              </Switch>
          }
        </div>
      </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state.state,
    user: state.user
  };
}

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);