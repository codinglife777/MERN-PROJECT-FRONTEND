import React, { Component } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import axios from "axios";
import "./profile.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default class CardProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      password: this.props.password,
      image: this.props.image,
      _id: this.props._id,
    };

    this.componentDidMount = () => {
      this.getUser();
    };

    this.getUser = () => {
      axios
        .get("http://localhost:3000/api/user/:id/5f5f587025d58e2dd37c5593"/*+ this.props._id*/)
        .then(({ data }) => {
          this.setState({
            username: data.username,
            password: data.password,
            image: data.image,
            _id:data._id,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    

  
    
    this.handleChange = ({ target }) => {
      const { name, value } = target;
      this.setState({
        [name]: value,
      });
    };

    this.handleSave = (e) => {
      e.preventDefault();
      axios
        .put(
          "http://localhost:3000/api/user/"+this.state._id,
          this.state
        )
        .then((response) => {
          console.log(response);
          this.props.history.push("/Profile");
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }
  render() {
    return (
      <div class="container-fluid">
        <div class="rc justify-content-center">
          <div class="col-md-12">
            <div >
              <div class="card-header ">
              
                <h8>{this.state._id}</h8>
                <h4>{this.state.username}</h4>
                <div class="card-avatar">
               
                    <img
                      id="avatarProfile"
                      class="img-fluid img-profile rounded-circle float-center"
                      src={this.state.image}
                      alt="Avatar"
                    />
                 
                </div>
              </div>
              <div class="card-body">
                
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <form
                          for="photo"
                          class="custom-file-upload"
                          id="photo"
                          type="file"
                          name="photo"
                        >
                          <CloudUploadIcon /> Photo
                        </form>
                      </div>
                    </div>
                  </div>
                  <form
                  onSubmit={this.handleSave}
                  className={useStyles.form}
                  
                  method="POST"
                  enctype="multipart/form-data"
                >
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <TextField
                          type="text"
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="username"
                          label="Username"
                          name="username"
                          autoComplete="off"
                          autoFocus
                          value={this.state.username}
                          onChange={this.handleChange}
                          placeholder="Username"
                        />
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div class="form-group">
                        <TextField
                          type="password"
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="password"
                          label="Password"
                          name="password"
                          autoComplete="off"
                          value={this.state.password}
                          onChange={this.handleChange}
                          placeholder="password"
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="clearfix"></div>
                  <div class="clearfix"></div>
                  <div class="row">
                    <div class="col-md-12">
                      <Button type="submit" class="btn btn-danger float-right">
                        Update Profile
                      </Button>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-12">
              <Link to="/AddNetworks" variant="body2">
                <Button class="btn btn-primary float-right">
                  Edit Networks
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
