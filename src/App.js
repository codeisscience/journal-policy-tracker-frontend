/* eslint-disable array-callback-return */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import { api } from './api/posts';
import { Journal, Contact, Manifesto, Home } from './pages';
import { Footer, Auth, Header, Login, JournalDetails, AddJournal, Layout } from './components';
import Navbar from './components/marginals/Navbar/Navbar';
import Edit from './components/EditJournal/Edit';
import useAxiosFetch from './hooks/useAxiosFetch';
import { DataProvider } from './context/DataContext';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: 'http://localhost:4000/graphql' })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
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
          <Footer />
        </DataProvider>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
