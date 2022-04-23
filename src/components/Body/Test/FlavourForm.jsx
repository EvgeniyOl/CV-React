import React from "react";

export class FlavourForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = { value: "" }
   }
   handleChange = (e) => {
      this.setState({ value: e.target.value });
   };
   handleSubmit = (e) => {
      e.preventDefault();
      alert(`Your favorite flavor is: ${this.state.value}`);
   };
   render() {
      return <form onSubmit={this.handleSubmit}>
         <label> Pick your favorite La Croix flavor:
            <select className="btn btn-secondary m-3" value={this.state.value} onChange={this.handleChange}>
               <option value="">Select a fruit</option>
               <option value="grapefruit">Grapefruit</option>
               <option value="lime">Lime</option>
               <option value="coconut">Coconut</option>
               <option value="mango">Mango</option>
            </select>
         </label>
         <input className="btn btn-primary m-3" type="submit" value="Submit" />
      </form>
   }
}