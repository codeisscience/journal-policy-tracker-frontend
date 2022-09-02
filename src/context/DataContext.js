/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

import { React, createContext, useState, useEffect, useContext, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { format } from 'date-fns';
import { useQuery } from '@apollo/client';
import { api } from '../components/api/posts';
import useAxiosFetch from '../hooks/useAxiosFetch';
import reducer from './reducer';
import query from '../graphql/queries/getAllJournals';

const initialState = {
  posts: [],
  currentPage: 1,
  search: '',
  searchResults: [],
  postsPerPage: 5,
  title: '',
  editTitle: '',
  authors: '',
  editAuthors: '',
  journaltype: '',
  editJournaltype: '',
  topic: '',
  editTopic: '',
  published: format(new Date(), 'MMMM dd, yyyyy pp'),
  issn: '',
  editIssn: '',
  link: '',
  editLink: '',
  policy: 'policy 1',
  editPolicy: 'policy 1',
  dataavail: false,
  editDataavail: false,
  datashared: false,
  editDatashared: false,
  peerreview: false,
  editPeerreview: false,
  enforced: '',
  editEnforced: '',
  evidence: '',
  editEvidence: '',
};

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const handleChangeData = (nextChecked) => {
    dispatch({
      type: 'SET_DATAAVAIL',
      payload: nextChecked,
    });
  };
  const handleChangeData2 = (nextChecked) => {
    dispatch({
      type: 'SET_DATASHARED',
      payload: nextChecked,
    });
  };
  const handleChangePeer = (nextChecked) => {
    dispatch({
      type: 'SET_PEERREVIEW',
      payload: nextChecked,
    });
  };
  const [isPending, setIsPending] = useState(false);

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const history = useHistory();

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = state.posts.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  // const { data } = useQuery(query, {
  //   variables: { currentPageNumber: 1, limitValue: 10 },
  // });

  // console.log(data);

  // const { data1, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/journals');
  // console.log(typeof data1);
  // console.log({ data1 });

  // useEffect(() => {
  //   dispatch({ type: 'POSTS', payload: data });
  // }, [data]);

  useEffect(() => {
    const filteredResults = state.posts.filter(
      (post) =>
        post.issn.includes(state.search) ||
        post.title.toLowerCase().includes(state.search.toLowerCase()),
    );

    dispatch({ type: 'SEARCH_RESULTS', payload: filteredResults.reverse() });
  }, [state.posts, state.search]);

  const indexOfLastPost = state.currentPage * state.postsPerPage;
  const indexOfFirstPost = indexOfLastPost - state.postsPerPage;
  const currentPost = state.searchResults.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => dispatch({ type: 'CURRENT_PAGE', payload: pageNumber });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = state.posts.length ? state.posts[state.posts.length - 1].id + 1 : 1;
    const newPost = {
      title: state.title,
      authors: state.authors,
      journaltype: state.journaltype,
      topic: state.topic,
      published: state.published,
      issn: state.issn,
      link: state.link,
      policy: state.policy,
      dataavail: state.dataavail,
      datashared: state.datashared,
      peerreview: state.peerreview,
      enforced: state.enforced,
      evidence: state.evidence,
    };
    try {
      const response = await api.post('/journals', newPost);
      const allPosts = [...state.posts, response.data];
      dispatch({
        type: 'POSTS',
        payload: allPosts,
      });
      history.push('/journal');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyyy pp');
    const updatedPost = {
      title: state.editTitle,
      authors: state.editAuthors,
      journaltype: state.editJournaltype,
      topic: state.editTopic,
      issn: state.editIssn,
      updated: state.datetime,
      link: state.editLink,
      policy: state.editPolicy,
      dataavail: state.editDataavail,
      datashared: state.editDatashared,
      peerreview: state.editPeerreview,
      enforced: state.editEnforced,
      evidence: state.editEvidence,
    };
    try {
      const response = await api.put(`/journals/${id}`, updatedPost);
      dispatch({
        type: 'POSTS',
        payload: state.posts.map((post) => (post.id === id ? { ...response.data } : post)),
      });
      history.push('/journal');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/journals/${id}`);
      const postsList = state.posts.filter((post) => post.id !== id);
      dispatch({ type: 'POSTS', payload: postsList });
      history.push('/journal');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  return (
    <DataContext.Provider
      value={{
        posts: state.posts,
        dispatch,
        search: state.search,
        searchResults: state.searchResults,
        filteredData,
        setFilteredData,
        wordEntered,
        setWordEntered,
        handleFilter,
        currentPost,
        currentPage: state.currentPage,
        loading,
        postsPerPage: state.postsPerPage,
        paginate,
        title: state.title,
        editTitle: state.editTitle,
        authors: state.authors,
        editAuthors: state.editAuthors,
        journaltype: state.journaltype,
        editJournaltype: state.editJournaltype,
        topic: state.topic,
        editTopic: state.editTopic,
        issn: state.issn,
        editIssn: state.editIssn,
        link: state.link,
        editLink: state.editLink,
        policy: state.policy,
        editPolicy: state.editPolicy,
        dataavail: state.dataavail,
        editDataavail: state.editDataavail,
        editDatashared: state.editDatashared,
        datashared: state.datashared,
        peerreview: state.peerreview,
        editPeerreview: state.editPeerreview,
        enforced: state.enforced,
        editEnforced: state.editEnforced,
        evidence: state.evidence,
        editEvidence: state.editEvidence,
        isPending,
        setIsPending,
        handleEdit,
        handleSubmit,
        handleDelete,
        handleChangeData,
        handleChangeData2,
        handleChangePeer,
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
