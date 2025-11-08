import { useState, useEffect } from "react";

function UserPosts() {
    const [userId, setUSerId] = useState(1);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, [userId]); // Re-fetch when userId changes

    return (
        <div>
            <button onClick={() => setUSerId(userId - 1)} disabled={userId === 1}>
                Previous User
            </button>
            <button onClick={() => setUSerId(userId + 1)}>
                Next User
            </button>

            <h2>Posts by User {userId}</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (posts.map(post => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))
            )}
        </div>
    )
}

export default UserPosts;