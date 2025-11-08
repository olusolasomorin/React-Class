import { useState, useEffect } from "react";

function LifecycleDemo() {
    const [count, setCount] = useState(0);

    // Runs on mount(once)
    useEffect(() => {
        console.log('Component mounted!');
    }, []);

    //Runs on every update
    useEffect(() => {
        console.log('Component updated!');
    });

    // Runs when count changes
    useEffect(() => {
        console.log('Count changed to:', count);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default LifecycleDemo;