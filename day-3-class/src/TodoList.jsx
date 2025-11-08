import { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState(['Learn React', 'Build Projects']);

    function addTodo() {
        setTodos([...todos, 'New Todo']);
    }

    function removeTodo(index) {
        setTodos(todos.filter((_, i) => i !== index));
    }

    return (
        <div>
            {todos.map((todo, index) =>(
                <div key={index}>
                    {todo}
                    <button onClick={() => removeTodo(index)}>Delete</button>
                </div>
            ))}
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
}

export default TodoList;