import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { app } from "../config";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const handleSubmit = (values) => {
    alert(Object.keys(values));
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: handleSubmit,
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required."),
      password: Yup.string()
        .min(6, "Password should be minimum 6 characters long.")
        .max(16, "Password should be maximum 16 characters long.")
        .required("Password is required."),
    }),
  });

  return (
    <>
      <Helmet>
        <title>Login - {app.name}</title>
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
          <h4 className="text-light text-center text-uppercase">Login Here</h4>
          <form noValidate onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="text-light">
                Email / Username *:
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Email / Username"
                {...formik.getFieldProps("username")}
              />
              {formik.errors.username && (
                <small className="text-light">
                  =&gt; &nbsp; &times; {formik.errors.username}
                </small>
              )}
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
                {...formik.getFieldProps("password")}
              />
              {formik.errors.password && (
                <small className="text-light">
                  =&gt; &nbsp; &times; {formik.errors.password}
                </small>
              )}
            </div>
            <div className="d-grid">
              <button className="btn btn-default">Login</button>
            </div>
          </form>
          <hr className="text-light" />
          <p className="text-center text-light mb-0">
            Not a member? <Link to="/register">Register Here</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
