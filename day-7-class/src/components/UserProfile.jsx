import { useState, useEffect } from "react";

function UserProfile() {
    const [userId, setUserId] = useState(1);
    const [userName, setUserName] = useState('');

    // only runs when userId changes
    useEffect(() => {
        console.log(`User ID changed to: ${userId}`);
    }, [userId]);

    return (
        <div>
            <p>User ID: {userId}</p>
            <p>User Name: {userName}</p>
            <button onClick={() => setUserId(userId + 1)}>Next User</button>
            <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Change name..."
            />
        </div>
    );
}

export default UserProfile;