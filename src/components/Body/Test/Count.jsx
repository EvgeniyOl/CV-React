import React from "react";

class Count extends React.Component {
   constructor(props) {
      super(props);
      this.state = { count: 0 };
   }
   handleClick = () => {
      this.setState({ count: this.state.count + 1 });
   }
   zeroButtonClick = () => {
      this.setState({ count: 0 });
   }
   render() {
      return <div>
         <button className="btn btn-success m-3" onClick={this.handleClick}>Count: {this.state.count}</button>
         <button className="btn btn-primary m-3" onClick={this.zeroButtonClick}>Refresh</button>
      </div>
   }
}
export default Count;