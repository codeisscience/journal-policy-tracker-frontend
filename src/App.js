/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import api from './api/posts';
import { Journal, Contact, Manifesto, Home } from './pages';
import { Footer, Auth, Header, Login, JournalDetails, AddJournal } from './components';
import Navbar from './components/marginals/Navbar/Navbar';
import Edit from './components/EditJournal/Edit';

function App() {
  const [posts, setPosts] = useState([]);
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

  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/journals');
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.issn.includes(search) || post.title.toLowerCase().includes(search.toLowerCase()),
    );

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

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
      history.push('/');
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
      history.push('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/journals/${id}`);
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
      history.push('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Home
            search={search}
            setSearch={setSearch}
            posts={posts}
            searchResults={searchResults}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
            wordEntered={wordEntered}
            setWordEntered={setWordEntered}
            handleFilter={handleFilter}
          />
        </Route>
        <Route path='/manifesto'>
          <Manifesto />
        </Route>
        <Route path='/journal'>
          <Journal search={search} setSearch={setSearch} posts={searchResults} />
        </Route>
        <Route exact path='/addjournal'>
          <AddJournal
            title={title}
            setTitle={setTitle}
            authors={authors}
            setAuthors={setAuthors}
            journaltype={journaltype}
            setJournaltype={setJournaltype}
            topic={topic}
            setTopic={setTopic}
            issn={issn}
            setIssn={setIssn}
            link={link}
            setLink={setLink}
            policy={policy}
            setPolicy={setPolicy}
            dataavail={dataavail}
            setDataavail={setDataavail}
            handleChangeData={handleChangeData}
            datashared={datashared}
            setDatashared={setDatashared}
            handleChangeData2={handleChangeData2}
            peerreview={peerreview}
            setPeerreview={setPeerreview}
            handleChangePeer={handleChangePeer}
            enforced={enforced}
            setEnforced={setEnforced}
            evidence={evidence}
            setEvidence={setEvidence}
            isPending={isPending}
            setIsPending={setIsPending}
            handleSubmit={handleSubmit}
          />
        </Route>
        <Route path='/edit/:id'>
          <Edit
            posts={posts}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            editAuthors={editAuthors}
            setEditAuthors={setEditAuthors}
            editJournaltype={editJournaltype}
            setEditJournaltype={setEditJournaltype}
            editTopic={editTopic}
            setEditTopic={setEditTopic}
            editIssn={editIssn}
            setEditIssn={setEditIssn}
            editLink={editLink}
            setEditLink={setEditLink}
            editPolicy={editPolicy}
            setEditPolicy={setEditPolicy}
            editDataavail={editDataavail}
            setEditDataavail={setEditDataavail}
            editDatashared={editDatashared}
            setEditDatashared={setEditDatashared}
            editPeerreview={editPeerreview}
            setEditPeerreview={setEditPeerreview}
            editEnforced={editEnforced}
            setEditEnforced={setEditEnforced}
            editEvidence={editEvidence}
            setEditEvidence={setEditEvidence}
            isPending={isPending}
            setIsPending={setIsPending}
            handleEdit={handleEdit}
          />
        </Route>
        <Route path='/policy/:id'>
          <JournalDetails posts={posts} handleDelete={handleDelete} />
        </Route>
        <Route path='/Signup'>
          <Auth />
        </Route>
        <Route path='/Login'>
          <Login />
        </Route>
        <Redirect to='/' />
      </Switch>
      <Navbar search={search} setSearch={setSearch} />
      <Footer />
    </div>
  );
}

export default App;
