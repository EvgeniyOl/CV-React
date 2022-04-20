import React from "react";
import styles from './SocialButton.module.css';
import hexletLink from "./../../../Images/hexlet.jpeg";
import github from "./../../../Images/GitHub-Mark-Light-32px.png";
import telega from "./../../../Images/telega.png";
import gMail from "./../../../Images/gmail.png";

export class SocialButton extends React.Component {
   constructor(props) {
      super(props);
      this.state = { isShown: false };
   }
   toggleText = () => {
      const { isShown } = this.state;
      this.setState({ isShown: !isShown });
   };
   render() {
      const { isShown } = this.state;
      return <div className="d-grid gap-2 col-8">
         <button onClick={(this.toggleText)} type='button' className="btn btn-outline-info">{isShown ? 'Скрыть' : 'Показать Соц. Сети'}</button>
         {isShown && <div className={styles.list}>
            <ul>
               <li><a href="https://ru.hexlet.io/u/evgeniyol/courses" target="blank"><img width="20px" src={hexletLink} alt="HexletLink" /> Hexlet </a></li>
               <li><a href="https://github.com/EvgeniyOl" target="blank"><img width="20px" src={github} alt="githibLink" /> GitHub </a></li>
            </ul>
            <ul>
               <li><a href="https://t.me/Evgeniy321123" target="blank"><img width="20px" src={telega} alt="telegramLink" /> Telegram </a></li>
               <li><a href="mailto:evgeniy.olyanskii@gmail.com" target="blank"><img width="20px" src={gMail} alt="GMailLink" /> evgeniy.olyanskii@gmail.com</a></li>
            </ul>
         </div>}
      </div>
   }
}