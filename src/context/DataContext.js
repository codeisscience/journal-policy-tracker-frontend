/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

import { React, createContext, useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { format } from 'date-fns';
import { api } from '../components/api/posts';
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

const DataProvider = ({ children }) => {
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
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.issn.includes(search) || post.title.toLowerCase().includes(search.toLowerCase()),
    );

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = searchResults.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
      history.push('/journal');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  return (
    <DataContext.Provider
      value={{
        posts,
        search,
        setSearch,
        searchResults,
        filteredData,
        setFilteredData,
        wordEntered,
        setWordEntered,
        handleFilter,
        currentPost,
        loading,
        postsPerPage,
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
