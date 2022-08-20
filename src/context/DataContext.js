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
    case 'SET_TITLE':
      return {
        ...state,
        title: action.payload,
      };
    case 'SET_AUTHORS':
      return {
        ...state,
        authors: action.payload,
      };
    case 'SET_JOURNALTYPE':
      return {
        ...state,
        journaltype: action.payload,
      };
    case 'SET_TOPIC':
      return {
        ...state,
        topic: action.payload,
      };
    case 'SET_ISSN':
      return {
        ...state,
        issn: action.payload,
      };
    case 'SET_LINK':
      return {
        ...state,
        link: action.payload,
      };
    case 'SET_POLICY':
      return {
        ...state,
        policy: action.payload,
      };
    case 'SET_DATAAVAIL':
      return {
        ...state,
        dataavail: action.payload,
      };
    case 'SET_DATASHARED':
      return {
        ...state,
        datashared: action.payload,
      };
    case 'SET_PEERREVIEW':
      return {
        ...state,
        peerreview: action.payload,
      };
    case 'ENFORCED':
      return {
        ...state,
        enforced: action.payload,
      };
    case 'SET_EVIDENCE':
      return {
        ...state,
        evidence: action.payload,
      };
    case 'EDIT_TITLE':
      return {
        ...state,
        editTitle: action.payload,
      };
    case 'EDIT_AUTHORS':
      return {
        ...state,
        editAuthors: action.payload,
      };
    case 'EDIT_JOURNALTYPE':
      return {
        ...state,
        editJournaltype: action.payload,
      };
    case 'EDIT_TOPIC':
      return {
        ...state,
        editTopic: action.payload,
      };
    case 'EDIT_ISSN':
      return {
        ...state,
        editIssn: action.payload,
      };
    case 'EDIT_LINK':
      return {
        ...state,
        editLink: action.payload,
      };
    case 'EDIT_POLICY':
      return {
        ...state,
        editPolicy: action.payload,
      };
    case 'EDIT_DATAAVAIL':
      return {
        ...state,
        editDataavail: action.payload,
      };
    case 'EDIT_DATASHARED':
      return {
        ...state,
        editDatashared: action.payload,
      };
    case 'EDIT_PEERREVIEW':
      return {
        ...state,
        editPeerreview: action.payload,
      };
    case 'EDIT_ENFORCED':
      return {
        ...state,
        editEnforced: action.payload,
      };
    case 'EDIT_EVIDENCE':
      return {
        ...state,
        editEvidence: action.payload,
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
    dispatch({
      type: 'SET_DATAAVAIL',
      payload: nextChecked,
    });
  };
  const [datashared, setDatashared] = useState(false);
  const [editDatashared, setEditDatashared] = useState(false);
  const handleChangeData2 = (nextChecked) => {
    dispatch({
      type: 'SET_DATASHARED',
      payload: nextChecked,
    });
  };
  const [peerreview, setPeerreview] = useState(false);
  const [editPeerreview, setEditPeerreview] = useState(false);
  const handleChangePeer = (nextChecked) => {
    dispatch({
      type: 'SET_PEERREVIEW',
      payload: nextChecked,
    });
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
        title: state.title,
        setTitle,
        editTitle: state.editTitle,
        setEditTitle,
        authors: state.authors,
        setAuthors,
        editAuthors: state.editAuthors,
        journaltype: state.journaltype,
        setJournaltype,
        setEditAuthors,
        editJournaltype: state.editJournaltype,
        setEditJournaltype,
        topic: state.topic,
        setTopic,
        editTopic: state.editTopic,
        setEditTopic,
        issn: state.issn,
        setIssn,
        editIssn: state.editIssn,
        setEditIssn,
        link: state.link,
        setLink,
        editLink: state.editLink,
        setEditLink,
        policy: state.policy,
        setPolicy,
        editPolicy: state.editPolicy,
        setEditPolicy,
        dataavail: state.dataavail,
        setDataavail,
        editDataavail: state.editDataavail,
        setEditDataavail,
        editDatashared: state.editDatashared,
        datashared: state.datashared,
        setDatashared,
        setEditDatashared,
        peerreview: state.peerreview,
        setPeerreview,
        editPeerreview: state.editPeerreview,
        setEditPeerreview,
        enforced: state.enforced,
        setEnforced,
        editEnforced: state.editEnforced,
        setEditEnforced,
        evidence: state.evidence,
        setEvidence,
        editEvidence: state.editEvidence,
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
