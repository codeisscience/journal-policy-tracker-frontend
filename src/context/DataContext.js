/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

import { createContext, React, useContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  // JournalList
  searchResults: [],
  search: '',
  currentPage: 1,
  postsPerPage: 5,
  posts: [],
  title: '',
  topic: '',
  issn: '',
  link: '',
  policy: 'NUMBER_ONE',
  dataavail: false,
  datashared: false,
  peerreview: false,
  enforced: 'YES',
  evidence: '',
  policyTitle: '',
};

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataContext.Provider
      value={{
        searchResults: state.searchResults,
        search: state.search,
        currentPage: state.currentPage,
        postsPerPage: state.postsPerPage,
        posts: state.posts,
        title: state.title,
        topic: state.topic,
        issn: state.issn,
        link: state.link,
        policy: state.policy,
        dataavail: state.dataavail,
        datashared: state.datashared,
        peerreview: state.peerreview,
        enforced: state.enforced,
        evidence: state.evidence,
        policyTitle: state.policyTitle,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// custom hook
const useGlobalContext = () => {
  return useContext(DataContext);
};

export { DataContext, DataProvider, useGlobalContext };
