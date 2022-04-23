import { useEffect, useState } from "react";

export const UseEffectHook = () => {
   const [count, setCount] = useState(0);

   useEffect(() => alert(`Жмаков ${count}`))

   return (
      <div>
         <p>Вы нажали {count} раз</p>
         <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Жмакни</button>
      </div>
   )
}