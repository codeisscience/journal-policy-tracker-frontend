import {
  POSTS,
  SEARCH,
  SEARCH_RESULTS,
  CURRENT_PAGE,
  SET_TITLE,
  POSTS_PER_PAGE,
  SET_AUTHORS,
  SET_JOURNALTYPE,
  SET_TOPIC,
  SET_ISSN,
  SET_LINK,
  SET_POLICY,
  SET_DATAAVAIL,
  SET_DATASHARED,
  SET_PEERREVIEW,
  ENFORCED,
  SET_EVIDENCE,
  EDIT_TITLE,
  EDIT_AUTHORS,
  EDIT_JOURNALTYPE,
  EDIT_TOPIC,
  EDIT_ISSN,
  EDIT_LINK,
  EDIT_POLICY,
  EDIT_DATAAVAIL,
  EDIT_DATASHARED,
  EDIT_PEERREVIEW,
  EDIT_ENFORCED,
  EDIT_EVIDENCE,
} from './types';

const reducer = (state, action) => {
  switch (action.type) {
    case POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case POSTS_PER_PAGE:
      return {
        ...state,
        postsPerPage: action.payload,
      };
    case SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case SET_AUTHORS:
      return {
        ...state,
        authors: action.payload,
      };
    case SET_JOURNALTYPE:
      return {
        ...state,
        journaltype: action.payload,
      };
    case SET_TOPIC:
      return {
        ...state,
        topic: action.payload,
      };
    case SET_ISSN:
      return {
        ...state,
        issn: action.payload,
      };
    case SET_LINK:
      return {
        ...state,
        link: action.payload,
      };
    case SET_POLICY:
      return {
        ...state,
        policy: action.payload,
      };
    case SET_DATAAVAIL:
      return {
        ...state,
        dataavail: action.payload,
      };
    case SET_DATASHARED:
      return {
        ...state,
        datashared: action.payload,
      };
    case SET_PEERREVIEW:
      return {
        ...state,
        peerreview: action.payload,
      };
    case ENFORCED:
      return {
        ...state,
        enforced: action.payload,
      };
    case SET_EVIDENCE:
      return {
        ...state,
        evidence: action.payload,
      };
    case EDIT_TITLE:
      return {
        ...state,
        editTitle: action.payload,
      };
    case EDIT_AUTHORS:
      return {
        ...state,
        editAuthors: action.payload,
      };
    case EDIT_JOURNALTYPE:
      return {
        ...state,
        editJournaltype: action.payload,
      };
    case EDIT_TOPIC:
      return {
        ...state,
        editTopic: action.payload,
      };
    case EDIT_ISSN:
      return {
        ...state,
        editIssn: action.payload,
      };
    case EDIT_LINK:
      return {
        ...state,
        editLink: action.payload,
      };
    case EDIT_POLICY:
      return {
        ...state,
        editPolicy: action.payload,
      };
    case EDIT_DATAAVAIL:
      return {
        ...state,
        editDataavail: action.payload,
      };
    case EDIT_DATASHARED:
      return {
        ...state,
        editDatashared: action.payload,
      };
    case EDIT_PEERREVIEW:
      return {
        ...state,
        editPeerreview: action.payload,
      };
    case EDIT_ENFORCED:
      return {
        ...state,
        editEnforced: action.payload,
      };
    case EDIT_EVIDENCE:
      return {
        ...state,
        editEvidence: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
