import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import AuthService from '../services/AuthService';



export default class LogOut extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "" };
        this.service = new AuthService();
      }
      handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        
    
        this.service
          .signup(username, password)
          .then((response) => {
            this.setState({
              username: "",
              password: "",
            });
            this.props.getUser(response);
            this.props.history.push("/LogOut");
          })
          .catch((error) => (
            <p class="btn btn-google btn-user btn-block">{{ error }}</p>
          ));
      };
      handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
  render() {
    return (
      <div>
        <Redirect to='/'/>
      </div>
    );
  }
}



