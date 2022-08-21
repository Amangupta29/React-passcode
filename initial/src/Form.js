import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import PasswordChange from "./PasswordChange";

function Form() {
  const [newPassword, setNewPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleReEnterPasswordChange = (event) => {
    setReEnterPassword(event.target.value);
  };

  useEffect(() => {
    if (newPassword !== reEnterPassword) {
      document.getElementsByClassName("dontMatch")[0].style.display = "block";
    } else {
      document.getElementsByClassName("dontMatch")[0].style.display = "none";
    }
  }, [reEnterPassword]);

  return (
    <div>
      <header className="flex container-blue">
        <img src={logo} alt="pass" className="logo" />
        <ul className="list flex-list">
          <li>Join a Race</li>
          <li>Leaderboard</li>
          <li className="login">Login</li>
        </ul>
      </header>

      <div className="content">
        <div className="imgBck">
          {isSubmitted ? (
            <PasswordChange />
          ) : (
            <div>
              <div className="main">
                <h1 className="align">Password Reset</h1>
                <h4 className="align-items-1">New Password</h4>
                <input
                  className="input-field"
                  onChange={handleNewPasswordChange}
                />
                <h4 className="align-items-2">Re-Enter Password</h4>
                <input
                  className="input-field"
                  onChange={handleReEnterPasswordChange}
                />
                <p className="dontMatch" style={{ color: "red" }}>
                  Passwords do not match
                </p>
              </div>
              <button
                className="btn"
                onClick={() => setIsSubmitted(true)}
                disabled={
                  newPassword !== reEnterPassword ||
                  !newPassword ||
                  !reEnterPassword
                }
              >
                Reset Password
              </button>
            </div>
          )}
        </div>
      </div>

      <div>
        <ul className="foot-elements ">
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Tutorials</li>
          <li>Terms of Service</li>
        </ul>
      </div>
    </div>
  );
}

export default Form;
