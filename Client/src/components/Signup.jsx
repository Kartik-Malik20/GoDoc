import React from "react";
import logo from "../assets/GoDocBlack.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-black to-slate-900 pt-20">
      <div className="mx-auto ">
        <div className="flex w-10/12 md:w-9/12 bg-white rounded-2xl mx-auto shadow-xl overflow-hidden">
          <div className="w-1/2 hidden md:flex p-8 flex-wrap">
            <img src={logo} alt="signup image" className="rounded-3xl" />
          </div>
          <div className="w-full md:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4 font-bold underline">Register</h2>
            <p className="mb-4">
              Create your account. It's free and only takes a minute.
            </p>
            <form>
              <div className="flex flex-col sm:flex-row gap-5">
                <input
                  type="text"
                  placeholder="First Name"
                  id="firstname"
                  name='firstname'
                  className="border border-slate-400 rounded-lg py-2 px-2 sm:w-1/2"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lastname"
                  name='lastname'
                  className="border border-slate-400 rounded-lg py-2 px-2 sm:w-1/2"
                />
              </div>
              <div className="mt-5">
                <input
                  type="email"
                  placeholder="email"
                  id="email"
                  name='email'
                  className="border border-slate-400 rounded-lg py-2 px-2 w-full"
                  required
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  name='password'
                  className="border border-slate-400 rounded-lg py-2 px-2 w-full"
                  required
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
              <button className="mt-5 p-4 bg-black text-white rounded-xl uppercase font-semibold text-center sm:w-full">
                Register Now
              </button>
              <p className="pt-4">
                Already have an account?{" "}
                <span className="text-red-600 font-semibold">
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
