import { POSTS, SEARCH, POSTS_PER_PAGE, CURRENT_PAGE, SEARCH_RESULTS } from './types';

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

    default:
      return state;
  }
};

export default reducer;
