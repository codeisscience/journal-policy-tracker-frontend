/* eslint-disable array-callback-return */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { React } from 'react';

// Libraries
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { format } from 'date-fns';
import { onError } from '@apollo/client/link/error';
// import * as dotenv from 'dotenv';

// Styles
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Profile from './components/Authentication/User-Profile/useprofile';
import { Journal, Manifesto, Home } from './pages';
import { Footer, Auth, Header, Login, JournalDetails, AddJournal, Layout } from './components';
import Navbar from './components/marginals/Navbar/Navbar';
import Edit from './components/EditJournal/Edit';

// Context
import { DataProvider } from './context/DataContext';

// React-Apollo setup
const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: process.env.REACT_APP_PUBLIC_API_URL, credentials: 'include' }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  // credentials: 'include',
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
            <Route path='/journal'>
              <Journal />
            </Route>
            <Route exact path='/addjournal'>
              <AddJournal />
            </Route>
            <Route path='/edit/:issn'>
              <Edit />
            </Route>
            <Route path='/policy/:issn'>
              <JournalDetails />
            </Route>
            <Route path='/Signup'>
              <Auth />
            </Route>
            <Route path='/Login'>
              <Login />
            </Route>
            <Route path='/profile'>
              <Profile />
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
