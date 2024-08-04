import { useDispatch } from "react-redux";
import { deleteTask, markAsDone } from "../features/todo/todoSlice";

export default function Task({ todos }) {
  const dispatch = useDispatch();

  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
          {todo.isDone ? (
            <i className="fa-solid fa-circle-check"></i>
          ) : (
            <i className="fa-regular fa-circle" onClick={() => dispatch(markAsDone(todo.id))}></i>
          )}

          <span style={{ textDecoration: todo.isDone ? "line-through" : "initial" }}>
            {todo.task}
          </span>
          <i className="fa-solid fa-trash-can" onClick={() => dispatch(deleteTask(todo.id))}></i>
        </p>
      ))}
    </>
  );
}
