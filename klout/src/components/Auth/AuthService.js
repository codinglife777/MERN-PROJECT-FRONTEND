import axios from "axios";
import { Component } from "react";

class AuthService extends Component {
  constructor(props) {
    super(props);
    let service = axios.create({
      baseURL: "http://localhost:3000/api/auth",
      withCredentials: true,
    });
    this.service = service;
    this.state = {
      redirectToReferrer: false,
    };
  }

  signup = (username, password) => {
    return this.service
      .post("/signup", { username, password })
      .then((response) => response.data);
  };

  loggedin = () => {
    return this.service.get("/loggedin").then((response) => response.data);
  };

  login = (username, password) => {
    this.setState(() => ({
      redirectToReferrer: true,
    }));
    return this.service
      .post("/login", { username, password })
      .then((response) => response.data);
  };

  logout = () => {
    return this.service.post("/logout", {}).then((response) => response.data);
  };
}

export default AuthService;
