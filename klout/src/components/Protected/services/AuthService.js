import { Component } from "react";
import axios from "axios";

class AuthService extends Component {
  constructor(props) {
    super(props);
    let service = axios.create({
      baseURL: `http://localhost:3000/api/auth`,
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
  login = (username, password) => {
    return this.service
      .post("/login", { username, password })
      .then((response) => response.data);
  };
  checkusername = (username) => {
    return this.service
      .post("/checkusername", { username })
      .then((response) => response.status)
      .catch((error) => error.status);
  };
  checkemail = (email) => {
    return this.service
      .post("/checkemail", { email })
      .then((response) => response.status)
      .catch((error) => error.status);
  };
  logout = () => {
    return this.service.post("/logout", {}).then((response) => response.data);
  };
  loggedin = () => {
    return this.service
      .get("/loggedin")
      .then((response) => response.data)
      .catch((error) => error.status === 200);
  };
}

export default AuthService;
