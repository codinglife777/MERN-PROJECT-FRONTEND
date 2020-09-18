import React, { Component } from "react";
import AuthService from "../Protected/services/AuthService";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  logoutUser = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);
    });
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <p>
          {/*{this.state.loggedInUser.username} {this.state.loggedInUser._id}*/}
        </p>
      );
    }else{
      return(<p></p>)
    }
  }
}
