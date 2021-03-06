import github from "./../../../Images/GitHub-Mark-Light-32px.png";
import git from "./../../../Images/Git_icon.svg.png";
import vs from "./../../../Images/Visual_Studio_Code_1.35_icon.svg.png";
import js from "./../../../Images/JavaScript_logo_2.svg.png";
import css from "./../../../Images/1200px-CSS.3.svg.png";
import html from "./../../../Images/HTML5.svg.png";
import react from "./../../../Images/react-icon1.svg";
import bootstrap from "./../../../Images/bootstrap.png";
import ts from "./../../../Images/typescript.png";
import vercel from "./../../../Images/vercel.webp";
import heroku from "./../../../Images/heroku.jpeg";

const Technologies = (props) => {
  return (
    <div class='skills'>
      <h3>Навыки</h3>

      <div>
        <ul>
          <li>
            GitHub <img width='16px' src={github} alt='github' />
          </li>
          <li>
            Git <img width='16px' src={git} alt='git' />
          </li>
          <li>
            VSCode <img width='16px' src={vs} alt='vscode' />
          </li>
        </ul>
        <hr />
        <ul>
          <li>
            HTML <img width='16px' src={html} alt='html' />
          </li>
          <li>
            CSS <img width='16px' src={css} alt='css' />
          </li>
          <li>
            Bootstrap <img width='16px' src={bootstrap} alt='bootstrap' />
          </li>
        </ul>
        <hr />
        <ul>
          <li>
            JavaScript <img width='16px' src={js} alt='js' />
          </li>
          <li>
            TypeScript <img width='16px' src={ts} alt='ts' />
          </li>
          <li>
            React/Redux/toolkit <img width='16px' src={react} alt='react' />
          </li>
        </ul>
        <hr />
        <ul>
          <li>
            Vercel <img width='18px' src={vercel} alt='vercel' />
          </li>
          <li>
            Heroku <img width='18px' src={heroku} alt='heroku' />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Technologies;
