import { useState } from "react";

export const UseStateHookCount = () => {
   const [count, setCount] = useState(0);
   return (
      <div>
         <p>Вы нажали {count} раз(а)</p>
         <button className="btn btn-success ml-3" onClick={() => setCount(count + 1)}>Click me +</button>
         <button className="btn btn-danger m-3" onClick={() => setCount(count - 1)}>Click me -</button>
      </div>
   )
}