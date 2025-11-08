import { useState } from "react";

function UserProfile() {
    const [name, setName] = useState('Chidi');
    const [age, setAge] = useState(25);
    const [city, setCity] = useState('Lagos');

    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>City: {city}</p>
        </div>
    );
}

// function UserProfile() {
//     const [user, setUser] = useState({
//         name: 'Chidi',
//         age: 25,
//         city: 'Lagos'
//     });

//     function updateCity() {
//         setUser({
//             ...user,   //Spread existing properties
//             city: 'Abuja'  // Update only city
//         });
//     }

//     return(
//         <div>
//             <p>Name: {user}</p>
//             {/* <p>Age: {age}</p>
//             <p>City: {city}</p> */}
//             <button onClick={updateCity}>Move to Abuja</button>
//         </div>
//     ) 
    
// }

export default UserProfile;