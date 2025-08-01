import React from "react";
import { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logedin, setlogedin] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    console.log(data);

    const apiUrl = "http://52.23.211.123:3000/login";
    const requestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = fetch(apiUrl, requestOption);
    response
      .then((res) => res.json())
      .then((res) => {
        setlogedin(res);
        // console.log(res)
      });
  }
  return (
    <>
      <h1>Login</h1>
      <h2 style={{ color: "red" }}>{logedin}</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
