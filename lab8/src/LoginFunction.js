import React, { useState } from "react";

export default function LoginFunction() {
  var [formData, setFormData] = useState({
    email: "",
    password: "",
    country: "not selected",
  });

  // var [x, setX] = useState(0);

  const countries = ["Canada", "USA", "Haiti"];
  const onValueChanged = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log("form submitted" + JSON.stringify(formData));
  };
  return (
    <>
      <h2>Lpgin function form</h2>

      <form method="post">
        <input
          name="email"
          type="text"
          onChange={(e) => {
            onValueChanged(e);
          }}
          placeholder="enter email"
        />
        <input
          name="password"
          type="password"
          onChange={(e) => {
            onValueChanged(e);
          }}
          placeholder="enter password"
        />

        <select
          name="country"
          onChange={(e) => {
            onValueChanged(e);
          }}
          id=""
        >
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
          <option value=""></option>
        </select>
        <input
          type="submit"
          name="btnSubmit"
          onClick={(e) => onSubmitForm(e)}
          value="Login"
        />
      </form>
    </>
  );
}
