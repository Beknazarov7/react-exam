import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import { Link } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPosts()
            .then((response) => {
                setPosts(response.data); // API data is saved in the `posts` state
                setLoading(false);
            })
            .catch((error) => console.error('Error fetching posts:', error));
    }, []);

    if (loading) return <p>Loading posts...</p>;

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
