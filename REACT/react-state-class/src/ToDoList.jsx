import { useState } from "react";

export default function ToDoList() {
    let [todo, setTodo] = useState([]);
    let [newTodo, setNewTodo] = useState("");

    let addTask = () => {
        setTodo([...todo, newTodo]);
        setNewTodo("");
    };

    function updateTodoValue(event) {
        setNewTodo(event.target.value);
    }

    return (
        <div>
            <h2>My To Do List</h2>
            <input
                type="text"
                value={newTodo}
                placeholder="Enter you task here"
                onChange={updateTodoValue}></input>
            <button onClick={addTask}>Add</button>
            <hr />
            <h3>To Do List</h3>
            <ol>
                {todo.map((todo) => (
                    <li>{todo}</li>
                ))}
            </ol>
        </div>
    );
}
