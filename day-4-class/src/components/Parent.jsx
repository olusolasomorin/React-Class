import { useState } from "react";
import Child from "./Child";

function Parent() {
    const [name, setName] = useState('John Doe');

    //This function will be called by the child
    function handleNameChange(newName) {
        setName(newName);
    }

    return (
        <div>
            <p>Name in Parent: {name}</p>
            <Child onNameChange={handleNameChange} />
        </div>
    )
}

export default Parent;