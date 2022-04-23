import { useRef } from "react";

export const UseRefHook = () => {
   const inputEl = useRef(null);

   const onButtonClick = () => {
      inputEl.current.focus();
   }
   return (
      <>
         <input className="m-3" ref={inputEl} type="text" />
         <button className="btn btn-info m-1" onClick={onButtonClick}>Фокус</button>
      </>
   )

}