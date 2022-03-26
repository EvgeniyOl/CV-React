

import styles from "./myProjects.module.css"
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
         <p>Третий проект - <a href="https://github.com/EvgeniyOl/SocialWebReact" target="blank">Социальная сеть</a></p>
         <ul>
            <li>Прототип социальной сети на React</li>

         </ul>
         <hr size="5" />
         <p>Четвертый проект - RSS Reader сервис для агрегации RSS-потоков, с помощью которых удобно читать разнообразные источники, например, блоги.
            Он позволяет добавлять неограниченное количество RSS-лент, сам их обновляет и добавляет новые записи в общий поток.</p>
      </div>

   )
}
export default MyProjects;