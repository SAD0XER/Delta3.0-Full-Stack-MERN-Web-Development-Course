import { useSelector } from "react-redux";
import Task from "./Task";
import AddTask from "./AddTask";

export default function Todo() {
  const todo = useSelector((state) => state.todos);

  return (
    <>
      <h2>Redux App: Todo List</h2>
      <AddTask />
      <Task todos={todo} />
    </>
  );
}
