import React, { Component } from "react";

export default class LoginClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      country: "not selected",
    };

    this.countries = ["Canada", "USA", "Haiti"];
  }

  onValueChanged = (event) => {
    // console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    console.log("form submitted" + JSON.stringify(this.state));
  };
  render() {
    return (
      <>
        <h2>LoginClass</h2>

        <form method="post">
          <input
            name="email"
            type="text"
            onChange={(e) => {
              this.onValueChanged(e);
            }}
            placeholder="enter email"
          />
          <input
            name="password"
            type="password"
            onChange={(e) => {
              this.onValueChanged(e);
            }}
            placeholder="enter password"
          />

          <select
            name="country"
            onChange={(e) => {
              this.onValueChanged(e);
            }}
            id=""
          >
            {this.countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
            <option value=""></option>
          </select>
          <input
            type="submit"
            name="btnSubmit"
            onClick={(e) => this.onSubmitForm(e)}
            value="Login"
          />
        </form>
      </>
    );
  }
}
