import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const [credentials, setCred] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://inotebook-pro.onrender.com/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    // console.log(json);
    if (json.success) {
      //redirect
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Loggedin Successfully", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };
  const onChange = (e) => {
    setCred({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="mt-3">
        <h2>Login to Continue</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={credentials.email}
              id="email"
              name="email"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={credentials.password}
              id="password"
              name="password"
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
