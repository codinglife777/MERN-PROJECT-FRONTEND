import PropTypes from "prop-types";
import React, { Component } from "react";
import NextStep from "./NextStep";


export default class Header extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired,
  };

  render() {
    const { authenticated } = this.props;
    return (
      
      <NextStep/>
      
      
    );
  }


}
