import {
  SEARCH,
  SEARCH_RESULTS,
  CURRENT_PAGE,
  POSTS,
  SET_TITLE,
  SET_TOPIC,
  SET_ISSN,
  SET_LINK,
  SET_POLICY,
  SET_DATAAVAIL,
  SET_DATASHARED,
  SET_PEERREVIEW,
  SET_ENFORCED,
  SET_EVIDENCE,
  POLICYTITLE,
} from './types';

const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_TITLE:
      return {
        ...state,
        title: action.payload,
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
    case SET_ENFORCED:
      return {
        ...state,
        enforced: action.payload,
      };
    case SET_EVIDENCE:
      return {
        ...state,
        evidence: action.payload,
      };
    case POLICYTITLE:
      return {
        ...state,
        policyTitle: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
