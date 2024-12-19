import axios from 'axios';

const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchPosts = () => API.get('/posts'); // Fetch all posts
export const fetchPostDetails = (id) => API.get(`/posts/${id}`); // Fetch details of a specific post
