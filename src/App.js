import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [userInfo, setUserInfo] = useState({
    fname: "",
    email: "",
    textarea: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    // console.log(event.target.value);
    setUserInfo((prevalue) => {
      return { ...prevalue, [name]: value };
    });
  }
  function handleClick(event) {
    alert(
      `Successfullu Registered ${userInfo.fname}  with Email id ${userInfo.email} and message ${userInfo.textarea}`
    );
  }
  return (
    <div className="row">
      <div className="col-5">
        <p> Gaurav Garg </p>
        <h1> 15 Minute Meeting </h1>
        <p> 15 min </p>
        <p> 9:30am - 9:45am , Friday, September</p>
        <p> 16,2022 </p>
        <p> India Standard Time </p>
      </div>
      <div className="col-5">
        <form className="form">
          <h1>Enter Details </h1>
          <div className="mb-3">
            <label> Name </label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              name="fname"
              // value={userInfo.name}
            />
          </div>
          <div className="mb-3">
            <label> Email </label>
            <input
              type="email"
              onChange={handleChange}
              className="form-control"
              name="email"
              // value={userInfo.email}
            />
          </div>
          <div className="mb-3">
            <button type="submit" class="btn btn-secondary">
              Add Guests
            </button>
          </div>

          <div className="mb-3">
            <label>
              Please Share anything that will prepare for out meeting{" "}
            </label>
            <textarea
              onChange={handleChange}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="textarea"
              // value={userInfo.textarea}
            ></textarea>
          </div>
          <div clasName="mb-3">
            <button onClick={handleClick} type="submit" class="btn btn-primary">
              Schedulec Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
