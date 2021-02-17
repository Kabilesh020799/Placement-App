import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./Login.css";
const Login = ({ isAdmin }) => {
  let history = useHistory();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      console.log(login);
      const body = { id: login, password: password };
      if (isAdmin) {
        await axios
          .post("http://localhost:5000/api/login/admin", body)
          .then((res) => {
            console.log(res);
            if (res.data["msg"] === "Login Successfull") {
              const token = res.data["token"];
              localStorage.setItem("adminToken", token);
              history.push("/admin/profile/" + login);
            }
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      } else {
        await axios
          .post("http://localhost:5000/api/login", body)
          .then((res) => {
            console.log(res);
            if (res.data["msg"] === "Login Successfull") {
              const token = res.data["token"];
              localStorage.setItem("secretToken", token);
              history.push("/profile/" + login);
            }
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      }
    } catch (err) {
      console.log(err);
    }

    setLogin("");
    setPassword("");
  };

  return (
    <div className="credentials">
      <div className="credentialsbox">
        <h1 className="heading1">
          {isAdmin ? "Admin Login" : "Student Login"}
        </h1>

        <div className="credentialsdet">
          <form className="studentlogin" onSubmit={submitForm}>
            <input
              type="text"
              placeholder="Username"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
