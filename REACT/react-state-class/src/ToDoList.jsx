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

    function handleDeleteTodo(id) {
        setTodo((prevToto) => prevToto.filter((prevToto) => prevToto.id !== id));
    }

    function handleMakeAllTaskImp() {
        setTodo((prevTodo) =>
            prevTodo.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            }),
        );
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
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ol>
            <button onClick={handleMakeAllTaskImp}>Mark All as Important</button>
        </div>
    );
}
