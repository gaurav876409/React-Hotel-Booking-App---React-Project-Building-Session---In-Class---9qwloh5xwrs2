import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from "react-router";
import { signInWithPopup } from "@firebase/auth";
import { auth, provider } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("RESULT", result);
        const userName = result.user.displayName;
        navigate("/home", {
          state: {
            userName,
          },
        });
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(email, password);
    if (email === "abcd@email.com" && password === "12345") {
      navigate("/home");
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <div className='container'>
      <h2>Login</h2>
      <div className='input-container'>
        <input type="text" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin} className='login'>Sign In</button>
        <h3><span>or Sign In with</span></h3>
        <button className='login_google' onClick={handleSignIn}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google Logo"
          />
          Google
        </button>
      </div>
    </div>
  )
}

export default Login;