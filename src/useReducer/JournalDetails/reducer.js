import { POSTS } from './types';

const reducer = (state, action) => {
  switch (action.type) {
    case POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
