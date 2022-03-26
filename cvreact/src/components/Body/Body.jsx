import Education from "./Education/education";
import styles from "./Body.module.css";
import { Route, Routes } from "react-router-dom";
import Hobbies from "./Hobbies/hobbies";
import Experience from "./Experience/experience";
import MyProjects from "./MyProjects/myProjects";
import Technologies from "./Technologies/technologies";

const Body = (props) => {

   return (
      <div className={styles.BodyContainer}>
         <Routes>
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<MyProjects />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/hobbies" element={<Hobbies />} />
         </Routes>
      </div>
   )
}
export default Body;