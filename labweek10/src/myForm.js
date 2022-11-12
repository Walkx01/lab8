import React, { useState } from "react";

export default function MyForm() {
  var [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
  });

  var [result, setResult] = useState();
  const Provinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon",
  ];
  const onValueChanged = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    setResult(JSON.stringify(formData, null, "\t"));
  };
  return (
    <>
      <h2>Data Entry form</h2>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              name="email"
              onChange={(e) => {
                onValueChanged(e);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="name"
            name="name"
            onChange={(e) => {
              onValueChanged(e);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            name="address"
            onChange={(e) => {
              onValueChanged(e);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="1234 jhon st"
            name="address2"
            onChange={(e) => {
              onValueChanged(e);
            }}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="city"
              onChange={(e) => {
                onValueChanged(e);
              }}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputProvince">Province</label>

            <select
              className="form-control"
              name="province"
              onChange={(e) => {
                onValueChanged(e);
              }}
              id=""
            >
              <option defaultValue value="">
                choose..
              </option>
              {Provinces.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="Postal Code">Postal Code</label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              name="postalCode"
              onChange={(e) => {
                onValueChanged(e);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Agree to terms and services
            </label>
          </div>
        </div>
        <button onClick={(e) => onSubmitForm(e)} className="btn btn-primary">
          submit
        </button>
      </form>

      <pre className="box">{result}</pre>
    </>
  );
}
