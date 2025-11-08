import { useState } from "react";

function Child( { onNameChange }) {
    const [inputValue, setInputValue] = useState('');

    function handleSubmit() {
        onNameChange(inputValue);
    }

    return (
        <div>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <button onClick={handleSubmit}>Send to parent</button>
        </div>
    )
}

export default Child;