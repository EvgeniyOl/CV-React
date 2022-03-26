import myPhoto from "./../../Images/myPhoto.jpg";
import styles from "./main-info.module.css";
import hexletLink from "./../../Images/hexlet.jpeg";
import github from "./../../Images/GitHub-Mark-Light-32px.png";
import telega from "./../../Images/telega.png";
import gMail from "./../../Images/gmail.png";

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
               <h4>
                  Социальные сети
               </h4>

               <div className={styles.list}>
                  <ul>
                     <li><a href="https://ru.hexlet.io/u/evgeniyol/courses" target="blank"><img width="20px" src={hexletLink} alt="HexletLink" /> Hexlet </a></li>
                     <li><a href="https://github.com/EvgeniyOl" target="blank"><img width="20px" src={github} alt="githibLink" /> GitHub </a></li>
                  </ul>
                  <ul>
                     <li><a href="https://t.me/Evgeniy321123" target="blank"><img width="20px" src={telega} alt="telegramLink" /> Telegram </a></li>
                     <li><a href="mailto:evgeniy.olyanskii@gmail.com" target="blank"><img width="20px" src={gMail} alt="GMailLink" /> evgeniy.olyanskii@gmail.com</a></li>
                  </ul>
               </div>
            </div>
            <hr size="5" />
         </div>

      </div>
   )
}
export default MainInfo;