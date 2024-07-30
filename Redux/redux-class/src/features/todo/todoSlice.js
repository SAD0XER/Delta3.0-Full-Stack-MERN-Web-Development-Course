import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todo: [{ id: "abc", task: "Sample Task", isDone: false, isImportant: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
        isImportant: false,
      };
      state.todo.push(newTodo); // It is direct mutation of state variables & it is posible in Redux.
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
    markAsDone: (state, action) => {
      state.todo = state.todo.map((todo) => {
        todo.id === action.payload ? (todo.isDone = true) : null;
      });
    },
    markAsImportant: (state, action) => {
      state.todo = state.todo.map((todo) => {
        todo.id === action.payload ? (todo.isImportant = true) : null;
      });
    },
  },
});

export const { addTodo, deleteTodo, markAsDone, markAsImportant } = todoSlice.actions;
export default todoSlice.reducer; 
