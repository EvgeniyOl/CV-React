import styles from "./education.module.css";
const Education = (props) => {


   return (
      <div className={styles.container}>
         <div>
            СибАДИ - «Сервис транспортных и технологических машин и оборудования (нефтепродуктообеспечение и газоснабжение)» 2012-2016
         </div>
         <hr size="5" />
         <div>
            HEXLET - «Frontend - developer» дек.2021 - дек.2022
         </div>
      </div>
   )
}
export default Education;