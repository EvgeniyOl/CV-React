// import { useState } from "react";
import styles from "./Clock.module.css";
import React from "react";

// export const Clock2 = () => {
//    const [date, setDate] = useState(new Date())

//    return (
//       <div className={styles.clock}>
//          <p>Время: {date.toLocaleTimeString()}</p>
//          <button className={styles.refresh} onClick={() => setDate(new Date())}>Обновить</button>
//       </div>
//    )
// }

export class Clock extends React.Component {
   constructor(props) {
      super(props);
      this.state = { date: new Date() };
   }

   componentDidMount() {
      this.timerId = setInterval(() => this.setState({ date: new Date() }), 1000);
   }

   componentWillUnmount() {
      clearInterval(this.timerId);
   }

   render() {
      const { date } = this.state;
      return (
         <div className={styles.clock}>Время: {date.toLocaleTimeString()}</div>
      );
   }
}