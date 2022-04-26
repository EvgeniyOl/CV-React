import { useState } from "react"
import ToDoList from "./ToDoList"
import { useDispatch } from "react-redux";
import { InputField } from "./InputField";
import { addToDo } from "../../../../Store/ToDoSlice";

export const AppTodoList = () => {
   const [text, setText] = useState('');
   const dispatch = useDispatch();

   const addTask = () => {
      dispatch(addToDo({ text }))
      setText('');
   };


   return (
      <div>
         <InputField text={text} handleInput={setText} handleSubmit={addTask} />
         <ToDoList />
      </div >
   )
}