import { useEffect, useState } from "react";

export const UseEffectHook = () => {
   const [count, setCount] = useState(0);

   useEffect(() => alert(`Кликов ${count}`))

   return (
      <div>
         <p>Вы нажали {count} раз</p>
         <button className="btn btn-primary mb-3" onClick={() => setCount(count + 1)}>Нажми</button>
      </div>
   )
}