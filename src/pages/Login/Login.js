import { useState } from "react";
import axios from "axios";
import "./Login.scss";

import { useNavigate, Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import AlertBox from "../../components/AlertBox/AlertBox";

import logo from "../../assets/images/logo.png";

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string().required("Password is a required field"),
});

function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          const newInputs = {
            email: values.email,
            password: values.password,
          };
          axios
            .post("http://localhost:5050/users/login", newInputs)
            .then((response) => {
              sessionStorage.setItem("token", response.data.token);
              navigate(`/dashboard/${response.data.user}`);
            })
            .catch((error) => setError(error.response.data));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <section className="login-page">
            <div className="login">
              <div className="form">
                <form noValidate onSubmit={handleSubmit}>
                  <Link to="/">
                    <img
                      src={logo}
                      height="30"
                      className="d-inline-block align-top mb-4"
                      alt="IOT ANALYTICAL logo"
                    />
                  </Link>
                  {error && (
                    <AlertBox
                      variant={"danger"}
                      icon={"exclamation"}
                      text={error}
                    />
                  )}

                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter email"
                    className="form-control inp_text"
                    id="email"
                  />
                  {/* If validation is not passed show errors */}
                  <p className="error">
                    {errors.email && touched.email && errors.email}
                  </p>

                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Enter password"
                    className="form-control"
                  />
                  {/* If validation is not passed show errors */}
                  <p className="error">
                    {errors.password && touched.password && errors.password}
                  </p>
                  <button type="submit">Login</button>
                </form>
              </div>
            </div>
          </section>
        )}
      </Formik>
    </>
  );
}

export default Login;
