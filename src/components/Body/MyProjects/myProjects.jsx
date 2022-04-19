

import styles from "./myProjects.module.css";
import screen1 from "./../../../Images/Screenshot 1.png";
import { Link } from "react-router-dom";
const MyProjects = (props) => {


   return (
      <div class={styles.container}>
         <p>В данный момент обучаюсь на Hexlet по программе "Frontend - разработчик".</p>
         <hr size="5" />
         <p>Первый проект - <a href="https://github.com/EvgeniyOl/frontend-project-lvl1" target="blank">"Brain-Games"</a> состоит из 5 игр:</p>
         <ol>
            <li>Определение четности числа.</li>
            <li>Определение простого числа.</li>
            <li>Калькулятор с базовыми арифметическими операциями.</li>
            <li>Поиск недостающего элемента прогрессии.</li>
            <li>Определение наибольшего общего делителя.</li>
         </ol>
         <hr size="5" />
         <p>Второй проект - <a href="https://github.com/EvgeniyOl/frontend-project-lvl2" target="blank">CLI программа "Вычислитель отличий"</a></p>
         <ul>
            <li>Вычислитель отличий – программа, определяющая разницу между двумя структурами данных.</li>
            <li>Поддержка разных входных форматов: yaml, json</li>
            <li>Генерация отчета в виде plain text, stylish и json</li>
         </ul>
         <hr size="5" />
         <p>Третий проект - <a href="https://frontend-project-lvl3-xi-nine.vercel.app/" target="blank">«RSS агрегатор»</a></p>
         <ul>
            <li>RSS – специализированный формат, предназначенный для описания лент новостей,
               анонсов статей и других материалов.
               Это наиболее простой способ для сайтов (обычно, блогов)
               дать возможность пользователям подписываться на изменения.
               Для этого используются специальные сервисы, называемые RSS-агрегаторами.
               Эти сервисы умеют опрашивать RSS-ленты сайтов на наличие новых постов и показывают их в удобном виде,
               отмечая прочитанное и так далее.</li>

         </ul>
         <hr size="5" />

      </div>

   )
}
export default MyProjects;