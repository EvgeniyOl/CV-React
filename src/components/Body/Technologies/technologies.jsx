import github from "./../../../Images/GitHub-Mark-Light-32px.png"
import git from "./../../../Images/Git_icon.svg.png"
import vs from "./../../../Images/Visual_Studio_Code_1.35_icon.svg.png"
import js from "./../../../Images/JavaScript_logo_2.svg.png"
import css from "./../../../Images/1200px-CSS.3.svg.png"
import html from "./../../../Images/HTML5.svg.png"
import react from "./../../../Images/react-icon1.svg"
import bootstrap from "./../../../Images/bootstrap.png"
import ts from "./../../../Images/typescript.png"

const Technologies = (props) => {

   return (
      <div class="skills">
         <h3>Навыки</h3>

         <div>
            <ul>
               <li>GitHub  <img width="16px" src={github} alt="github" /></li>
               <li>Git  <img width="16px" src={git} alt="git" /></li>
               <li>VSCode  <img width="16px" src={vs} alt="vscode" /></li>
            </ul>
            <hr />
            <ul>
               <li>Основы JavaScript <img width="16px" src={js} alt="js" /></li>
               <li>Основы CSS <img width="16px" src={css} alt="css" /></li>
               <li>Основы HTML <img width="16px" src={html} alt="html" /></li>
            </ul>
            <hr />
            <ul>
               <li>Основы React/Redux <img width="16px" src={react} alt="react" /></li>
               <li>Основы Bootstrap <img width="16px" src={bootstrap} alt="bootstrap" /></li>
            </ul>
         </div>
      </div>
   )
}
export default Technologies;