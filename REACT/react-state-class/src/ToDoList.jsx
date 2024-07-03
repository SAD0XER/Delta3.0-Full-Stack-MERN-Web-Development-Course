import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
    let [todo, setTodo] = useState([]);
    let [newTodo, setNewTodo] = useState("");

    let addTask = () => {
        setTodo((prevTodo) => [...prevTodo, { task: newTodo, id: uuidv4() }]);
        setNewTodo("");
    };

    function handleUpdateTodo(event) {
        setNewTodo(event.target.value);
    }

    return (
        <div>
            <h2>My To Do List</h2>
            <input
                type="text"
                value={newTodo}
                placeholder="Enter you task here"
                onChange={handleUpdateTodo}
            />
            <button onClick={addTask}>Add</button>
            <hr />
            <h3>To Do List</h3>
            <ol>
                {todo.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    </li>
                ))}
            </ol>
        </div>
    );
}
