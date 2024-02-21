import React from "react";
import "../Profie.css";
const Account = () => {
  return (
    <div className="app_profile-account">
      <div className="app_profile-account-box">
        <div className="app_profile-account-box-image-profile">
          <i className="bx bx-user"></i>
        </div>
        <div className="app_profile-account-box-text">
          <h6>Upload a Profile Picture</h6>
          <p>hamdie</p>
        </div>
        <div className=" app_profile-account-box-btn">
          <button type="button" className="btn ">
            Update
          </button>
        </div>
      </div>

      <div className="app_profile-account-details">
        <h5 className="app_profile-account-details-title">Change User Information Here</h5>
        <form>
          <div className="row">
            <div className="col-sm-12 col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="FullName"
              />
            </div>
            <div className="col-sm-12 col-md-6 mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="col-sm-12 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <input type="text" className="form-control" placeholder="City" />
            </div>
            <div className="col-sm-12 col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="State" />
            </div>
            <div className="col-sm-12 col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="LGA" />
            </div>
            <div className="col-sm-12 col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Country"
              />
            </div>

            <div className="col-sm-12 change-btn">
              <button type="button" className="btn ">
                Update Information
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
