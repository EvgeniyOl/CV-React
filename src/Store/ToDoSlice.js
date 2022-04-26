import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
   name: 'todos',
   initialState: {
      todos: [],
   },
   reducers: {
      addToDo(state, action) {
         state.todos.push({
            id: new Date().toISOString(),
            text: action.payload.text,
            complited:false,
         })
      },
      removeToDo(state, action) {
         state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
      },
      toggleToDoComplite(state, action) {
         const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
         toggledTodo.complited = !toggledTodo.complited;
      },

   },
});

export const {addToDo, removeToDo, toggleToDoComplite} = todoSlice.actions;
export default todoSlice.reducer;