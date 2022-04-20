import myPhoto from "./../../Images/myPhoto.jpg";
import styles from "./main-info.module.css";
import { SocialButton } from "./socialButton/SocialButton";

const MainInfo = (props) => {


   return (
      <div className={styles.mainContainer}>

         <img className={styles.myPhoto} src={myPhoto} alt="myPhoto" />

         <div className={styles.info}>
            <h1>
               Олянский Евгений Викторович
            </h1>
            <h2>
               Веб-разработчик (Junior)
            </h2>
            <hr size="5" />

            <div>
               <SocialButton />
            </div>

            <hr size="5" />
         </div>

      </div>
   )
}
export default MainInfo;