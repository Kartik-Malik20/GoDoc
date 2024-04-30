import React, { useState } from "react";
import logo from "../assets/GoDocBlack.svg";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import Button from "../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    })
      .then((response) => {
        if (response.data.status) {
          navigate("/");
        }
      })
      .catch((err) => {
        setError("An error occurred during login. Please try again.");
        console.error("Login error:", err);
      });
  };

  return (
    <div>
      <div className="h-screen bg-gradient-to-r from-black to-slate-900 pt-20">
        <div className="mx-auto ">
          <div className="flex w-10/12 md:w-9/12 bg-white rounded-2xl mx-auto shadow-xl overflow-hidden">
            <div className="w-1/2 hidden md:flex p-8 flex-wrap bg-gradient-to-l from-black to-slate-900 ">
              <img src={logo} alt="signup image" className="rounded-3xl" />
            </div>
            <div className="w-full md:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4 font-bold underline">Login</h2>
              <p className="mb-4">Login to your registered account.</p>
              <form onSubmit={handleSubmit}>
                <div className="mt-5">
                  <input
                    type="email"
                    placeholder="email"
                    id="email"
                    name="email"
                    className="border border-slate-400 rounded-lg py-2 px-2 w-full"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    className="border border-slate-400 rounded-lg py-2 px-2 w-full"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="checkbox"
                    className="border border-black"
                    required
                  />
                  <span className="p-1">
                    I accept the{" "}
                    <a href="#" className="text-purple-500 font-semibold">
                      {" "}
                      Terms of Use{" "}
                    </a>{" "}
                    &{" "}
                    <a href="#" className="text-purple-500 font-semibold">
                      Privacy Policy
                    </a>
                  </span>
                </div>
                <Button content='Login' />
                <p className="pt-2">
                  Forgot your password?{" "}
                  <span className="text-blue-600 font-semibold">
                    <Link to="/forgotpassword">Click Here</Link>
                  </span>
                </p>
                <p className="pt-2">
                  Create a new account with us?{" "}
                  <span className="text-red-600 font-semibold">
                    <Link to="/signup">Sign Up</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
