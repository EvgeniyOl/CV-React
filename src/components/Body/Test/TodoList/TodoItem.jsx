import { useDispatch } from "react-redux";
import { removeToDo, toggleToDoComplite } from "../../../../Store/ToDoSlice";

export const TodoItem = ({ id, text, complited }) => {
   const dispatch = useDispatch();
   return (
      <li className="list-group-item mb-3">

         <input type="checkbox"
            checked={complited}
            onChange={() => dispatch(toggleToDoComplite({ id }))}
         />
         <span> {text}</span>
         <button className="btn-close m-3" onClick={() => dispatch(removeToDo({ id }))}></button>
      </li>
   )
}
export default TodoItem;