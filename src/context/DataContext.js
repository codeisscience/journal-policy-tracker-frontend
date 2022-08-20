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
import { api } from '../components/api/posts';
import useAxiosFetch from '../hooks/useAxiosFetch';

const initialState = {
  posts: [],
  currentPage: 1,
  search: '',
  searchResults: [],
  postsPerPage: 5,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'POSTS':
      return {
        ...state,
        posts: action.payload,
      };
    case 'SEARCH':
      return {
        ...state,
        search: action.payload,
      };
    case 'SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.payload,
      };
    case 'CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    case 'POSTS_PER_PAGE':
      return {
        ...state,
        postsPerPage: action.payload,
      };

    default:
      return state;
  }
};

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [title, setTitle] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [editAuthors, setEditAuthors] = useState('');
  const [journaltype, setJournaltype] = useState('');
  const [editJournaltype, setEditJournaltype] = useState('');
  const [topic, setTopic] = useState('');
  const [editTopic, setEditTopic] = useState('');
  const [published, setPublished] = useState('');
  const [issn, setIssn] = useState();
  const [editIssn, setEditIssn] = useState();
  const [updated, setUpdated] = useState(format(new Date(), 'MMMM dd, yyyyy pp'));
  const [link, setLink] = useState('');
  const [editLink, setEditLink] = useState('');
  const [policy, setPolicy] = useState('policy 1');
  const [editPolicy, setEditPolicy] = useState('policy 1');
  const [dataavail, setDataavail] = useState(false);
  const [editDataavail, setEditDataavail] = useState(false);
  const handleChangeData = (nextChecked) => {
    setDataavail(nextChecked);
  };
  const [datashared, setDatashared] = useState(false);
  const [editDatashared, setEditDatashared] = useState(false);
  const handleChangeData2 = (nextChecked) => {
    setDatashared(nextChecked);
  };
  const [peerreview, setPeerreview] = useState(false);
  const [editPeerreview, setEditPeerreview] = useState(false);
  const handleChangePeer = (nextChecked) => {
    setPeerreview(nextChecked);
  };
  const [enforced, setEnforced] = useState('');
  const [editEnforced, setEditEnforced] = useState('');
  const [evidence, setEvidence] = useState('');
  const [editEvidence, setEditEvidence] = useState('');
  const [isPending, setIsPending] = useState(false);

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const history = useHistory();

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = posts.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/journals');

  useEffect(() => {
    dispatch({ type: 'POSTS', payload: data });
  }, [data]);

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
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyyy pp');
    const newPost = {
      title,
      authors,
      journaltype,
      topic,
      published: datetime,
      issn,
      updated,
      link,
      policy,
      dataavail,
      datashared,
      peerreview,
      enforced,
      evidence,
    };
    try {
      const response = await api.post('/journals', newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      history.push('/journal');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyyy pp');
    const updatedPost = {
      title: editTitle,
      authors: editAuthors,
      journaltype: editJournaltype,
      topic: editTopic,
      issn: editIssn,
      updated: datetime,
      link: editLink,
      policy: editPolicy,
      dataavail: editDataavail,
      datashared: editDatashared,
      peerreview: editPeerreview,
      enforced: editEnforced,
      evidence: editEvidence,
    };
    try {
      const response = await api.put(`/journals/${id}`, updatedPost);
      setPosts(posts.map((post) => (post.id === id ? { ...response.data } : post)));
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
        setSearch,
        searchResults: state.searchResults,
        filteredData,
        setFilteredData,
        wordEntered,
        setWordEntered,
        handleFilter,
        currentPost,
        loading,
        postsPerPage: state.postsPerPage,
        paginate,
        title,
        setTitle,
        editTitle,
        setEditTitle,
        authors,
        setAuthors,
        editAuthors,
        journaltype,
        setJournaltype,
        setEditAuthors,
        editJournaltype,
        setEditJournaltype,
        topic,
        setTopic,
        editTopic,
        setEditTopic,
        issn,
        setIssn,
        editIssn,
        setEditIssn,
        link,
        setLink,
        editLink,
        setEditLink,
        policy,
        setPolicy,
        editPolicy,
        setEditPolicy,
        dataavail,
        setDataavail,
        editDataavail,
        setEditDataavail,
        editDatashared,
        datashared,
        setDatashared,
        setEditDatashared,
        peerreview,
        setPeerreview,
        editPeerreview,
        setEditPeerreview,
        enforced,
        setEnforced,
        editEnforced,
        setEditEnforced,
        evidence,
        setEvidence,
        editEvidence,
        setEditEvidence,
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
