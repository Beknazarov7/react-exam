import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPostDetails } from '../services/api';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPostDetails(id)
            .then((response) => {
                setPost(response.data); // API data for a single post is saved in `post` state
                setLoading(false);
            })
            .catch((error) => console.error('Error fetching post details:', error));
    }, [id]);

    if (loading) return <p>Loading post details...</p>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default PostDetails;
