/* eslint-disable array-callback-return */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { React } from 'react';

// Libraries
import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { Route, Routes } from 'react-router-dom';
// import * as dotenv from 'dotenv';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Components
import { AddJournal, Auth, Footer, JournalDetails, Layout, Login } from './components';
import Profile from './components/Authentication/User-Profile/useprofile';
import Edit from './components/EditJournal/Edit';
import { Home, Journal } from './pages';

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
  new HttpLink({ uri: 'http://localhost:4000/graphql', credentials: 'include' }),
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
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/journal' element={<Journal />} />
            <Route exact path='/addJournal' element={<AddJournal />} />
            <Route path='/edit/:issn' element={<Edit />} />
            <Route path='/policy/:issn' element={<JournalDetails />} />
            <Route path='/Signup' element={<Auth />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
          <Footer />
        </DataProvider>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
