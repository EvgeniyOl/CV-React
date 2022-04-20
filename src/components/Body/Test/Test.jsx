import React from "react";
import style from './Test.module.css';
import cn from 'classnames';
import TestCount from "./TestCount";
import { TestButtonCount } from "./TestButtonCount";
import { TestTextShow } from "./TestTextShow";
import { SocialButton } from "../../Main-info/socialButton/SocialButton";
import { TestForm } from "./TestForm";
import { Editor } from "./TestTextarea";
import { FlavourForm } from "./TestFlavourForm";
import TodoBox from "./TestToDoBox";
import Component from "./TestModalWindow";

export default class Test extends React.Component {
   render() {
      const { isPressed, isHovered, label } = this.props;
      const btnClass = cn('btn', {
         'btn-danger': isPressed,
         'btn-over': !isPressed && isHovered,
      });
      const params = {
         className: 'green',
         title: 'name',
      }
      const name = 'Eva'
      return <div>
         <div>Test Arena</div>


         <div>
            0.1
            <div {...params}>
               Props
               Hello, {this.props.name}! Petya defaultProps
               <div className={style.green}>
                  Hello, {name}!
               </div>
            </div>
            <hr />

            0.2
            <div>
               <button className={btnClass}>{label}</button>
            </div>
            <hr />

            0.3
            <div class="alert alert-success" role="alert">
               <h4 class="alert-heading">Well done!</h4>
               <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
               <hr />
               <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </div>
         </div>

         <div>
            0.4
            <hr />
            <TestCount />
         </div>
         <hr />
         <div>
            0.5
            <TestButtonCount />
         </div>
         <hr />
         <div>
            0.6
            <div>
               <TestTextShow />
            </div>
         </div>
         <hr />
         <div>
            0.7
            <SocialButton />
         </div>
         <hr />
         <div>
            0.8
            <TestForm text={'hey!'} />
         </div>
         <hr />
         <div>
            0.9
            <Editor text='initial text' />
         </div>
         <hr />
         <div>
            1.0
            <FlavourForm />
         </div>
         <hr />
         <div>
            1.1
            <TodoBox />
         </div>
         <hr />
         <div>
            1.2
            <Component />
         </div>
      </div>;
   }
}
Test.defaultProps = {
   name: 'Petya defaultProps',
}