import { useState } from "react";
import styles from "./Clock.module.css";

const Clock = () => {
   const [date, setDate] = useState(new Date())

   return (
      <div className={styles.clock}>
         <p>Время: {date.toLocaleTimeString()}</p>
         <button className={styles.refresh} onClick={() => setDate(new Date())}>Обновить</button>
      </div>
   )
}
export default Clock;