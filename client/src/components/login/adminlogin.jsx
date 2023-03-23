import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = (props) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const url = "http://localhost:8080/car_rent/admin/login";
  const handleSignin = () => {
    const obj = {
      Email: email,
      Password: password,
    };
    axios
      .post(url, obj)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        // navigate("/userBooking")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="adminLoginBox">
        <h2>Sign in to your account</h2>
        <input
          type="email"
          placeholder="Email"
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="signIN_creataccount">
        <p onClick={props.onCreateAccount} className="create_account">
            register admin account
        </p>
          <button onClick={handleSignin}>Sign in</button>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
