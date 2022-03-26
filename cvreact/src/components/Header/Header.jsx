import location from "./../../Images/marker.png";
import clock from "./../../Images/sand-clock.png";
import Clock from "./Clock/Clock";
import styles from "./Header.module.css";

const Header = (props) => {


   return (
      <div className={styles.headerContainer}>
         <div className={styles.clock}>
            <img src={clock} alt="clock" />
            <Clock />
         </div>
         <div className={styles.cv}>
            CV Evgeniy Olyanskii
         </div>
         <div className={styles.location}>
            <img src={location} alt="Logo" />
            <a href="https://www.google.com/maps/place/%D0%9E%D0%BC%D1%81%D0%BA,+%D0%9E%D0%BC%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB./@59.3872534,42.6400363,4.04z/data=!4m5!3m4!1s0x43aafde2f601090b:0x5eefc33861a69b1a!8m2!3d54.9913545!4d73.3645204" target="blanc">Omsk, Russia</a>
         </div>


      </div>
   )
}
export default Header;