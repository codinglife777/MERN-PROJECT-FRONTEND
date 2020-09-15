import React, { Component } from 'react';
import AuthService from '../Protected/services/AuthService';
 
class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }
 
  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, loggedInUser: nextProps["userInSession"]});
  }
 
  logoutUser = () =>{
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);  
    })
  }
 
  render(){
    if(this.state.loggedInUser){
      return(
        <nav component="main" maxWidth="xs" container direction="column" justify="center" alignItems="center">
          <ul>
            <li>Welcome, {this.state.loggedInUser.username}{" "}{this.state.loggedInUser._id}</li>
          
            
          </ul>
        </nav>
      )
    } else {
      return ( 
        <nav className="nav-style">
          <ul>
            <li>Welcome, Logged</li>
          
            
          </ul>
        </nav>
      )
    }
  }
}
 
export default Navbar;