import React, { useState } from "react";
import bacgroundImage from "./images/tree-background-big.png";
import amazonLogo from "./images/amazon.png";
import treeLogo from "./images/tree-logo-big.png";
import errorIcon from "./images/Group 2.svg";
import facebookLogo from "./images/facebook-big.png";
import googleLogo from "./images/google-big.png";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Perform login logic here
    // Validate email
    if (!isValidEmail(email)) {
      setEmailError("Email Field is required");
    } else {
      // Proceed with login
    }
  };

  const isValidEmail = (email) => {
    // Simple email validation check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <div
        className="h-30vh w-full bg-red bg-center z-0"
        style={{
          position: "relative",
          top: "0",
          minHeight: "40vh"
        }}
      >
        <img
          className=" h-full w-full"
          src={bacgroundImage}
          alt="background_Imag"
        />
      </div>

      <div
        className="w-50vw flex flex-col items-center justify-start bg-white mb-8 rounded-lg h-screen z-10"
        style={{
          position: "relative",
          top: "-10vh",
          minWidth: "40vw",
          maxWidth: "50vw"
          // maxHeight: "100vh",
          // minHeight: "100vh"
        }}
      >
        <div
          className="flex w-full  justify-center"
          style={{ boxShadow: "0px 3px 7px #00000029" }}
        >
          <img src={amazonLogo} alt="Logo" className="h-20 w-20" />
        </div>
        <h2
          style={{ color: "#20B716" }}
          className="text-3xl font-semibold mt-1"
        >
          Login
        </h2>
        <img src={treeLogo} alt="Logo" className="h-22 w-25" />

        <input
          id="email"
          type="text"
          placeholder="Email"
          style={{ "::placeholder": { color: "#20B716" } }}
          value={email}
          onChange={handleEmailChange}
          className="mt-2 px-4 py-2  w-3/4  border-b"
        />
        {emailError && (
          <div className="flex items-start mt-1">
            <img src={errorIcon} alt="Error" className="h-4 w-4 mr-1" />
            <span style={{ color: "#EE2D6E" }} className="text-sm">
              {emailError}
            </span>
          </div>
        )}

        <input
          type="password"
          style={{ color: "#20B716" }}
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="mt-3 px-4 py-2 w-3/4 border-b"
        />

        <button
          onClick={handleLogin}
          style={{ backgroundColor: "#20B716" }}
          className="mt-6 hover:bg-blue-600 text-white px-6 py-2 w-3/4 rounded-full"
        >
          Sign in
        </button>

        <div className="flex justify-between w-3/4">
          <a href="#" className="mt-2  hover:underline">
            Forgot Password?
          </a>
          <a
            href="#"
            style={{ color: "#D9185F" }}
            className="mt-2 hover:underline"
          >
            New user? Signup
          </a>
        </div>

        <h3 className="mt-2 text-center">OR</h3>

        <div className="flex w-full mb-10 flex-col items-center justify-center bg-white mb-0 gap-3 rounded-lg">
          <button
            style={{ backgroundColor: "#4285F4" }}
            className="flex items-center  mt-6  hover:bg-blue-600 text-white px-2 py-2 w-3/4"
          >
            <img
              src={googleLogo}
              alt="Google Logo"
              className="h-8 w-8 ml-0 pl-0 mr-3"
            />
            <span className="flex-grow text-center">Continue with Gmail</span>
          </button>
          <button
            style={{ backgroundColor: "#1877F2" }}
            className="flex items-center  mt-6 mb-4  hover:bg-blue-600 text-white px-2 py-2 w-3/4"
          >
            <img
              src={facebookLogo}
              alt="Facebook Logo"
              className="h-8  w-8 ml-0 pl-0 mr-3"
            />
            <span className="flex-grow text-center">
              Continue with Facebook
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
