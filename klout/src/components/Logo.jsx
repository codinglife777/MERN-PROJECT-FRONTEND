import React, { Component } from "react";
class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        
        <img src={process.env.PUBLIC_URL + "/klout.png"} />
        <br />
        <h2>Measure your Influence</h2>
        
      </div>
    );
  }
}

export default Logo;
