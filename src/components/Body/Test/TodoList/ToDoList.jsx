import ToDoSlice from "../../../../Store/ToDoSlice";
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";

const ToDoList = () => {
   const todos = useSelector(state => state.todos.todos);
   return (
      <ul className="list-group">
         {todos.map((todo) => (
            <TodoItem
               key={todo.id}
               {...todo}
            />
         ))}
      </ul>
   )
}
export default ToDoList;