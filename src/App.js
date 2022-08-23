/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import { api } from './api/posts';
import { Journal, Contact, Manifesto, Home } from './pages';
import { Footer, Auth, Header, Login, JournalDetails, AddJournal } from './components';
import Navbar from './components/marginals/Navbar/Navbar';
import Edit from './components/EditJournal/Edit';
import useAxiosFetch from './hooks/useAxiosFetch';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className='App'>
      <DataProvider>
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
          <Route exact path='/addjournal'>
            <AddJournal />
          </Route>
          <Route path='/edit/:id'>
            <Edit />
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
      </DataProvider>
    </div>
  );
}

export default App;
