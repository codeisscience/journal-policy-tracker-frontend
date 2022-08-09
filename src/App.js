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
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/manifesto' component={Manifesto} />
        <Route path='/journal' component={Journal} />
        <Route path='/addjournal' component={AddJournal} />
        <Route path='/policy/:id'>
          <JournalDetails />
        </Route>
        <Route path='/contact' component={Contact} />
        <Route path='/Signup' component={Auth} />
        <Route path='/Login' component={Login} />
        <Redirect to='/' />
      </Switch>
      <Navbar />
      <Footer />
    </Router>
  );
}

export default App;
