import styles from "./experience.module.css";
const Experience = (props) => {


   return (
      <div class={styles.experience}>
         <div>
            <h3>Опыт работы</h3>
            <p>Сеть кофеен "Тинто", "Santino-Omsk", "Santino-Tbilisi".</p>
            Должность - Специалист технического отдела. "Инженер-менеджер"
         </div>

         <ul>
            <li>Обучение и контроль команды (~20 человек).</li>
            <li>Посещение выставок, изучение новейших технологий.</li>
            <li>Подбор, установка, настройка, техническое обслуживание профессионального оборудования.</li>
            <li>Ежедневный контроль и настройка кофе.</li>
            <li>Составление меню напитков.</li>
         </ul>
      </div>
   )
}
export default Experience;