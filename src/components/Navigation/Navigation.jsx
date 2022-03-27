import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = (props) => {


   return (
      <div className={styles.navigationContainer}>
         <ul>
            <li><NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.noActiveLink} to="/education" >Образование</NavLink></li>
            <hr />
            <li><NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.noActiveLink} to="/experience" >Опыт работы</NavLink></li>
            <hr />
            <li><NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.noActiveLink} to="/projects" >Проекты</NavLink></li>
            <hr />
            <li><NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.noActiveLink} to="/technologies" >Технологии</NavLink></li>
            <hr />
            <li><NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.noActiveLink} to="/hobbies" >Хобби</NavLink></li>
         </ul>
      </div >
   )
}
export default Navigation;
