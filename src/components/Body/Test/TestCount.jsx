import React from "react";

class TestCount extends React.Component {
   constructor(props) {
      super(props);
      this.state = { count: 0 };
   }
   handleClick = () => {
      this.setState({ count: this.state.count + 1 });
   }
   zeroButtonClick = () => {
      this.setState({ count: this.state.count = 0 });
   }
   render() {
      return <div>
         <button onClick={this.handleClick}>Count: {this.state.count}</button>
         <button onClick={this.zeroButtonClick}>Zero</button>
      </div>
   }
}
export default TestCount;