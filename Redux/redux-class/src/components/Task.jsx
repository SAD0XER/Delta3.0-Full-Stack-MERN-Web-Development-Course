export default function Task({ todo }) {
  return (
    <>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </>
  );
}
