import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
    let [todo, setTodo] = useState([]);
    let [newTodo, setNewTodo] = useState("");

    // Adding a new task in the Todo List.
    let addTask = () => {
        setTodo((prevTodo) => [...prevTodo, { task: newTodo, id: uuidv4(), isDone: false }]);
        setNewTodo(""); // It is setting empty new task.
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

    function handleMakeOneTaskImp(id) {
        setTodo((prevTodo) =>
            prevTodo.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    };
                } else {
                    return todo;
                }
            }),
        );
    }

    function handleDoneTask(id) {
        setTodo((prevTodo) =>
            prevTodo.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else {
                    return todo;
                }
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
            <ul>
                {todo.map((todo) => (
                    <li key={todo.id}>
                        <button onClick={() => handleDoneTask(todo.id)}>
                            <i className="fa-solid fa-check"></i>
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ textDecoration: todo.isDone ? "line-through" : "italic" }}>
                            {todo.task}
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => handleMakeOneTaskImp(todo.id)}>
                            <i className="fa-regular fa-star"></i>
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => handleDeleteTodo(todo.id)}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={handleMakeAllTaskImp}>Mark All as Important</button>
        </div>
    );
}
