import React from "react";
import { ButtonCount } from "./ButtonCount";
import Count from "./Count";
import { FlavourForm } from "./FlavourForm";
import { Form } from "./Form";
import { UseEffectHook } from "./Hooks/UseEffectHook";
import { UseRefHook } from "./Hooks/UseRefHook";
import { UseStateHookCount } from "./Hooks/UseStateHook";
import ModalWindow from "./Modal/ModalWindow";
import style from "./Test.module.css";
import TodoBox from "./ToDoBox/TestToDoBox";
import { AppTodoList } from "./TodoList/AppTodoList";

export default class Test extends React.Component {
   render() {
      return (
         <div>
            <div class="alert alert-danger" role="alert">
               <h4 class="alert-heading">Внимание!</h4>
               <p>Данный раздел сайта предназначен для личных заметок разработчика.</p>
               <hr />
            </div>

            <div>
               <div className={style.title}>React UseStateHook</div>
               <div>
                  <UseStateHookCount />
               </div>
            </div>

            <hr />

            <div>
               <div className={style.title}>React UseEffectHook</div>
               <div>
                  <UseEffectHook />
               </div>
            </div>

            <hr />

            <div>
               <div className={style.title}>React UseRefHook</div>
               <div>
                  <UseRefHook />
               </div>
            </div>

            <hr />

            <div>
               <div className={style.title}>ToDoBox</div>
               <div>
                  <TodoBox />
               </div>
            </div>

            <hr />

            <div>
               <div className={style.title}>ClassComponentButtonCountButtonActiv</div>
               <div>
                  <ButtonCount />
               </div>
            </div>

            <hr />

            <div>
               <div className={style.title}>ClassComponentCount</div>
               <div>
                  <Count />
               </div>
            </div>

            <hr />

            <div>
               <div className={style.title}>ClassComponentFlavourFormAlert</div>
               <div>
                  <FlavourForm />
               </div>
            </div>

            <hr />

            <div>
               <div className={style.title}>ClassComponentForm</div>
               <div>
                  <Form />
               </div>
            </div>

            <hr />

            <div>
               <div className={style.title}>ClassComponentModalWindow</div>
               <div>
                  <ModalWindow />
               </div>
            </div>

            <hr />

            <div>
               <div className={style.title}>ReduxCountComponent</div>
               <div>
                  <AppTodoList />
               </div>
            </div>


         </div>
      )
   }
}
