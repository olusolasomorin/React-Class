import { useState, useEffect } from "react";

// function UserList() {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         async function fetchUsers() {
//             try {
//                 const response = await fetch('https://jsonplaceholder.typicode.com/users');
//                 const data = await response.json();
//                 setUsers(data);
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         }

//         fetchUsers();
//     }, []);  // Empty array = fetch once on mount

//     return (
//         <div>
//             <h2>USers</h2>
//             {users.map(user => (
//                 <p key={user.id}>{user.username}</p>
//             ))}
//         </div>
//     )
// }


// LOADING STATE
// function UserList() {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         async function fetchUsers() {
//             try {
//                 const response = await fetch('https://jsonplaceholder.typicode.com/users');
//                 const data = await response.json();
//                 setUsers(data);
//                 setLoading(false)
//             } catch (error) {
//                 console.error('Error:', error);
//                 setLoading(false);
//             }
//         }

//         fetchUsers();
//     }, []); 
    
//     if (loading) {
//         return <p>Loading users...</p>
//     }

//     return (
//         <div>
//             <h2>USers</h2>
//             {users.map(user => (
//                 <p key={user.id}>{user.name}</p>
//             ))}
//         </div>
//     )
// }


// ERROR HANDLING
function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }

                const data = await response.json();
                setUsers(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);  // Always runs, whether success or error
            }
        }

        fetchUsers();
    }, []); 
    
    if (loading) return <p>Loading users...</p>
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>USers ({users.length})</h2>
            {users.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    )
}

export default UserList;