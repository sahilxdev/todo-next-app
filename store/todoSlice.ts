import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  todo: string;
  done: boolean;
}

const initialState: Todo[] = [
  { id: 1, todo: "Go to Gym", done: false },
  { id: 2, todo: "Go to School", done: false },
];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.unshift({ id: Date.now(), todo: action.payload, done: false });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    editTodo: (state, action: PayloadAction<{ id: number; todo: string }>) => {
      const todoToEdit = state.find(todo => todo.id === action.payload.id);
      if (todoToEdit) {
        todoToEdit.todo = action.payload.todo;
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, editTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;