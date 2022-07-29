/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Journal, Contact, Manifesto, Home } from './pages';
import { Footer, Auth, Header, Login, JournalDetails } from './components';
import Navbar from './components/marginals/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/manifesto' exact component={Manifesto} />
        <Route path='/journal' exact component={Journal} />
        <Route path='/policy/:id'>
          <JournalDetails />
        </Route>
        <Route path='/contact' exact component={Contact} />
        <Route path='/Signup' exact component={Auth} />
        <Route path='/Login' exact component={Login} />
        <Redirect to='/' />
      </Switch>
      <Navbar />
      <Footer />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
