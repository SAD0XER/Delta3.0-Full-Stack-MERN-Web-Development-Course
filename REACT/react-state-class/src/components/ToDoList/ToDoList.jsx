import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import "./ToDoList.css";

export default function ToDoList() {
  let [todo, setTodo] = useState([]);
  let [newTodo, setNewTodo] = useState("");

  // Adding a new task in the Todo List.
  let addTask = () => {
    setTodo((prevTodo) => [
      ...prevTodo,
      { task: newTodo, id: uuidv4(), isDone: false, isImp: false },
    ]);
    setNewTodo(""); // It is setting empty new task.
  };

  function handleUpdateTodo(event) {
    setNewTodo(event.target.value);
  }

  function handleDeleteTodo(id) {
    setTodo((prevToto) => prevToto.filter((prevToto) => prevToto.id !== id));
  }

  function handleMarkAsImp(id) {
    setTodo((prevTodo) =>
      prevTodo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isImp: true,
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

  function handleDoneAllTask() {
    setTodo((prevTodo) =>
      prevTodo.map((todo) => {
        return {
          ...todo,
          isDone: true,
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
      <button className="add-btn" onClick={addTask}>
        Add
      </button>
      <hr />
      <h3>To Do List</h3>
      <Task
        todo={todo}
        handleDoneTask={handleDoneTask}
        handleMarkAsImp={handleMarkAsImp}
        handleDeleteTodo={handleDeleteTodo}
      />
      <button onClick={handleDoneAllTask}>
        <i className="fa-solid fa-check-double"></i>Mark All as Done
      </button>
    </div>
  );
}
