import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LinkedInPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchLinkedInPosts = async () => {
        try {
            // Make a GET request to retrieve the LinkedIn posts data
            const response = await axios.get('https://api.linkedin.com/v2/shares?q=owners&owners=urn:li:person:bheti-connect', {
            headers: {
                Authorization: 'Bearer 41|h60Y9TqTCWuaxxSMwcIaX5tboRBRdBdKygqpBT7l', // Replace with your actual access token
            },
            });
            setPosts(response.data.elements);
        } catch (error) {
            console.error('Error fetching LinkedIn posts:', error);
        }
        };

        fetchLinkedInPosts();
    }, []);

    return (
        <div>
        <h1>LinkedIn Posts</h1>
        {posts.map((post) => (
            <div key={post.id}>
            <h2>{post.text}</h2>
            {/* Additional post details you want to display */}
            </div>
        ))}
        </div>
    );
};

export default LinkedInPosts;
