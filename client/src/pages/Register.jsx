import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { app } from "../config";

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Register - {app.name}</title>
      </Helmet>
      <div className="page primary-bg d-flex align-items-center justify-content-center p-2">
        <div
          className="p-3 secondary-bg"
          style={{ borderRadius: "5px", maxWidth: "475px", width: "100%" }}
        >
          <h1
            className="text-light text-center"
            style={{ fontFamily: "Ubuntu" }}
          >
            talkshawk
          </h1>
          <h4 className="text-light text-center text-uppercase">
            Register Here
          </h4>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="text-light">
                Username *:
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="text-light">
                Email *:
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="text-light">
                Password *:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="r_password" className="text-light">
                Retype Password *:
              </label>
              <input
                type="password"
                className="form-control"
                id="r_password"
                placeholder="Retype Password"
              />
            </div>
            <div className="d-grid">
              <button className="btn btn-default">Register</button>
            </div>
          </form>
          <hr className="text-light" />
          <p className="text-center text-light mb-0">
            Already registered? <Link to="/login">Login Here</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
