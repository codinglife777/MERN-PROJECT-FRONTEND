import React, { Component } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import axios from "axios";
import "./profile.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
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
      _id:this.props._id
      
     
    };
    
    this.componentDidMount = () => {
      this.getUser();
    };
    this.getUser = () => {
      
      axios
        .get("${process.env.REACT_APP_API_URL}/user/:id/" + "5f5a19a44e6db73942125498")
        .then(({ data }) => {
          this.setState({
            username: data.username,
            password: data.password,
            image: data.image,
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
        .put("http://localhost:3000/api/user/:id/" + "5f5a19a44e6db73942125498", this.state)
        .then((response) => {
          console.log(response);
          this.props.history.push('/Profile');
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }
  render() {
    return (
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="card shadow mb-4">
              <div class="card-header bg-gradient-primary">
                <p class="card-category text-center text-white">
                  Complete your profile
                </p>

                <div class="card-avatar">
                  <a href="">
                    <img
                      id="avatarProfile"
                      class="img-fluid img-profile rounded-circle float-center"
                      src={this.state.image} />
                  </a>
                </div>
              </div>
              <div class="card-body">
                <form
                  onSubmit={this.handleSave}
                  className={useStyles.form}
                  action="/app/user"
                  method="POST"
                  enctype="multipart/form-data"
                >
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
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="bmd-label-floating">Username</label>
                        <TextField
                          type="text"
                          name="username"
                          class="form-control"
                          value={this.state.username}
                          onChange={this.handleChange}
                          placeholder="Username" />
                        
                        
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="bmd-label-floating">Password</label>
                        <TextField
                          type="password"
                          name="password"
                          class="form-control"
                          value={this.state.password}
                          onChange={this.handleChange}
                          placeholder="password"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <Button type="submit" class="btn btn-danger pull-right">
                        Update Profile
                      </Button>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
