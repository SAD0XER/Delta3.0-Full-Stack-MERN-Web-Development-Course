import "./Task.css";

export default function Task({ todo, handleDoneTask, handleMarkAsImp, handleDeleteTodo }) {
  return (
    <div className="task-container">
      {todo.map((todo) => (
        <p key={todo.id}>
          <i className="fa-solid fa-check" onClick={() => handleDoneTask(todo.id)}></i>

          <span
            style={{
              textDecoration: todo.isDone ? "line-through" : "initial",
              fontWeight: todo.isImp ? "bold" : "initial",
            }}>
            {todo.task}
          </span>

          <i
            className={todo.isImp ? "fa-solid fa-star" : "fa-regular fa-star"}
            onClick={() => handleMarkAsImp(todo.id)}></i>

          <i className="fa-solid fa-trash" onClick={() => handleDeleteTodo(todo.id)}></i>
        </p>
      ))}
    </div>
  );
}
