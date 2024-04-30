import Axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../assets/GoDocBlack.svg";

const ResetPass = () => {
  const [password, setPassword] = useState("");
  const {token} = useParams()

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/reset-password/"+token, {
      password,
    })
      .then((response) => {
        if (response.data.status) {
          navigate("/login");
        }
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
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
              <h2 className="text-3xl mb-4 font-bold underline text-center">Reset Password</h2>
              <p className="mb-4">Change your password and reset it.</p>
              <form onSubmit={handleSubmit}>
                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="password"
                    id="password"
                    name="password"
                    className="border border-slate-400 rounded-lg py-2 px-2 w-full"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button className="mt-5 p-4 bg-black text-white rounded-xl uppercase font-semibold text-center sm:w-full">
                  Reset
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPass;
