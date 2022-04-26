import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './ToDoSlice.js';

export default configureStore({
   reducer: {
      todos: todoReducer,
   }
});