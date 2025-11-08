import { useState } from "react";

// function Counter() {
//     // Declare state variable
//     const [count, setCount] = useState(0);

//     function increment() {
//         setCount(count + 1);  // Update state
//     }

//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={increment}>Increment</button>
//         </div>
//     );
// }

// function Counter() {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={() => setCount(count + 1)}>+1</button>
//             <button onClick={() => setCount(count - 1)}>-1</button>
//             <button onClick={() => setCount(0)}>Reset</button>
//         </div>
//     );
// }

function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        // Correct - using previous state
        setCount(prevCount => prevCount + 1);
    }

    return <button onClick={increment}>Count: {count}</button>;
}

export default Counter;