import React from "react";

function CardProfile() {
  return (
    <div class="content">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card shadow mb-4">
              <div class="card-header bg-gradient-primary">
                <p class="card-category text-center text-white">
                  Complete your profile
                </p>

                <div class="card-avatar">
                  <a href="">
                    <img
                      id="avatarProfile"
                      class="img-fluid img-profile rounded-circle float-left"
                      src="{{user.imgPath}}"
                    />
                  </a>
                </div>
                <div class="card-body float-right text-center">
                  <h4 class="card-title text-white">Chus</h4>
                  <h6 class="card-category text-white"></h6>
                  <h6 class="card-category text-white"></h6>
                  <h6 class="card-category text-white"></h6>
                  <h6 class="card-title text-white"></h6>
                </div>
              </div>
              <div class="card-body">
                <form
                  action="/app/user"
                  method="POST"
                  enctype="multipart/form-data"
                >
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="photo" class="custom-file-upload">
                          <i class="fa fa-cloud-upload"></i> Photo
                        </label>
                        <input
                          class="btn btn-primary"
                          id="photo"
                          type="file"
                          name="photo"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="bmd-label-floating">Username</label>
                        <input
                          type="text"
                          name="occupation"
                          class="form-control"
                          value="{{user.username}}"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="bmd-label-floating">
                          username address
                        </label>
                        <input
                          type="username"
                          name="username"
                          class="form-control"
                          value="{{user.username}}"
                          placeholder="username"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="bmd-label-floating">Name</label>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          value="{{user.name}}"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="bmd-label-floating">Password</label>
                        <input
                          type="password"
                          name="password"
                          class="form-control"
                          value="{{user.password}}"
                          placeholder="password"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <button type="submit" class="btn btn-primary pull-right">
                        Update Profile
                      </button>
                      <div class="clearfix"></div>

                      <hr />
                      <p class="btn btn-google btn-user btn-block"></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProfile;
