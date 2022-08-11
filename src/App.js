/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Journal, Contact, Manifesto, Home } from './pages';
import { Footer, Auth, Header, Login, JournalDetails, AddJournal } from './components';
import Navbar from './components/marginals/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/manifesto'>
          <Manifesto />
        </Route>
        <Route path='/journal'>
          <Journal />
        </Route>
        <Route path='/addjournal'>
          <AddJournal />
        </Route>
        <Route path='/policy/:id'>
          <JournalDetails />
        </Route>
        <Route path='/Signup'>
          <Auth />
        </Route>
        <Route path='/Login'>
          <Login />
        </Route>
        <Redirect to='/' />
      </Switch>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
