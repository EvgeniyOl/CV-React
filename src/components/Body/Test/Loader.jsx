import React from "react";
import axios from "axios";


export class Loader extends React.Component {
   constructor(props) {
      super(props);
      this.state = { url: null };
   }

   handleClick = async () => {
      const res = await axios.get('https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg');
      this.setState({ url: res.data });
   }

   render() {
      const { url } = this.state;
      return (
         <div>
            <button onClick={this.handleClick}>Load Random Image</button>
            {url && <img src={url} alt='#' />}
         </div>
      );
   }
}