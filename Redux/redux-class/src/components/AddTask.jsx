import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddTask() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(task));
    setTask(""); // Clear the input field after submitting the task.
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={(event) => setTask(event.target.value)} />
        <button>Add Task</button>
      </form>
    </>
  );
}
