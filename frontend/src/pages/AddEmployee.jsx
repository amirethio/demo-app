import React from "react";
import { useState } from "react";
function AddEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   console.log(firstName , lastName , email , password)

  function handleSubmit(event) {
    event.preventDefault();
    console.log("preventing default behavior");
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    };
    const apiUrl = "http://localhost:3000/add-employment";
    const requestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const response = fetch(apiUrl, requestOption);
    response.then((res) => res.json()).then((res) => console.log(res));
  }
  return (
    <>
      <div>AddEmployee form</div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="first_name"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="last_name"
          onChange={(event) => {
            setlastName(event.target.value);
          }}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <label htmlFor="Pass">Password</label>
        <input
          type="password"
          name="password"
          id="pass"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button type="submit">Submit form</button>
      </form>
      {/* {console.log(firstName)} */}
    </>
  );
}

export default AddEmployee;
