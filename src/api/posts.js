import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3500',
});

export const getPostsPage = async (pageParam = 1) => {
  const response = await api.get(`/posts?_page=${pageParam}`);
  return response.data;
};
