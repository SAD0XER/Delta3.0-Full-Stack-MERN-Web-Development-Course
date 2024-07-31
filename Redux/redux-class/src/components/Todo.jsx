import { useSelector } from "react-redux";
import Task from "./Task";

export default function Todo() {
  const todo = useSelector((state) => state.todo);
  console.log(todo);
  return (
    <>
      <h2>Redux App: Todo List</h2>
      <Task todo={ todo } />
    </>
  );
}
