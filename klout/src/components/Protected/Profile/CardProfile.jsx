import React, { Component } from "react";
import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
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
      _id: this.props._id,
    };

    this.componentDidMount = () => {
      this.getUser();
    };
    this.getUser = () => {
      axios
        .get("http://localhost:3000/api/user/:id/" + "5f5a19a44e6db73942125498")
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
        .put(
          "http://localhost:3000/api/user/" + "5f5a19a44e6db73942125498",
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
                      src={this.state.image}
                    />
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
                      
                        <TextField
                          type="text"
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="username"
                          label="Username"
                          name="username"
                          autoComplete=""
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
                    
                          value={this.state.password}
                          onChange={this.handleChange}
                          placeholder="password"
                          required
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
              <Link href="/AddNetworks" variant="body2">
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
