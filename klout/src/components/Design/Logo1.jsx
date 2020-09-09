import React, { Component } from "react";

class Logo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <br />
        <img src={process.env.PUBLIC_URL + "/klout1.png"} width="50px" />
        <br />
        
        
      </div>
    );
  }
}

export default Logo1;