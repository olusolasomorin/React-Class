import { useState } from "react";

function Child({ name, age }) {
    const [isHappy, setIsHappy] = useState(true);

    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Happy: {isHappy ? 'Yes' : 'No'}</p>
            <button onClick={() => setIsHappy(isHappy)}>Toggle Mood</button>
        </div>
    );
}

export default Child;